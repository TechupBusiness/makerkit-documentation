---
status: "published"
label: "Feature Flags"
title: "Setting your feature flags configuration | React Router Supabase SaaS Kit"
description: "Learn how to setup the feature flags configuration of your React Router Supabase application"
order: 4
---

The features flags configuration is set at `apps/web/config/feature-flags.config.ts`. We use this configuration to store feature flags, i.e. to enable or disable certain features in the app.

This configuration is set at application level. The configuration gets propagated to the packages that the app imports, so you can control the behavior and logic of the package. This also allows you to host multiple apps in the same monorepo, as every application defines its own configuration.

The recommendation is **to not update this directly** - instead, please define the environment variables below and override the default behavior. The configuration is validated using the Zod schema `FeatureFlagsSchema`, so if something is off, you'll see the errors.

```tsx
const featuresFlagConfig = FeatureFlagsSchema.parse({
  enableThemeToggle: getBoolean(
    import.meta.env.VITE_ENABLE_THEME_TOGGLE,
    true,
  ),
  enableAccountDeletion: getBoolean(
    import.meta.env.VITE_ENABLE_PERSONAL_ACCOUNT_DELETION,
    false,
  ),
  enableTeamDeletion: getBoolean(
    import.meta.env.VITE_ENABLE_TEAM_ACCOUNTS_DELETION,
    false,
  ),
  enableTeamAccounts: getBoolean(
    import.meta.env.VITE_ENABLE_TEAM_ACCOUNTS,
    true,
  ),
  enableTeamCreation: getBoolean(
    import.meta.env.VITE_ENABLE_TEAM_ACCOUNTS_CREATION,
    true,
  ),
  enablePersonalAccountBilling: getBoolean(
    import.meta.env.VITE_ENABLE_PERSONAL_ACCOUNT_BILLING,
    false,
  ),
  enableTeamAccountBilling: getBoolean(
    import.meta.env.VITE_ENABLE_TEAM_ACCOUNTS_BILLING,
    false,
  ),
  languagePriority: import.meta.env.VITE_LANGUAGE_PRIORITY as
    | 'user'
    | 'application',
} satisfies z.infer<typeof FeatureFlagsSchema>);

export default featuresFlagConfig;
```

You can update the following environment variables to override the default behavior:

```bash
VITE_ENABLE_THEME_TOGGLE=
VITE_ENABLE_PERSONAL_ACCOUNT_DELETION=
VITE_ENABLE_TEAM_ACCOUNTS=
VITE_ENABLE_TEAM_ACCOUNTS_DELETION=
VITE_ENABLE_TEAM_ACCOUNTS_CREATION=
VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=
VITE_ENABLE_TEAM_ACCOUNTS_BILLING=
VITE_LANGUAGE_PRIORITY=
```

### Explanation

1. **VITE_ENABLE_THEME_TOGGLE**: use this feature if you want to set a specific theme mode (dark or light) and disallow switching to another mode
2. **VITE_ENABLE_PERSONAL_ACCOUNT_DELETION**: use this feature flag if you don't want users to self-delete their accounts
3. **VITE_ENABLE_TEAM_ACCOUNTS**: use this feature flag to enable or disable team accounts. For B2C apps, disabling may be your preference.
4. **VITE_ENABLE_TEAM_ACCOUNTS_DELETION**: use this feature flag if you don't want users to self-delete their team accounts
5. **VITE_ENABLE_TEAM_ACCOUNTS_CREATION**: use this feature flag to prevent users from creating a team account. This can be useful if you wish to manage the onboarding yourself.
6. **VITE_ENABLE_PERSONAL_ACCOUNT_BILLING**: use this feature to enable or disable the ability of personal accounts to subscribe to a plan.
7. **VITE_ENABLE_TEAM_ACCOUNTS_BILLING**: use this feature to enable or disable the ability of team accounts to subscribe to a plan.
8. **VITE_LANGUAGE_PRIORITY**: use this feature to set the language priority. If set to `user`, the user's preferred language will be used. If set to `application`, the application's default language will be used.

### Note

It is unlikely that both `VITE_ENABLE_PERSONAL_ACCOUNT_BILLING` and `VITE_ENABLE_TEAM_ACCOUNTS_BILLING` would both be enabled at once. In most cases, you want to enable it for users or team accounts.