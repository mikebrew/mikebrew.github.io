---
layout: page
title: Jekyll
permalink: /code/jekyll/
---


* This will become a table of contents (this text will be ignored)
{:toc}


Create new blog
-------------------
To install in a new directory  
`jekyll new myblog`  
or install in current directory  
`jekyll new .`

##Generate development server
`jekyll serve`

##Build environment
Current folder will be generated into ./sites  
`jekyll build`  

Generate and watch for changes
`jekyll build --watch`

Markdown cheat sheet 
---------------------
[Source](http://assemble.io/docs/Cheatsheet-Markdown.html)

###Code
Inline code   
<pre>
`
</pre> 

Indent code   

Block code "fences"  
<pre>
```
</pre> 

Syntax highlighting   
<pre>
{ % highlight css % }
	Some code here
{ % endhighlight % }
</pre>

###Headers
Header 2   
`##Header 2`

###Links

####Basic Link   
`[This is a link](http://linkpath.com)`

####Links with a title   
`[Upstage](https://github.com/upstage/ "Visit Upstage!")`

####Named anchors   
{% highlight css %}
# Table of Contents   
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
{% endhighlight %}

Will jump to sections:
{% highlight css %}
## Chapter 1 <a id="chapter-1"></a>
Content for chapter one.
{% endhighlight %}

###Automated Table of Content
{% highlight css %}
* This will become a table of contents (this text will be ignored)
{:toc}
{% endhighlight %}
  