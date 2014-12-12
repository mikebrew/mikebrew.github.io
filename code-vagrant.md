---
layout: page
title: Vagrant
permalink: /code/vagrant/
---

##Adding a new install to the Vagrant environment

   * append site to the `config.json` file
   * Modify hostfile and add `sitename.dev` with ip address 192.168.44.44
   * `vagrant ssh` into box
   * go to `sites` directory
   * create new site directory ‘i.e.. ambler’
   * `cd newdirectory`
   * `drush make [path-to-makefile]`
   * log out of ssh - `exit`
   * run `vagrant provision`
   * `vagrant ssh`
   * `cd sites`
   * `drush @sitename site-install`
   * Enjoy new site

##Making Drupal Rin Faster

Install the NFS server   
`apt-get install nfs-kernel-server`

Change the type of synced folders to `nfs` in your `config.json`.   
{% highlight css %}   
synced_folders": [   
 {
  "host_path: "data/",
  "guest_path": "/var/www",
  "type": "default"
 }
],
{% endhighlight %}

Replace `default` with `nfs`.

{% highlight css %}
  "type": "nfs"
{% endhighlight %}

Run vagrant reload inside your `vdd` directory.   
`vagrant reload`
