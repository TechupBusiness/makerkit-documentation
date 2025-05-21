---
status: "published"
label: "Authentication API"
order: 2
title: "Authentication API | React Router Supabase SaaS Kit"
description: "A quick introduction to the Authentication API in Makerkit"
---

The Authentication API is a set of functions that help you authenticate users in your application. It is built on top of the Supabase authentication system and provides a simple way to authenticate users in your application.

```tsx
import { redirect } from 'react-router';
import { LoaderFunctionArgs } from 'react-router';
import { requireUser } from '@kit/supabase/require-user';
import { getSupabaseServerClient } from '@kit/supabase/server-client';

export async function loader(args: LoaderFunctionArgs) {
  const client = getSupabaseServerClient(args.request);
  const auth = await requireUser(client);

  // check if the user needs redirect
  if (auth.error) {
    return redirect(auth.redirectTo);
  }

  // user is authed!
  const user = auth.data;

  // return your data
  return {
    data: {} // your data here,
  };
}
```

If the user needs MFA and is not yet verified, the `redirect` function will redirect the user to the MFA verification page. This is why it is important to check the `redirectTo` property in the response.