---
layout: page
title: Drush
permalink: /drush/
---

##Add new user to Drupal via command line
`drush user-create testuser --mail="test@example.com" --password="apassword"`

##Add user to a role
`drush user-add-role "blog editor" testuser`

##Find user information
`drush user-information testuser`