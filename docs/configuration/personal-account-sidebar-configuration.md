---
status: "published"
label: "Account Navigation Configuration"
title: "Setting the personal account navigation configuration | React Router Supabase SaaS Kit"
description: "Learn how to setup the personal account navigation of your React Router Supabase application"
order: 5
---

The personal account navigation is set at `apps/web/config/personal-account-navigation.config.tsx`. We use this configuration to define the navigation menu of the personal account. By default, it has three routes: home page, settings, and billing (if enabled).

We define it in one place so we can build different views at once (for example, the mobile menu).

**Please update this file to add more routes to the sidebar.**

 ```tsx {% title="apps/web/config/personal-account-navigation.config.tsx" %}
const routes = [
  {
    label: 'common:homeTabLabel',
    path: pathsConfig.app.home,
    Icon: <Home className={iconClasses} />,
    end: true,
  },
  {
    label: 'account:accountTabLabel',
    path: pathsConfig.app.personalAccountSettings,
    Icon: <User className={iconClasses} />,
  },
];

if (featureFlagsConfig.enablePersonalAccountBilling) {
  routes.push({
    label: 'common:billingTabLabel',
    path: pathsConfig.app.personalAccountBilling,
    Icon: <CreditCard className={iconClasses} />,
  });
}

export const personalAccountSidebarConfig = SidebarConfigSchema.parse({
  routes,
  style: import.meta.env.VITE_USER_NAVIGATION_STYLE,
});
```

You can choose the style of the navigation by setting the `VITE_USER_NAVIGATION_STYLE` environment variable. The default style is `sidebar`.

```bash
VITE_USER_NAVIGATION_STYLE=sidebar
```

Alternatively, you can set the style to `header`:

```bash
VITE_TEAM_NAVIGATION_STYLE=header
```

