---
layout: page
title: Drupal
permalink: /drupal/
---

##Disabling or enabling modules manually in the database

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