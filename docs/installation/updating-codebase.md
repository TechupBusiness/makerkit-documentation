---
status: "published"

title: "Updating your React Router Supabase Turbo Starter Kit"
label: "Updating the Codebase"
order: 6
description: "Learn how to update your React Router Supabase Turbo Starter Kit to the latest version."
---


To update the codebase, you will pull the latest changes from the GitHub repository and merge them into your project. This will ensure that you have the latest features and bug fixes.

If you have followed the instructions in the previous sections, you should have a Git repository set up for your project, with an `upstream` remote pointing to the original repository.

To update your project, you will first fetch the latest changes from the `upstream` remote, and then merge them into your project.

Here are the steps to update your project.

### Update the `upstream` remote

First, you need to fetch the latest changes from the `upstream` remote. To do this, run the following command:

```bash
git pull upstream main
```

Please run `pnpm i` in case there are any changes in the dependencies.

### Resolve any conflicts

If there are any conflicts during the merge, you will need to resolve them manually. Git will show you the files with conflicts, and you can edit them to resolve the conflicts.

#### Conflicts in the lock file "pnpm-lock.yaml"

If you have conflicts in the `pnpm-lock.yaml` file, accept any of the two changes (don't do it manually), then run:

```
pnpm i
```

The lock file will now reflect both your changes and the changes from the `upstream` repository.

#### Conflicts in the DB types "database.types.ts"

Since your types will differ from the ones in the `upstream` repository, you need to rebuild them.

To do so, reset the DB:

```bash
npm run supabase:web:reset
```

Then, run the following command to regenerate the types:

```bash
npm run supabase:web:typegen
```

Now the types will reflect the changes from the `upstream` repository and your project.

