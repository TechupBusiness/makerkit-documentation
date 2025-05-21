---
status: "published"

title: "Using translations in your React Router Supabase project"
label: "Using translations"
description: "Makerkit uses i18next to translate your project into multiple languages. This guide will show you how to use translations in your React Router Supabase project."
order: 0
---


Makerkit uses `i18next` for translations, although we abstract if behind the package `@kit/i18n` - so that if we ever need to change the translation library, we can do so without affecting your code.

Makerkit's translations system works everywhere:

1. Server components
2. Client components
3. Server-side rendering

## How to use translations

### Bootstrapping i18n in Server Components

When you create a new page, make sure to wrap it around the `withI18n` function to bootstrap the translations before rendering the server component.

Because server components are rendered in parallel, there is no telling which one will be rendered first. This is why we need to bootstrap the translations before rendering the server component in each page/layout.

```tsx
import { withI18n } from '~/lib/i18n/with-i18n';

const Page = () => {
  return <div>My page</div>;
};

export default withI18n(Page);
```

### Using translations in Server Components

Once you have bootstrapped the translations, you can use the `Trans` component to translate strings in your server components.

```tsx
import { Trans } from '@kit/ui';

const Page = () => {
  return (
    <div>
      <Trans i18nKey="auth:signIn" />
    </div>
  );
};

export default withI18n(Page);
```

It is very important you load the `Trans` component from `@kit/ui` and not from `react-i18next` directly.

### Using the useTranslation hook

You can also use the `useTranslation` hook to translate strings in components that are not in the render path.

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return <div>{t('auth:signIn')}</div>;
};
```