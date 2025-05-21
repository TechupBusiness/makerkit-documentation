---
status: "published"
label: "Authentication Configuration"
title: "Setting your authentication configuration"
description: "Learn how to setup the authentication configuration of your React Router Supabase application"
order: 2
---

Makerkit supports three different authentication methods:

1. **Password** - the traditional email/password method, set to `true` by default
2. **Magic Link** - magic link, set to `false` by default
3. **oAuth** - oAuth providers, by default we set Google Auth

The authentication configuration is set at `apps/web/config/auth.config.ts`.

The recomendation is **to not update this directly** - instead, please define the environment variables below and override the default behavior. The configuration is validated using the Zod schema `AuthConfigSchema`, so if something is off, you'll see the errors.

```tsx
const authConfig = AuthConfigSchema.parse({
  // NB: This is a public key, so it's safe to expose.
  // Copy the value from the Supabase Dashboard.
  captchaTokenSiteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,

  // NB: Enable the providers below in the Supabase Console
  // in your production project
  providers: {
    password: import.meta.env.VITE_AUTH_PASSWORD === 'true',
    magicLink: import.meta.env.VITE_AUTH_MAGIC_LINK === 'true',
    oAuth: ['google'],
  },
} satisfies z.infer<typeof AuthConfigSchema>);
```

For example, if you wanted to switch from password auth to magic link, you'd set the below variables:

```bash
VITE_AUTH_PASSWORD=false
VITE_AUTH_MAGIC_LINK=true
```

## Password Requirements

To set the password requirements, you can set the following environment variables:

```bash
VITE_PASSWORD_REQUIRE_UPPERCASE=true
VITE_PASSWORD_REQUIRE_NUMBERS=true
VITE_PASSWORD_REQUIRE_SPECIAL_CHARS=true
```

The above will enforce the following rules:
1. At least one uppercase letter
2. At least one number
3. At least one special character

## MFA

To enforce MFA for RLS (Row Level Security) you need to customize the RLS policies as per [the Supabase documentation](https://supabase.com/blog/mfa-auth-via-rls).