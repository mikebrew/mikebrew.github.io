---
layout: post
title:  "A better git log"
date:   2014-10-11 11:20:00
categories: git, log, color
---

A nice snip of code to add some color to your git log.

Source: [https://coderwall.com/p/euwpig](https://coderwall.com/p/euwpig)

Add the following to your terminal

{% highlight css %}
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
{% endhighlight %}

You now have a new alias:   
`git lg`
