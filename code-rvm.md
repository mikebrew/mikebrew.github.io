---
layout: page
title: RVM
permalink: /code/rvm/
---

* This will become a table of contents (this text will be ignored)
{:toc}

##Add default RVM state to project
{% highlight ruby %}
touch .ruby-version  
echo "1.9.3@gemset-name" > .ruby-version
{% endhighlight %}

##Copying Gemsets
{% highlight ruby %}
rvm gemset copy 1.8.7@rails3 1.9.2-head@rails3
{% endhighlight %}

##Reset to pre-RVM state
{% highlight ruby %}
rvm reset
{% endhighlight %}

##Use system ruby (as if no rvm)
{% highlight ruby %}
rvm system
{% endhighlight %}

##Empty gemset
{% highlight ruby %}
rvm gemset empty my gems
{% endhighlight %}

##List Known Rubies
{% highlight ruby %}
rvm list known
{% endhighlight %}

##Install Ruby Version
{% highlight ruby %}
rvm install 1.9.3
{% endhighlight %}

##Use Ruby Version
{% highlight ruby %}
rvm use 1.9.3
{% endhighlight %}

##Use and set as default
{% highlight ruby %}
rvm use 1.9.2 --default
{% endhighlight %}