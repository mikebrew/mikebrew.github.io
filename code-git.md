---
layout: page
title: GIT
permalink: /code/git/
---

* This will become a table of contents
{:toc}

##Overview

###Configure

- Set up your user name and email address so that your commits are recorded properly.

####Set global name of user
`git config --global user.name "My Name"`  
`git config --global user.email "user@email.com"`

##Initialize, stage and commit

- Initialize a new git repository
- stage all the files in the directory 
- and finally commit the initial snapshot

###Initialize a new repository
`git init`  
`git add .`  
`git commit -m 'initial commit'`

###Setup & Init

####Git configuration, and repository initialization & cloning.
`git config [key] [value]`   
`git config --global [key] [value]`  
`git init`  
`git clone [url]`  
`git help [command]`  

###Stage & Snapshot

####Working with snapshots and the Git staging area.

`git status`   
`git add [file]`   
`git reset [file]`   
`git diff`   
`git diff --staged`   
`git commit`   
`git rm [file]`   

###Branch & Merge   

####Working with Git branches and line stash.
List branches   
`git branch`

Create a new branch   
`git branch [branch-name]`   

Switch to another branch   
`git checkout [branch]`   

Create a branch and immediately switch to it   
`git checkout -b [branch]`   

####Merge a branch   
merge another branch into your current active one and record the merge as a commit   
`git merge [branch]`   

Show commit logs   
`git log`   

####Stash away changes
stash away the current uncommitted modifications in your working directory temporarily   
`git stash`   

Re-apply stash   
`git stash apply`   

###Share & Update
Fetching, merging and working with updates from another repository.

####Add a git URL as an alias
`git remote add [alias] [url]`

###Fetch branches

####fetch down all the branches from the Git remote
`git fetch [alias]`

####Merge branch to current
`//merge a branch on the server into your currently active branch to bring it up to date`  
`git merge [alias]/[branch]`

####Push update
`//push the work on your branch to update that branch on the remote git repository`  
`git push [alias] [branch]`

###Pull changes
fetch from the URL tracked by the current branch and immediately try to merge in the tracked branch
`git pull`

###Inspect & Compare

Examining logs, diffs and object information

####Show log

show the commit history for the currently active branch   
`git log`

###Compare commits

Show the commits on branchA that are not on branchB   
`git log branchB..branchA`

####Show changes to file

show the commits that change file, even across renames   
`git log --follow [file]`

####Compare difference in commits

show the diff of what is on branchA that is not on branchB   
`git diff branchB...branchA`

####Show human-readable

show any object in Git in human-readable format   
`git show [SHA]`