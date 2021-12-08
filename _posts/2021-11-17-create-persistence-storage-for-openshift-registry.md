---
layout: single
title: "Create persistance storage for openshift registry"
subtitle: ""
date: 2021-11-17 16:30:00 +0100
background: '/image/01.jpg'
tags: ['openshift']
---

### Set ip NFS Server and export a created share.


A simple NFS is described [here]({% post_url ../site/_posts/2020-11-06-creating-simple-nfs-share %}).

### Configure registry
For creating an persistent volume I used to create setup_pv.yaml file with the following content:
````
vim setup_pv.yml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: test-pv
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    path: /opt/okdn_share/test
    server: 192.168.11.61
````

Then, using oc create command I applied setup_pv.yml:
````
oc create -f setup_pv.yml
````

A ``oc get pv`` command shows created persistence volumes. In my case I have only one.
````
[admin@dns try]$ oc get pv
NAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
test-pv   10Gi       RWX            Retain           Available                                   22h
[admin@dns try]$ 
````

Afterwards, I started to edit image-registry operator:
````
[admin@dns try]$ oc edit configs.imageregistry.operator.openshift.io 

........
spec:
  logLevel: Normal
  managementState: Removed
  observedConfig: null
  operatorLogLevel: Normal
  proxy: {}
  replicas: 1
  requests:
    read:
      maxWaitInQueue: 0s
    write:
      maxWaitInQueue: 0s
  rolloutStrategy: RollingUpdate
  storage: {}
  unsupportedConfigOverrides: null
........
````

Here I did two changes under the ``spec`` section. It was chaged ``managementState`` field from "Removed" to "Managed" and enabled ``storage``. The final version of **spec** section section is shown below:

````
spec:
  logLevel: Normal
  managementState: Managed
  observedConfig: null
  operatorLogLevel: Normal
  proxy: {}
  replicas: 1
  requests:
    read:
      maxWaitInQueue: 0s
    write:
      maxWaitInQueue: 0s
  rolloutStrategy: RollingUpdate
  storage: 
    pvc:
      claim:
  unsupportedConfigOverrides: null
````

