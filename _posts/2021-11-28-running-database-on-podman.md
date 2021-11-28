---
layout: single
title: "Deploy a MySQL database on Podman with regular user" 
subtitle: ""
date: 2021-11-28 16:30:00 +0100
background: '/image/01.jpg'
tags: ['podman', 'mysql']
---

Install mysql client:

````
sudo yum install mysql
````

Create a folder on the local host for storing databases and configure SELinux option:

````
mkdir /opt/homelab_projects/mysql_db_dir_noroot

[admin@workstation homelab_projects]$ sudo semanage fcontext -a -t container_file_t '/opt/homelab_projects/mysql_db_dir_noroot(/*)'
[admin@workstation homelab_projects]$ restorecon -v 'mysql_db_dir_noroot'
[admin@workstation homelab_projects]$ ll -Z 
total 56
.........
drwxrwxr-x.  2 admin admin unconfined_u:object_r:container_file_t:s0  4096 Nov 28 17:30 mysql_db_dir_noroot
...........
[admin@workstation homelab_projects]$ 

````

Run mysql container. Here I set additionally environment variables, port mapping and folders for sharing database :

````
[admin@workstation homelab_projects]$ podman run -d --name mysql-db -e MYSQL_USER=admin -e MYSQL_PASSWORD=mysql -e MYSQL_DATABASE=words -e MYSQL_ROOT_PASSWORD=mysql -p 33306:3306 -v /opt/homelab_projects/mysql_db_dir_noroot:/var/lib/mysql/data rhscl/mysql-57-rhel7
0fb7b0ad8de7f00acccf7ddd3ccd296836da24ef575727e99bc63a2c0cdbe11e
[admin@workstation homelab_projects]$ 
[admin@workstation homelab_projects]$ 
[admin@workstation homelab_projects]$ podman ps -a
CONTAINER ID  IMAGE                                                                                                      COMMAND         CREATED        STATUS            PORTS                    NAMES
0fb7b0ad8de7  registry.access.redhat.com/rhscl/mysql-57-rhel7:latest                                                     run-mysqld      5 seconds ago  Up 4 seconds ago  0.0.0.0:33306->3306/tcp  mysql-db
.........
[admin@workstation homelab_projects]$ 

````

Let's check if the database has been created:

````
[admin@workstation homelab_projects]$ mysql -h 127.0.0.1 -uadmin -pmysql -P 33306
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.24 MySQL Community Server (GPL)

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MySQL [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| words              |
+--------------------+
2 rows in set (0.001 sec)

MySQL [(none)]> 
````

Deploy dump of the db:

````
[admin@workstation homelab_projects]$ mysql -h 127.0.0.1 -uadmin -pmysql -P 33306 words < db.sql 
````

