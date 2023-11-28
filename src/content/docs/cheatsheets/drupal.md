---
title: Drupal
---

## Update Core

### Preliminary: Check if the project uses drupal/core-recommended

```bash
composer show drupal/core-recommended
```

### 1 Check for available Drupal update

```bash
composer outdated "drupal/\*"
```

### 2 Update Drupal core code

#### With a dry run

```bash
composer update drupal/core "drupal/core-*" --with-all-dependencies --dry-run
```

#### Update the core

```bash
composer update drupal/core “drupal/core-*” --with-all-dependencies
```

### 3 Run database update

```bash
drush updatedb && drush cr
```

## Update Modules

```bash
composer update drupal/modulename --with-dependencies
```

## Bash Tidbits

### Alias'

```bash
alias drupal-update-dryrun='composer update drupal/core "drupal/core-*" --with-all-dependencies --dry-run'
alias drupal-update-core='composer update drupal/core "drupal/core-*" --with-all-dependencies'
alias drupal-check-outdated='composer outdated "drupal/*"'
alias refresh='exec bash'
```

### Functions

```bash
installDryrun() {
    composer require drupal/"$1" --dry-run
}
installNow() {
    composer require drupal/"$1"
}
checkOutdated() {
    composer outdated "drupal/*"
}
updateDryrun() {
    composer update drupal/core "drupal/core-*" --with-all-dependencies --dry-run
}
updateCore() {
    composer update drupal/core "drupal/core-*" --with-all-dependencies
}
moduleUpdateNow() {
    composer update drupal/"$1" --with-dependencies
}
moduleUpdateDryrun() {
    composer update drupal/"$1" --with-dependencies --dry-run
}
```
