---
status: "published"
title: "Adding new translations | React Router Supabase SaaS Kit"
label: "Adding new translations"
description: "Learn how to add new translations to your  React Router Supabase SaaS project."
order: 1
---

Translations are stored at application level and can be found at `apps/web/public/locales`. Translations for English (which is the only language provided by default) will be found at `apps/web/public/locales/en`.

If you wish to provide a new language, there are two steps.

### 1. Add the language files

Create a new folder using the correct language code at `apps/web/public/locales/[lng]` where `[lng]` can be any correct language code, such as `de`, `it`, `es`, `ja`, etc.

### 2. Update settings

Add the language to the settings file at `apps/web/lib/i18n/i18n.settings.ts`:

```tsx
/**
 * The list of supported languages.
 * By default,  only the default language is supported.
 * Add more languages here if needed.
 */
export const languages: string[] = [defaultLanguage, 'es'];
```

In the above, I appended the language `es` to the `languages` array. You can add as many languages as you need.


## 3. Add new namespaces

If you want to add a new namespace (for example, `chatbots.json`) where you will store translations for chatbots, you can do so by creating a new file in the `apps/web/public/locales/[lng]` directory. For example, `apps/web/public/locales/en/chatbots.json`.

Then, you register the new namespace in the `i18n.settings.ts` file:

```tsx {8} title="apps/web/lib/i18n/i18n.settings.ts"
export const defaultI18nNamespaces = [
  'common',
  'auth',
  'account',
  'teams',
  'billing',
  'marketing',
  'chatbots',
];
```

In the example above, the `chatbots` namespace is added to the `defaultI18nNamespaces` array. And that's it! You can now start adding translations to your new namespace.