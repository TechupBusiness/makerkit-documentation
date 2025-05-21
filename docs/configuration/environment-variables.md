---
status: "published"

title: Environment Variables in the React Router Supabase Starter Kit
label: Environment Variables
order: 0
description: Learn how to configure environment variables in the React Router Supabase Starter Kit.
---


Environment variables are defined in the `.env` file in the root of the `apps/web` package.

These environment variables are only used during development and are not used in production. In production, the environment variables are set in the CI/CD system.

The `.env` file is not committed to git - so you **could** place sensitive information in there for local development. Just be careful not to commit it to git.

## Public vs Private Environment Variables

I use the following convention:

1. **Public Environment Variables** are prefixed with `VITE_` and are available to the client-side code. They are added to the `window` object when added to `apps/web/lib/public-env.ts`. This is copied from Next.js - with the difference we add them to the client side manually. I like the convention.
2. **Private Environment Variables** are not prefixed and are only available to the server-side code. Please make this the default. If you need to add a public environment variable, please add it to the `apps/web/lib/public-env.ts` file.

## Adding public environment variables to the client-side

To add public environment variables to the client-side, you need to add them to the `apps/web/lib/public-env.ts` file.

```typescript
/**
 * @name PUBLIC_ENV
 * @description This is the public environment variables that are available to the client.
 * We use this to expose public environment variables to the client.
 */
export const PUBLIC_ENV = {
  // ... default public vars,

  // Add your public environment variables here ...
};
```

Please DO NOT add sensitive information to this file.

## Sample Environment Variables

Below is a sample `.env` file with the environment variables you need to set for the React Router Supabase Starter Kit.

```bash
# SITE
VITE_SITE_URL=http://localhost:5173
VITE_PRODUCT_NAME=Makerkit
VITE_SITE_TITLE="Makerkit - The easiest way to build and manage your SaaS"
VITE_SITE_DESCRIPTION="Makerkit is the easiest way to build and manage your SaaS. It provides you with the tools you need to build your SaaS, without the hassle of building it from scratch."
VITE_DEFAULT_THEME_MODE=light
VITE_THEME_COLOR="#ffffff"
VITE_THEME_COLOR_DARK="#0a0a0a"

# AUTH
VITE_AUTH_PASSWORD=true
VITE_AUTH_MAGIC_LINK=false
VITE_CAPTCHA_SITE_KEY=

# BILLING
VITE_BILLING_PROVIDER=stripe

# CMS
CMS_CLIENT=keystatic

# KEYSTATIC
VITE_KEYSTATIC_CONTENT_PATH=./content

# LOCALES PATH
VITE_LOCALES_PATH=apps/web/public/locales

# PATHS (to be used in "packages")
SIGN_IN_PATH=/auth/sign-in
SIGN_UP_PATH=/auth/sign-up
TEAM_ACCOUNTS_HOME_PATH=/home
INVITATION_PAGE_PATH=/join

# FEATURE FLAGS
VITE_ENABLE_THEME_TOGGLE=true
VITE_ENABLE_PERSONAL_ACCOUNT_DELETION=true
VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=true
VITE_ENABLE_TEAM_ACCOUNTS_DELETION=true
VITE_ENABLE_TEAM_ACCOUNTS_BILLING=true
VITE_ENABLE_TEAM_ACCOUNTS=true
VITE_ENABLE_TEAM_ACCOUNTS_CREATION=true
```

#### Supabase

For Supabase, you'll need to add the following environment variables:

```bash
SUPABASE_SERVICE_ROLE_KEY=
```

#### Stripe

Please check the [Stripe documentation](billing/stripe).

#### Lemon Squeezy

Please check the [Lemon Squeezy documentation](lemon-squeezy).

#### Mailers

Please check the [Mailers documentation](email-configuration).

#### Monitoring

Please check the [Monitoring documentation](monitoring/overview).

#### CMS

Please check the [CMS documentation](content/cms).

### Feature Flags

To enable or disable certain application features, please toggle the values below:

```bash
VITE_ENABLE_THEME_TOGGLE=true
VITE_ENABLE_PERSONAL_ACCOUNT_DELETION=true
VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=true
VITE_ENABLE_TEAM_ACCOUNTS_DELETION=true
VITE_ENABLE_TEAM_ACCOUNTS_BILLING=true
VITE_ENABLE_TEAM_ACCOUNTS=true
VITE_ENABLE_TEAM_ACCOUNTS_CREATION=true
```

The following feature flags are available:

1. **VITE_ENABLE_THEME_TOGGLE** - you can hide the theme toggle (if you want to force a single theme)
2. **VITE_ENABLE_PERSONAL_ACCOUNT_DELETION** - to prevent users from self-deleting their personal account
3. **VITE_ENABLE_PERSONAL_ACCOUNT_BILLING** - to enable/disable billing for personal accounts
4. **VITE_ENABLE_TEAM_ACCOUNTS_DELETION** - to prevent team accounts from self-deleting the account
5. **VITE_ENABLE_TEAM_ACCOUNTS_BILLING** - to enable/disable billing for team accounts
6. **VITE_ENABLE_TEAM_ACCOUNTS** - to disable team accounts
7. **VITE_ENABLE_TEAM_ACCOUNTS_CREATION** - to enable/disable the ability to create a team account

#### Personal Accounts vs Team Accounts

The starter kit supports two types of accounts:

1. Personal accounts are accounts that are owned by a single user.
2. Team accounts are accounts that group multiple users together.

This allows you to:

1. Serve B2C customers (personal accounts)
2. Serve B2B customers (team accounts)
3. Allow both (for example, like GitHub)

In the vast majority of cases, **you will want to enable billing for personal OR team accounts**. I have not seen many cases where billing both was required.

To do so, please set the following variables accordingly.

For enabling personal accounts billing only:

```bash
VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=true
VITE_ENABLE_TEAM_ACCOUNTS_BILLING=false
```

You may also want to fully disable team accounts:

```bash
VITE_ENABLE_TEAM_ACCOUNTS=false
```

To enable team accounts billing only:

```bash
VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=false
VITE_ENABLE_TEAM_ACCOUNTS_BILLING=true
```

To enable both, leave them both as `true`.

Please remember that for ensuring DB consistency, you need to also set them at DB level by adjusting the table `config`:

```sql
create table if not exists public.config(
    enable_team_accounts boolean default true not null,
    enable_account_billing boolean default true not null,
    enable_team_account_billing boolean default true not null,
    billing_provider public.billing_provider default 'stripe' not null
);
```

To enable personal account billing:

```sql
update config set enable_account_billing = true;
```

To enable team account billing:

```sql
update config set enable_team_account_billing = true;
```

To disable team accounts:

```sql
update config set enable_team_accounts = false;
```

To leave them both enabled, just leave them as they are.

## Contact Form submissions

To receive submissions from the contact form, you need to set up the following environment variables:

```bash
CONTACT_EMAIL=
```

This email will receive the submissions from the contact form.
