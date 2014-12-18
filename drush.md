---
layout: page
title: Drush
permalink: /drush/
---

* This will become a table of contents (this text will be ignored)
{:toc}

User Management
------------------

##Add new user to Drupal via command line
`drush user-create testuser --mail="test@example.com" --password="apassword"`

##Add user to a role
`drush user-add-role "blog editor" testuser`

##Block Drupal User
`drush user-block someuser`

##Remove role from a user
`drush user-remove-role "blog editor" testuser`

##Find user information
`drush user-information testuser`

##Reset users password
`drush user-password testuser --password="mypassword"`
