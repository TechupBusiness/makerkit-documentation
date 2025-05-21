---
status: "published"
title: "Using KeyStatic with the React Router Supabase SaaS Starter Kit"
label: "Keystatic"
description: "KeyStatic is a CMS that stores data in a JSON file or on your Github repository. It's the default CMS implementation in Makerkit."
order: 1
---

This implementation is used when the host app's environment variable is set as:

```bash
CMS_CLIENT=keystatic
```

Additionally, the following environment variables may be required:

```bash
VITE_KEYSTATIC_STORAGE_KIND=local # local, cloud, github
VITE_KEYSTATIC_CONTENT_PATH=content # apps/web/content
KEYSTATIC_PATH_PREFIX=apps/web
```

You can also use Keystatic Cloud or GitHub as the storage kind as remote storage.

If `VITE_KEYSTATIC_STORAGE_KIND` is set to `cloud`, the following environment variables are required:

```bash
KEYSTATIC_STORAGE_KIND=cloud
KEYSTATIC_STORAGE_PROJECT=project-id
```

If `KEYSTATIC_STORAGE_KIND` is set to `github`, the following environment variables are required:

```bash
VITE_KEYSTATIC_STORAGE_KIND=github
VITE_KEYSTATIC_STORAGE_REPO=makerkit/react-router-supabase-saas-kit-turbo-demo
KEYSTATIC_GITHUB_TOKEN=github_*****************************************************
KEYSTATIC_PATH_PREFIX=apps/web
VITE_KEYSTATIC_CONTENT_PATH=./content
```

Of course, you need to replace the `VITE_KEYSTATIC_STORAGE_KIND` and `KEYSTATIC_GITHUB_TOKEN` with your own values.

GitHub mode requires the installation of a GitHub app for displaying the admin.

Please refer to the [Keystatic documentation](https://keystatic.com/docs/github-model) for more information.

If your content folder is not at `content`, you can set the `VITE_KEYSTATIC_CONTENT_PATH` environment variable to the correct path. For example, if your content folder is at `data/content`, you can set the `VITE_KEYSTATIC_CONTENT_PATH` environment variable as:

```bash
VITE_KEYSTATIC_CONTENT_PATH=data/content
```

**Note**: your Github token must have permissions to read to the repository (for read-only).
