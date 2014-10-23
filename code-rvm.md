---
layout: page
title: RVM
permalink: /code/rvm/
---

##Add default RVM state to project
`touch .ruby-version`  
`echo "1.9.3@gemset-name" > .ruby-version`

##Copying Gemsets
`rvm gemset copy 1.8.7@rails3 1.9.2-head@rails3`

##Reset to pre-RVM state
`rvm reset`

##Use system ruby (as if no rvm)
`rvm system`

##Empty gemset
`rvm gemset empty my gems`

##List Known Rubies
`rvm list known`

##Install Ruby Version
`rvm install 1.9.3`

##Use Ruby Version
`rvm use 1.9.3`

##Use and set as default
`rvm use 1.9.2 --default`