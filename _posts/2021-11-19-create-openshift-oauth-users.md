---
layout: single
title: "Configure HTPasswd Identity Provider and create OAuth users for Openshift"
subtitle: ""
date: 2021-11-19 18:30:00 +0100
background: '/image/01.jpg'
tags: ['openshift', 'htpasswd', 'oauth']
---

### Using default user
During installation Openshift creates default *kubeadmin* with a password. Password you can find in installation folder: ``<installation_folder>/auth/kubeadmin-password``

````
[admin@ocp4 try]$ cat install_dir/auth/kubeadmin-password 
bVM5i-CxeZI-NDvoS-d9wtV[admin@ocp4 try]$ 
````

Additionally, under ``<installation_folder>/auth/`` is located *kubeconfig* file that can be used for loging to openshift cluster and working with cluster as well.

````
[admin@ocp4 try]$ oc --kubeconfig install_dir/auth/kubeconfig get node
NAME                                 STATUS     ROLES    AGE   VERSION
etcd-2.okd4.home.lab                 Ready      master   35d   v1.20.0+558d959-1089
etcd-3.okd4.home.lab                 Ready      master   28d   v1.20.0+558d959-1089
okd4-compute-1.okd4.home.lab         Ready      worker   35d   v1.20.0+558d959-1089
okd4-control-plane-1.okd4.home.lab   Ready      master   35d   v1.20.0+558d959-1089
````

You can set kubeconfig to KUBECONFIG environment variable:

````
export KUBECONFIG=/opt/install_dir/auth/kubeconfig
````


### OAuth and identity providers
Authentication in Openshift is supported by Authentication Operator which runs on OAuth server. Users attempt to authenticate to the Opeshift API using using OAuth access tokens. 

In order to use OAuth server it should be enabled and configured as well. Using kubeadmin user I specifed ``HTPasswd`` identity provider. Generally, the following list of identity providers are able to configure and use in Openshift: HTPasswd, Keystone, LDAP, Basic authentication, Request header, GitHub or GitHub Enterprise, GitLab, Google, OpenID Connect. More in detail about each of the provider is given in [Openhift Documentation](https://docs.openshift.com/container-platform/4.7/authentication/understanding-identity-provider.html)


### Configuring HTPasswd identity provider
Create an HTPasswd authentication file using following format: ``htpasswd -c -b -B <filename> <username> <password>``. ``-c`` parameter creates file. ``-b`` uses a password which is given in command from the command line. ``-B`` - Force bcrypt encryption of the password

````
[admin@ocp4 try]$ htpasswd -c -b -B my_ocp_users admin admin
Adding password for user admin
[admin@ocp4 try]$ 
````

Check content of the created file:
````
[admin@ocp4 try]$ cat my_ocp_users 
admin:$2y$05$XteSEzWTBX8HlzqHQv2ryecUY5On/7DBfTSnCjWfyCFlDhaDdufcq
[admin@ocp4 try]$ 
````

Create another user. Do not use ``-c`` parameter. In this case you create a file again with the new content.
````
[admin@ocp4 try]$ htpasswd -b -B my_ocp_users developer developer
Adding password for user developer
[admin@ocp4 try]$ cat my_ocp_users 
admin:$2y$05$XteSEzWTBX8HlzqHQv2ryecUY5On/7DBfTSnCjWfyCFlDhaDdufcq
developer:$2y$05$Ab1TxMQV0T7te6NmKXaALOX/6XsFHsV06LYcaZHwIdIDpkJiObN2m
[admin@ocp4 try]$ 
````

Create a secret from created file. Here the secret named as ``myusers`` and used a prefix ``htpasswd`` in front of the the path to the file. Moreover, the secret should be create in namespace ``openshift-config``
````
[admin@ocp4 try]$ oc create secret generic myusers --from-file htpasswd=my_ocp_users -n openshift-config
secret/localusers created
[admin@ocp4 try]$ 
````

Checking out created secret:
````
[admin@ocp4 try]$ oc get secrets -n openshift-config
NAME                                  TYPE                                  DATA   AGE
......
myusers                            Opaque                                1      27s
.......
[admin@ocp4 try]$ 

````

On next step I modified OAuth custom resource. It was able to create a new file and apply it using ``oc create -f <resource_file>.yml`` as it shown in openshift documentation. But I prefer to export the existing oauth custom resource, modify ``spec`` section and apply the modified one:
````
[admin@ocp4 try]$ oc get oauth cluster -o yaml > oauth_modify.yml
````
````
[admin@ocp4 try]$ vim oauth_modify.yml 
apiVersion: config.openshift.io/v1
kind: OAuth
.........
spec:
  identityProviders:
  - htpasswd:
      fileData:
        name: myusers
    mappingMethod: claim
    name: myusers
    type: HTPasswd
````
````
[admin@ocp4 try]$ oc replace -f oauth_modify.yml 
oauth.config.openshift.io/cluster replaced
[admin@ocp4 try]$ 
````

And check if pods of openshift-authentication namespaces are being recreated:
````
[admin@ocp4 try]$ oc get pods -n openshift-authentication
NAME                               READY   STATUS        RESTARTS   AGE
oauth-openshift-647d98d4db-pmtx6   0/1     Terminating   0          26d
oauth-openshift-777bfcd76c-v2xzl   1/1     Running       0          49s
oauth-openshift-777bfcd76c-wpqsq   1/1     Running       0          41s
````

Here I assigned properly roles to the created users. For admin user I want to give full access to the openshift cluster. Therefore, it should applied ``cluster-admin`` role. Developer user will be granted to create new projects. 

````
[admin@ocp4 try]$ oc adm policy add-cluster-role-to-user cluster-admin admin
Warning: User 'admin' not found
clusterrole.rbac.authorization.k8s.io/cluster-admin added: "admin"
[admin@ocp4 try]$ 
[admin@ocp4 ~]$ oc login -u admin -p admin oauth-openshift.okd4.home.lab:6443
Login successful.

You have access to 63 projects, the list has been suppressed. You can list all projects with 'oc projects'

Using project "default".
[admin@ocp4 ~]$ 
[admin@ocp4 ~]$ oc whoami 
admin
````

Before giving any role to developer user I am going to disabled priviledge to create projects for all users. This priviledge creates Openshift during installation by default.

````
[admin@ocp4 ~]$ oc get clusterrolebinding | grep self-prov
self-provisioners                        ClusterRole/self-provisioner             36d
[admin@ocp4 ~]$ 
````

Describe a self-provisioners rolebinding. Check out the name of the cluster role and group to which it was assgned by default. 

````
[admin@ocp4 ~]$ oc describe clusterrolebinding self-provisioners
Name:         self-provisioners
Labels:       <none>
Annotations:  rbac.authorization.kubernetes.io/autoupdate: true
Role:
  Kind:  ClusterRole
  Name:  self-provisioner
Subjects:
  Kind   Name                        Namespace
  ----   ----                        ---------
  Group  system:authenticated:oauth  
[admin@ocp4 ~]$ 
````

And remove the ``self-provisioner`` role from the ``system:authenticated:oauth`` group

````
[admin@ocp4 ~]$ oc adm policy remove-cluster-role-from-group self-provisioner system:authenticated:oauth
Warning: Your changes may get lost whenever a master is restarted, unless you prevent reconciliation of this rolebinding using the following command: 
oc annotate clusterrolebinding.rbac self-provisioners 'rbac.authorization.kubernetes.io/autoupdate=false' --overwrite
clusterrole.rbac.authorization.k8s.io/self-provisioner removed: "system:authenticated:oauth"
[admin@ocp4 ~]$ 
````

Thus will be removed self-provisioners rolebinding and will be disabled priviledge to create projects for all users. 

````
[admin@ocp4 ~]$ oc get clusterrolebinding | grep self-prov
[admin@ocp4 ~]$ 
````

And granting self-provisioner cluster role to developer user. 

Created a group for developer user and add the user into the group
````
[admin@ocp4 ~]$ oc adm groups new developers
group.user.openshift.io/developers created
[admin@ocp4 ~]$ 
[admin@ocp4 ~]$ oc adm groups add-users developers developer
group.user.openshift.io/developers added: "developer"
[admin@ocp4 ~]$ 
````

Assigned self-provisioner role to developers group:

````
[admin@ocp4 ~]$ oc adm policy add-cluster-role-to-group self-provisioner developers
clusterrole.rbac.authorization.k8s.io/self-provisioner added: "developers"
[admin@ocp4 ~]$ 
````

Verified result:

````
[admin@ocp4 ~]$ oc login -u developer -p developer
Login successful.

You have one project on this server: "default"

Using project "default".
[admin@ocp4 ~]$ oc new-project test
Now using project "test" on server "https://localhost:6443".

You can add applications to this project with the 'new-app' command. For example, try:

    oc new-app rails-postgresql-example

to build a new example application in Ruby. Or use kubectl to deploy a simple Kubernetes application:

    kubectl create deployment hello-node --image=k8s.gcr.io/serve_hostname

[admin@ocp4 ~]$
````

