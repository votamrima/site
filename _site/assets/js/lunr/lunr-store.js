var store = [{
        "title": "Using logrotate",
        "excerpt":"create configuration file: bash-3.2# cat /etc/logrotate.d/myconf-logrotate.conf PATH_TO_FILE/LOG.FILE { daily missingok rotate 10 compress delaycompress compresscmd /usr/bin/gzip notifempty copytruncate } Testing configuration logrotate /etc/logrotate.conf --force -d Add a crontab job. A job will be run every hour. export EDITOR=vi crontab -e &gt;&gt; 0 * * * * /usr/sbin/logrotate /etc/logrotate.conf --force &gt;...","categories": [],
        "tags": ["logrotate","linux"],
        "url": "/site/using-logrotate/",
        "teaser": null
      },{
        "title": "Cheatsheet for Vagrant",
        "excerpt":"Creating a VM vagrant init – Initialize Vagrant with a Vagrantfile and ./.vagrant directory, using no specified base image. Beforeyou can do vagrant up, you’ll need to specify a base image in the Vagrantfile. vagrant init – Initialize Vagrant with a specific box. To find a box, go to the...","categories": [],
        "tags": ["puppet"],
        "url": "/site/vagrant-cheetsheet/",
        "teaser": null
      },{
        "title": "Removing tmux from the puppet learning machine",
        "excerpt":"   cleanly and gracefully killing all tmux opened sessions and server too: ``` tmux kill-server   2. or killing all tmux processes:  pkill -f tmux    3. removing tmux application  yum erase -y tmux ````  ","categories": [],
        "tags": ["puppet"],
        "url": "/site/tmux-remove-puppetserver/",
        "teaser": null
      },{
        "title": "Using hiera in puppet. Example: creating a folder",
        "excerpt":"In this post I am trying to show how to configure hiera files on puppet master. For demonstration purpose I use a simple task that will create a folder. The main idea of this post is to get basic understand of hiera concept. Look up where is stored the main...","categories": [],
        "tags": ["hiera","puppet"],
        "url": "/site/hiera-in-puppet/",
        "teaser": null
      },{
        "title": "Simple HTTPS Server using python",
        "excerpt":"Generating key and cert files with Openssl: [root@test crazytests]# openssl req -x509 -newkey rsa:4096 -keyout testkey.pem -out testcert.pem Generating a 4096 bit RSA private key .......++ ..............................................................................................................................................................................................................................++ writing new private key to 'testkey.pem' Enter PEM pass phrase: Verifying - Enter PEM pass phrase: ----- You are about to be asked...","categories": [],
        "tags": ["python","https"],
        "url": "/site/a-simple-python-server/",
        "teaser": null
      },{
        "title": " Giving more space for the /boot filesystem",
        "excerpt":"Recently I tried to update my centos 7 test machine. Unfortunatelly, yum update command returned the following error “At least 54MB more space needed on the /boot filesystem.”. df -h command showed following: [root@server ~]# df -h Filesystem Size Used Avail Use% Mounted on /dev/mapper/cl_centos03-root 32G 13G 19G 41% /...","categories": [],
        "tags": ["filesystem","linux","disk"],
        "url": "/site/more-space-for-boot-fs/",
        "teaser": null
      },{
        "title": "Is a port opened?",
        "excerpt":"If there is no telnet tools is installed on the host, try the following command to check if a port opened or not. -bash-4.2$ timeout 1 bash -c '(echo &gt; /dev/tcp/ip_adderess/port) &gt;/dev/null 2&gt;&amp;1' &amp;&amp; echo Port is open || echo Port is closed Example -bash-4.2$ timeout 1 bash -c '(echo...","categories": [],
        "tags": ["port","linux","network"],
        "url": "/site/port-checking/",
        "teaser": null
      },{
        "title": "Reseting root password in centos",
        "excerpt":"In the grub menu select actual kernel and type “-e” Go to the line with “linux 16” and change ro to rw init=/sysroot/bin/sh”. before: after: Press ctrl+X for starting a single mode session When single mode is started access to the system…: chroot /sysroot And using passwd command change the...","categories": [],
        "tags": ["linux","centos","root"],
        "url": "/site/reseting-root-password/",
        "teaser": null
      },{
        "title": "Creating a simple NFS share on centos",
        "excerpt":"In this post is noted a way of creating a simple NFS share server on centos 8 machine. 1. Installing NFS On the server side we should install nfs-utils packet: [root@nfs-server ~]# yum install nfs-utils and start/enable nfs-server service [root@nfs-server ~]# systemctl start nfs-server [root@nfs-server ~]# ^start^enable systemctl enable nfs-server...","categories": [],
        "tags": ["nfs","linux"],
        "url": "/site/creating-simple-nfs-share/",
        "teaser": null
      },{
        "title": "Editing files in Linux VM using remote Visual Studio Code",
        "excerpt":"Sometimes we need to edit a file directly on Linux VM using Visual Studio Code. Launch Visual Studio Code. Additionally, you have to able to connect to the bash of remote machine from VS Code. Go to the ‘Extensions’ page and search for ‘Remote VSCode’ Install the extension and re-launch...","categories": [],
        "tags": ["vscode","rmate"],
        "url": "/site/edit-files-with-rmate/",
        "teaser": null
      },{
        "title": "Check and approve pendings csrs in Openshift cluster",
        "excerpt":"After installing Openshift cluster you should log in and check for csr. Moreover, I regularly controls if some csr have to be approved or not. [admin@ocp4 try]$ oc get csr NAME AGE SIGNERNAME REQUESTOR CONDITION csr-6m4m7 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:etcd-2.okd4.home.lab Approved,Issued csr-7qww9 4m13s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-compute-1.okd4.home.lab Approved,Issued csr-glzgb 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-control-plane-1.okd4.home.lab Pending...","categories": [],
        "tags": ["openshift"],
        "url": "/site/check-approve-csr-openshift/",
        "teaser": null
      },{
        "title": "Create persistance storage for openshift registry",
        "excerpt":"Set ip NFS Server and export a created share. A simple NFS is described here. Configure registry For creating an persistent volume I used to create setup_pv.yaml file with the following content: vim setup_pv.yml apiVersion: v1 kind: PersistentVolume metadata: name: test-pv spec: capacity: storage: 10Gi accessModes: - ReadWriteMany persistentVolumeReclaimPolicy: Retain...","categories": [],
        "tags": ["openshift"],
        "url": "/site/create-persistence-storage-for-openshift-registry/",
        "teaser": null
      },{
        "title": "Configure HTPasswd Identity Provider and create OAuth users for Openshift",
        "excerpt":"Using default user During installation Openshift creates default kubeadmin with a password. Password you can find in installation folder: &lt;installation_folder&gt;/auth/kubeadmin-password [admin@ocp4 try]$ cat install_dir/auth/kubeadmin-password bVM5i-CxeZI-NDvoS-d9wtV[admin@ocp4 try]$ Additionally, under &lt;installation_folder&gt;/auth/ is located kubeconfig file that can be used for loging to openshift cluster and working with cluster as well. [admin@ocp4 try]$...","categories": [],
        "tags": ["openshift","htpasswd","oauth"],
        "url": "/site/create-openshift-oauth-users/",
        "teaser": null
      },{
        "title": "Deploy a MySQL database on Podman with regular user",
        "excerpt":"Install mysql client: sudo yum install mysql Create a folder on the local host for storing databases and configure SELinux option: mkdir /opt/homelab_projects/mysql_db_dir_noroot [admin@workstation homelab_projects]$ sudo semanage fcontext -a -t container_file_t '/opt/homelab_projects/mysql_db_dir_noroot(/*)' [admin@workstation homelab_projects]$ restorecon -v 'mysql_db_dir_noroot' [admin@workstation homelab_projects]$ ll -Z total 56 ......... drwxrwxr-x. 2 admin admin unconfined_u:object_r:container_file_t:s0 4096...","categories": [],
        "tags": ["podman","mysql"],
        "url": "/site/running-database-on-podman/",
        "teaser": null
      },{
        "title": "Deploy a python application using podman. Deploy rootless container and connect podmanized database container",
        "excerpt":"In order to connect a rootless application container to the rootles database container I used port mapping technique. The following steps were used for successfully applying application with connection to database. Deploy database container. I mapped the database port 3306 from the container to the port 33306 at host machine....","categories": [],
        "tags": ["podman","python"],
        "url": "/site/deploy-application-on-podman/",
        "teaser": null
      },{
        "title": "A short help for regular expressions",
        "excerpt":"Most used regex paterns Other patterns Examples: Source Most used regex paterns Token Explanation [abcd] a single character of a/b/c or d [^abcd] any character except a/b/c or d [a-z] matches any characters between a to z [a-zA-Z] matches any characters between a to z and A to Z [^a-p]...","categories": [],
        "tags": ["regex"],
        "url": "/site/regex-help/",
        "teaser": null
      }]
