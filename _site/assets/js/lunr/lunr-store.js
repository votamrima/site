var store = [{
        "title": "Using logrotate",
        "excerpt":"create configuration file: bash-3.2# cat /etc/logrotate.d/myconf-logrotate.conf PATH_TO_FILE/LOG.FILE { daily missingok rotate 10 compress delaycompress compresscmd /usr/bin/gzip notifempty copytruncate } Testing configuration logrotate /etc/logrotate.conf --force -d Add a crontab job. A job will be run every hour. export EDITOR=vi crontab -e &gt;&gt; 0 * * * * /usr/sbin/logrotate /etc/logrotate.conf --force &gt;...","categories": [],
        "tags": ["logrotate","linux"],
        "url": "/site/using-logrotate/",
        "teaser": null
      },{
        "title": "Cheatsheet for Vagrant",
        "excerpt":"Creating a VM vagrant init – Initialize Vagrant with a Vagrantfile and ./.vagrant directory, using no specified base image. Beforeyou can do vagrant up, you’ll need to specify a base image in the Vagrantfile. vagrant init – Initialize Vagrant with a specific box. To find a box, go to the...","categories": [],
        "tags": ["vagrant"],
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
        "tags": ["puppet"],
        "url": "/site/hiera-in-puppet/",
        "teaser": null
      },{
        "title": "Simple HTTPS Server using python",
        "excerpt":"Generating key and cert files with Openssl: [root@test crazytests]# openssl req -x509 -newkey rsa:4096 -keyout testkey.pem -out testcert.pem Generating a 4096 bit RSA private key .......++ ..............................................................................................................................................................................................................................++ writing new private key to 'testkey.pem' Enter PEM pass phrase: Verifying - Enter PEM pass phrase: ----- You are about to be asked...","categories": [],
        "tags": ["python","webserver"],
        "url": "/site/a-simple-python-server/",
        "teaser": null
      },{
        "title": "Expanding /boot partition",
        "excerpt":"Recently I tried to update my centos 7 test machine. Unfortunatelly, yum update command returned the following error “At least 54MB more space needed on the /boot filesystem.”. df -h command showed following: [root@server ~]# df -h Filesystem Size Used Avail Use% Mounted on /dev/mapper/cl_centos03-root 32G 13G 19G 41% /...","categories": [],
        "tags": ["linux"],
        "url": "/site/more-space-for-boot-fs/",
        "teaser": null
      },{
        "title": "Check for opened ports without telnet",
        "excerpt":"If there is no telnet tools is installed on the host, try the following command to check if a port opened or not. -bash-4.2$ timeout 1 bash -c '(echo &gt; /dev/tcp/ip_adderess/port) &gt;/dev/null 2&gt;&amp;1' &amp;&amp; echo Port is open || echo Port is closed Example -bash-4.2$ timeout 1 bash -c '(echo...","categories": [],
        "tags": ["linux"],
        "url": "/site/port-checking/",
        "teaser": null
      },{
        "title": "root password reseting in centos",
        "excerpt":"In the grub menu select actual kernel and type “-e” Go to the line with “linux 16” and change ro to rw init=/sysroot/bin/sh”. before: after: Press ctrl+X for starting a single mode session When single mode is started access to the system…: chroot /sysroot And using passwd command change the...","categories": [],
        "tags": ["linux"],
        "url": "/site/reseting-root-password/",
        "teaser": null
      },{
        "title": "Creating a simple NFS share on centos",
        "excerpt":"In this post is noted a way of creating a simple NFS share server on centos 8 machine. 1. Installing NFS On the server side we should install nfs-utils packet: [root@nfs-server ~]# yum install nfs-utils and start/enable nfs-server service [root@nfs-server ~]# systemctl start nfs-server [root@nfs-server ~]# ^start^enable systemctl enable nfs-server...","categories": [],
        "tags": ["linux"],
        "url": "/site/creating-simple-nfs-share/",
        "teaser": null
      },{
        "title": "Basic SQL Joins",
        "excerpt":"Left Join and right Let’s say we have two tables - posts and users. Struncture of the both tables is following: post table has such columns as: id, title, content, user_id and date. Column user_id is a foreign key and related with the id column of users table users table...","categories": [],
        "tags": ["database"],
        "url": "/site/basic-sql-joins/",
        "teaser": null
      },{
        "title": "Editing files in Linux VM using remote Visual Studio Code",
        "excerpt":"Sometimes we need to edit a file directly on Linux VM using Visual Studio Code. Launch Visual Studio Code. Additionally, you have to able to connect to the bash of remote machine from VS Code. Go to the ‘Extensions’ page and search for ‘Remote VSCode’ Install the extension and re-launch...","categories": [],
        "tags": ["ide"],
        "url": "/site/edit-files-with-rmate/",
        "teaser": null
      },{
        "title": "Check and approve pendings csrs in Openshift cluster",
        "excerpt":"After installing Openshift cluster you should log in and check for csr. Moreover, I regularly controls if some csr have to be approved or not. [admin@ocp4 try]$ oc get csr NAME AGE SIGNERNAME REQUESTOR CONDITION csr-6m4m7 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:etcd-2.okd4.home.lab Approved,Issued csr-7qww9 4m13s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-compute-1.okd4.home.lab Approved,Issued csr-glzgb 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-control-plane-1.okd4.home.lab Pending...","categories": [],
        "tags": ["openshift"],
        "url": "/site/check-approve-csr-openshift/",
        "teaser": null
      },{
        "title": "Create persistance storage for openshift",
        "excerpt":"Set ip NFS Server and export a created share. A simple process of creating NFS is described on this site. Please, use search function. Set up persistent volume Firstly, I created a setup_pv.yaml file with following content: vim setup_pv.yml apiVersion: v1 kind: PersistentVolume metadata: name: test-pv spec: capacity: storage: 10Gi...","categories": [],
        "tags": ["openshift"],
        "url": "/site/create-persistence-storage-for-openshift/",
        "teaser": null
      },{
        "title": "Basic user management in Openshift",
        "excerpt":"In this post I shortly describe how to create users for Openshift using HTPasswd provider. More about authentication providers are able to find in official documentation kubeadmin user During installation Openshift creates default kubeadmin with a automatically generated password. Password you can find in installation folder: &lt;installation_folder&gt;/auth/kubeadmin-password [admin@ocp4 try]$ cat...","categories": [],
        "tags": ["openshift"],
        "url": "/site/create-openshift-oauth-users/",
        "teaser": null
      },{
        "title": "Deploy MySQL and PostgreSQL database systems on Podman with regular (non-root) user",
        "excerpt":"MySQL Install mysql client: sudo yum install mysql Create a folder on the local host for storing databases and configure SELinux option: mkdir /opt/homelab_projects/mysql_db_dir_noroot [admin@workstation homelab_projects]$ sudo semanage fcontext -a -t container_file_t '/opt/homelab_projects/mysql_db_dir_noroot(/*)' [admin@workstation homelab_projects]$ restorecon -v 'mysql_db_dir_noroot' [admin@workstation homelab_projects]$ ll -Z total 56 ......... drwxrwxr-x. 2 admin admin unconfined_u:object_r:container_file_t:s0...","categories": [],
        "tags": ["podman","database"],
        "url": "/site/running-database-on-podman/",
        "teaser": null
      },{
        "title": "Deploy a python application using podman. Deploy rootless container and connect podmanized database container",
        "excerpt":"In order to connect a rootless application container to the rootles database container I used port mapping technique. The following steps were used for successfully applying application with connection to database. First of all I installed libvirt package in order to enable virtualization network interface: [admin@podman ~]$ sudo yum install...","categories": [],
        "tags": ["podman","python"],
        "url": "/site/deploy-application-on-podman/",
        "teaser": null
      },{
        "title": "A short help for regular expressions",
        "excerpt":"Mostly used regex paterns Other patterns Examples: Source Mostly used regex paterns Token Explanation [abcd] a single character of a/b/c or d [^abcd] any character except a/b/c or d [a-z] matches any characters between a to z [a-zA-Z] matches any characters between a to z and A to Z [^a-p]...","categories": [],
        "tags": ["regex"],
        "url": "/site/regex-help/",
        "teaser": null
      },{
        "title": "Creating a systemctl application startup job",
        "excerpt":"Here I have posted some information about how to create a simple service startup job for linux. Here below is shown a sample service file for systemctl [Unit] Description=Description for application After=network.target [Service] User=&lt;user&gt; Group=&lt;group&gt; WorkingDirectory=&lt;path where running file is located&gt; Environment=&lt;path with environment variable PATH \"PATH=/location\"&gt; EnvironmentFile=&lt;path to environment...","categories": [],
        "tags": ["linux"],
        "url": "/site/create-systemctl-service/",
        "teaser": null
      },{
        "title": "Fixing \"Cannot Install Windows 11\" error during installation",
        "excerpt":"Problem Today I tried to install Windows 11 on my virtual platform and during installation faced with the following problem: Solution In this screen type Shift + F10 at the same time to open a command promt. Then in command line type regedit: In the opened Registry Editor window, go...","categories": [],
        "tags": ["windows"],
        "url": "/site/windows11-requirements-error/",
        "teaser": null
      },{
        "title": "My experience of Openshift 4.9 installation on Proxmox with a restricted network",
        "excerpt":"In this post I tried to describe my experience that I had during Openshift 4.9 installation at my home lab. Redhat allows to use Openshift during 60 days for free without support. Preparing environment Set up DNS and DHCP Set up proxy Download RHCOS (https://console.redhat.com/openshift/install/metal/user-provisioned) Create bare metal environment. In...","categories": [],
        "tags": ["openshift"],
        "url": "/site/installing-openshift4.9/",
        "teaser": null
      },{
        "title": "Stop and start Openshift 4 cluster",
        "excerpt":"In this post I describe shortly how to shutdown and start up Openshift cluster. Preparation Check if all nodes are properly running: oc get nodes --show-labels Check if all pods in all projects are working properly. Save the current state: oc get pods --all-namespaces Additionally, you can create backup of...","categories": [],
        "tags": ["openshift"],
        "url": "/site/openshift49-gracefull-restart/",
        "teaser": null
      },{
        "title": "Private container registry on podman",
        "excerpt":"It is very easy to set up a simple container registry on podman. Here below I show how to set up a local simple container registry for personal use. Preparation If podman and htpasswd packages are not installed on the host, install them: [admin@podman auth]$ sudo dnf provides htpasswd [sudo]...","categories": [],
        "tags": ["podman","container"],
        "url": "/site/private-container-registry/",
        "teaser": null
      }]
