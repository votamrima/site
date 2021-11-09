---
layout: single
title: "Creating a simple NFS share on centos"
subtitle: ""
date: 2021-11-06 23:38:00 +0100
#background: '/img/posts/01.jpg'
tags: ['blabla', 'ahaha']
---

<p>In this post I am noting a way how to create a simple NFS share server on centos.</p>

### Installing NFS
On the server side we should install ``nfs-utils`` packet:
````
[root@dns ~]# yum install nfs-utils
````

and start/enable ``nfs-server`` service
````
[root@dns ~]# systemctl start nfs-server
[root@dns ~]# ^start^enable
systemctl enable nfs-server
Created symlink /etc/systemd/system/multi-user.target.wants/nfs-server.service → /usr/lib/systemd/system/nfs-server.service.
[root@dns ~]# 
````

### Defining a directory and exporting them
Following steps are preparing a specified folder to export as a network folder.
