---
layout: single
title: "Creating a systemctl application startup job"
subtitle: ""
date: 2021-12-15 07:15:00 +0100
background: '/image/01.jpg'
tags: ['linux']
---


Here below is shown a sample service file for systemctl

````bash
[Unit]
Description=Description for application
After=network.target

[Service]
User=<user>
Group=<group>
WorkingDirectory=<path where running file is located>
Environment=<path with environment variable PATH "PATH=/location">
EnvironmentFile=<path to environment file>
ExecStart=<a command with necessary parameters to start application>

[Install]
WantedBy=multi-user.target
````

A service file should be located under ``/etc/systemd/system`` folder. A service file can be named anyhow, but extension of the file should be ended with ``.service``. For instance: ``/etc/systemd/system/testapp.service``.

When file is being created reload daemon:

````bash
sudo systemctl daemon-reload
````

And start application:

````bash
sudo systemctl start testapp.service
````

If application has to be started automatically, do not do not forget to enable it:

````bash
sudo systemctl enable testapp.service
````
