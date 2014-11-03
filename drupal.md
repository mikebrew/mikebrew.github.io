---
layout: page
title: Drupal
permalink: /drupal/
---
#Table of Contents
*[Disabling or enabling modules manually in the database](#disable-modules)
*[Drupal 7: Clear Cached System List](#clear-cache-systemed-list)

##Disabling or enabling modules manually in the database <a id="disable-modules"></a>

See all the modules that have been installed enabled or not:
{% highlight sql %}
SELECT name,status FROM system WHERE type='module';
{% endhighlight %}

See all the modules enabled:
{% highlight sql %}
SELECT name,status FROM system WHERE type='module' AND status='1';
{% endhighlight %}

See if a particular module is enabled:
{% highlight sql %}
SELECT name,status FROM system WHERE name='module_name';
{% endhighlight %}

Disable your module, set the status to 0 for the module name that you want to disable.
{% highlight sql %}
UPDATE system SET status='0' WHERE name='module_name';
{% endhighlight %}

Enable your module:
{% highlight sql %}
UPDATE system SET status='1' WHERE name='module_name';
{% endhighlight %}

###Drupal 7: Clear Cached System List <a id="clear-cache-systemed-list"></a>
phpMyAdmin
`If you are using phpMyAdmin, find the "cache_bootstrap" table, and delete the record with cid="system_list".`

MySQL Command Line
To update the cache using the mysql command line, type:
{% highlight sql %}
DELETE FROM cache_bootstrap WHERE cid='system_list';
{% endhighlight %}