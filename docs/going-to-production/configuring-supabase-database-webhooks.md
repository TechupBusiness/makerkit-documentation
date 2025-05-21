---
status: "published"

title: "Setting the Database Webhooks required to run the React Router Supabase SaaS kit"
label: "Database Webhooks"
description: "Database Webhooks from Supabase allow our app to intercept events and handle them. Learn how to setup database webhooks."
order: 2
---


Makerkit uses Database Webhooks in response to changes in the database. This allows the app to intercept events and handle them for various purposes, such as sending emails after an invitation, or canceling a subscription after a user deletes their account. As such, it is mandatory to set up the Database Webhooks in your Supabase instance for the app to work correctly.

First, you need to set a secret `SUPABASE_DB_WEBHOOK_SECRET` that your server and your Supabase instance will share to authenticate the requests.

```bash
SUPABASE_DB_WEBHOOK_SECRET=**************************************************
```

Make it a strong secret key - and make sure to keep it secret!

Now, you need to deploy the Supabase DB webhooks to your Supabase instance.

Please copy the webhooks (written with Postgres SQL) from apps/web/supabase/seed.sql and make sure to replicate them to the Supabase instance.

Make sure to add the following header `X-Supabase-Event-Signature` with the value of the `SUPABASE_DB_WEBHOOK_SECRET` to the request.

In this way - your server will be able to authenticate the request and be sure it's coming from your Supabase instance.

As the endpoint, remember to use the `/api/db/webhook` endpoint. If your APP URL is `https://myapp.vercel.app`, the endpoint will be `https://myapp.vercel.app/api/db/webhook`. Please be sure to use your real APP URL.

#### Adding Database Webhooks from Supabase Studio

The below is only needed when going to production. The local development seed.sql script will add the webhooks for you.

While you can create a migration to add the database webhooks, you can also add them from the Supabase Studio.

1. Go to the Supabase Studio
2. Go to Database->Webhooks
3. Click on "Enable Webhooks"
4. Click on "Create a new hook"

Now, replicate the webhooks at `apps/web/supabase/seed.sql` using the UI:

1. Please remember to set the `X-Supabase-Event-Signature` header with the value of the `SUPABASE_DB_WEBHOOK_SECRET` to the request.
2. Please remember to set the endpoint to `/api/db/webhook` using your real APP URL. If your APP URL is `https://myapp.vercel.app`, the endpoint will be `https://myapp.vercel.app/api/db/webhook`.
3. Use 5000 as the timeout.

Alternatively, you can also set these using a migration - but it's not recommended since you'd need to store the secret in the migration file.

##### Webhooks to add

We need to add the following webhooks:

1. `delete` on `public.accounts`
2. `delete` on `public.subscriptions`
3. `insert` on `public.invitations`

Please make sure to add these webhooks to your Supabase instance.
