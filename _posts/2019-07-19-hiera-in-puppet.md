---
layout: single
title: "Using hiera in puppet. Example: creating a folder"
subtitle: ""
date: 2019-07-19 16:20:00 +0100
#background: '/img/posts/01.jpg'
tags: ['hiera', 'puppet']
---
 
In this post I am trying to show how to configure hiera files on puppet master. For demonstration purpose I use a simple task that will create a folder. The main idea of this post is to get basic understand of hiera concept.

1. Look up where is stored the main hiera file:
````
puppet config print hiera_config 

````

2. Edit it a found file vim $(puppet config print hiera_config):
````
---
# Hiera 5 Global configuration file
:backends:
  - yaml

:hierarchy:
  - common

:yaml:
  :datadir: "/etc/puppetlabs/code/environments/%{environment}/hieradata"
````

3. Hiera values for our test will be stored inside ``/etc/puppetlabs/code/environments/production/hieradata/common.yaml`` with the following content: 
````
---
fldr_name: '/opt/from_hiera'

````

3. A manifest that creates a folder using variable that stored in common.yaml. By default I am using sample ``init.pp`` file in ``/etc/puppetlabs/code/environments/production/manifests/init.pp``

````
---
class start_me (
  $fldr_name,
) {
  file {'Create test folder':
    ensure => 'directory',
    path  => "${fldr_name}",
    force => true,
  }
}

class { 'start_me':
  fldr_name => hiera('fldr_name')
}

````

4. And that is all

