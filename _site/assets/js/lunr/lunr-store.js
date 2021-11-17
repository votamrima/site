var store = [{
        "title": "Using logrotate",
        "excerpt":"create configuration file: bash-3.2# cat /etc/logrotate.d/myconf-logrotate.conf PATH_TO_FILE/LOG.FILE { daily missingok rotate 10 compress delaycompress compresscmd /usr/bin/gzip notifempty copytruncate } Testing ```` logrotate /etc/logrotate.conf –force -d 3. Add a crontab job. A job should be run every hour export EDITOR=vi crontab -e 0 * * * * /usr/sbin/logrotate /etc/logrotate.conf –force &gt;...","categories": [],
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
        "title": "Check and approve pendings csrs",
        "excerpt":"After installing Openshift cluster you should log in and check for csr. Moreover, I regularly controls if some csr should be approved or not. [admin@dns try]$ oc get csr NAME AGE SIGNERNAME REQUESTOR CONDITION csr-6m4m7 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:etcd-2.okd4.home.lab Approved,Issued csr-7qww9 4m13s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-compute-1.okd4.home.lab Approved,Issued csr-glzgb 4m29s kubernetes.io/kube-apiserver-client-kubelet system:node:okd4-control-plane-1.okd4.home.lab Pending csr-lsdcc...","categories": [],
        "tags": ["openshift"],
        "url": "/site/check-approve-csr-openshift/",
        "teaser": null
      }]
