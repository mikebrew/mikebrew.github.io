---
layout: page
title: Drush
permalink: /drush/
---

* This will become a table of contents (this text will be ignored)
{:toc}

User Management
------------------

Full list of all users   
`drush user-list`

Users by the name of admin or tester   
`drush user-list --names=admin,tester`

Users with the role editor or publisher   
`drush user-list --roles=editor,publisher`

Blocked users with the role blogger   
`drush user-list --status=blocked --roles=blogger`

Users with the specified emails   
`drush user-list --emails=nospam@please.com,me@myself.com`

Add new user to Drupal via command line   
`drush user-create testuser --mail="test@example.com" --password="apassword"`

Add user to a role   
`drush user-add-role "blog editor" testuser`

Block Drupal User   
`drush user-block someuser`

Remove role from a user   
`drush user-remove-role "blog editor" testuser`

Find user information   
`drush user-information testuser`

Reset users password   
`drush user-password testuser --password="mypassword"`

Generate one-time login   
`drush uli`   

Database
------------------

Export the database   
`drush sql-dump > mydatabase.sql`

Import a database   
`drush sql-cli < mydatabase.sql`

Theme
------------------
Change default theme   
`drush vset theme_default theme_name`   

Change admin theme   
`drush vset admin_theme theme_name`   
