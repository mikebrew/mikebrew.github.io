---
title: Git
---

## Branching

### Compare branch data

```js
git diff --color-words this_branch..that_branch
```

### Show changes to a file

```bash
git diff --color-words filename.ext
```

### Remove branch

```html
git branch -d <name-of-branch></name-of-branch>
```

### List branches

```bash
git branch
```

### Create a new branch

```bash
git branch [branch-name]
```

### Switch to another branch

```bash
git checkout [branch]
```

### Create a branch and immediately switch to it

```js
git checkout -b [branch]
```

### Merge branch

```bash
git merge [branch]
git merge [branch] --ff-only
```

## Remote

### Check Remote

```bash
git remote -v
```

### Add Remote

```bash
git remote add origin <path-to-repo>
```

### Remove Remote

```bash
git remote rm origin
```

### Rename Remote

```bash
git remote rename <previous> <newname>
```
