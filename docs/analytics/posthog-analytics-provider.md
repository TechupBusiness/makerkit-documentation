---
status: "published"
title: 'Using the PostHog Analytics Provider in React Router Supabase Turbo'
label: 'PostHog'
description: 'Learn how to use the PostHog Analytics provider in React Router Supabase Turbo'
order: 3
---

The [Posthog](https://posthog.com) provider in React Router Supabase Turbo is a simple way to integrate PostHog Analytics into your Next.js application using the Makerkit's Analytics package.

## Installation

First, you need to pull the `@kit/analytics` package into your project using the CLI

```bash
npx @makerkit/cli@latest plugins install
```

When prompted, select the `PostHog` package from the list of available packages. Once the command completes, you should see the `packages/plugins/posthog` directory in your project.

You can now import this package into your project:

```bash
pnpm add "@kit/posthog@workspace:*" --filter "@kit/analytics" -D
```

You can now use the PostHog plugin in the Analytics package. Update the `packages/analytics/src/index.ts` file as follows:

 ```tsx {% title="packages/analytics/src/index.ts" %}
import { createPostHogAnalyticsService } from '@kit/posthog';

import { createAnalyticsManager } from './analytics-manager';
import type { AnalyticsManager } from './types';

export const analytics: AnalyticsManager = createAnalyticsManager({
  providers: {
    posthog: createPostHogAnalyticsService,
  },
});
```

## Configuration

Please add the following environment variables to your `.env` file:

```bash
VITE_POSTHOG_KEY=your-project-key
VITE_POSTHOG_HOST=your-host
```

If you have set up a Proxy to avoid Ad Blockers, please add the following environment variable to your `.env` file:

```bash
VITE_POSTHOG_INGESTION_URL=your-ingestion-url
```

Please make sure to proxy the `/ingest` endpoint to the PostHog server. React Router doesn't have a built-in proxying mechanism, so you will need to add it.