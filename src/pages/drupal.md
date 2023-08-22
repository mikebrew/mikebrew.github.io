---
title: Drupal
layout: ../layouts/main.astro
---

# Drupal

## Update Core

### Check if the project uses drupal/core-recommended

```bash
composer show drupal/core-recommended
```

### Check for available Drupal update

```bash
composer outdated "drupal/\*"
```

### Update Drupal core code

```bash
composer update drupal/core “drupal/core-*” --with-all-dependencies
```

### Run database update

```bash
drush updatedb
drush cache:rebuild
```

## Update Modules

```bash
composer update drupal/modulename --with-dependencies
```
