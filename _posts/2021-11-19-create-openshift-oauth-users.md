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
[admin@dns try]$ cat install_dir/auth/kubeadmin-password 
bVM5i-CxeZI-NDvoS-d9wtV[admin@dns try]$ 
````

Additionally, under ```<installation_folder>/auth/``is located *kubeconfig* file that can be used for loging to openshift cluster and working with cluster as well.

````
[admin@dns try]$ oc --kubeconfig install_dir/auth/kubeconfig get node
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


### Using OAuth