---
status: "published"
title: "Clone the React Router Supabase SaaS Kit Turbo Repository"
label: "Clone the Repository"
order: 3
description: "Clone the React Router Supabase SaaS Kit Turbo repository to your local machine."
---

## 0. Prerequisites

- Node.js 18.x or later
- Docker
- Pnpm
- Supabase account (optional for local development)
- Payment Gateway account (Stripe/Lemon Squeezy)
- Email Service account (optional for local development)

## Verify your Git username

To verify you have access, you need to check that your local Git username is the same as set up in the Makerkit's Github organization.

Please run the following command to check your Git username:

```bash
git config user.username
```

If the output is not your Github username, or does not match the username registered in Makerkit's Github organization, you can set it using the following command:

```bash
git config --global user.username "Your Github Username"
```

Ex. if your Github username is `johndoe`, you can set it using the following command:

```bash
git config --global user.username "johndoe"
```

This is important to ensure you can run the repository.

## Cloning the Repository

Clone this repository with the command:

```bash
git clone git@github.com:makerkit/react-router-supabase-saas-kit-turbo
```

NB: If your SSH key isn't set - then use the HTTPS.

```bash
git clone https://github.com/makerkit/react-router-supabase-saas-kit-turbo
```

NB: please switch to HTTPS for ALL commands if you are not using SSH, not just the clone command.

**Windows Users**: place the repository near the root of your drive

Some Windows users hit errors loading certain modules due to very long paths. To avoid this, try placing the repository near the root of your drive.

Avoid using OneDrive, as it can cause issues with Node.js.

Now, remove the original `origin`:

```bash
git remote rm origin
```

Add upstream pointing to this repository so you can pull updates

```bash
git remote add upstream git@github.com:makerkit/react-router-supabase-saas-kit-turbo
```

Once you have your own repository, do the same but use `origin` instead of `upstream`

To pull updates (please do this daily with your morning coffee):

```bash
git pull upstream main
```

This will keep your repository up to date.

### 0.1. Install Pnpm

```bash
# Install pnpm
npm i -g pnpm
```

## 1. Setup dependencies

```bash
# Install dependencies
pnpm i
```

## 2. Post-merge Hooks

It's very useful to run the following command after pulling updates from the upstream repository:

```bash
pnpm i
```

This ensures that any new dependencies are installed and the project is up to date. We can run this command automatically after pulling updates by setting up a post-merge hook.

Create a new file named `post-merge` in the `.git/hooks` directory:

```bash
touch .git/hooks/post-merge
```

Add the following content to the `post-merge` file:

```bash
#!/bin/bash

pnpm i
```

Make the `post-merge` file executable:

```bash
chmod +x .git/hooks/post-merge
```

Now, every time you pull updates from the upstream repository, the `pnpm i` command will run automatically to ensure your project is up to date. This ensures you're always working with the latest changes and dependencies and avoid errors that may arise from outdated dependencies.
