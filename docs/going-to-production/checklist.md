---
status: "published"
title: "Checklist for deploying your React Router Supabase SaaS to Production"
label: "Checklist"
description: "Let's deploy your React Router Supabase SaaS app to production!"
order: 0
---

When you are ready to go to production, please follow the checklist below. This is an overview, a more detailed guide will be provided in the future.

{% alert type="warning" title="Please complete the following steps" %}
Not completing these steps will result in your project not working correctly. Please make sure to complete these steps before testing your project.
{% /alert %}

This could take a couple of hours and some trial and error, so buckle up - you're almost there!

1. **Create a Supabase project**. [Link the project locally](https://supabase.com/docs/guides/cli/local-development#link-your-project) using the Supabase CLI (`supabase link`).
2. **Migrations**: [Push the migrations](https://supabase.com/docs/guides/cli/local-development#link-your-project) to the remote Supabase instance (`supabase db push`).
3. **Auth**: [Set your APP URL in the Supabase project settings](https://supabase.com/docs/guides/auth/redirect-urls). This is required for the OAuth flow. Make sure to add the path `/auth/callback` to the allowed URLs. If you don't have it yet, wait.
4. **Auth Providers**: [Set the OAuth providers in the Supabase](https://supabase.com/docs/guides/auth/social-login) project settings. If you use Google Auth, make sure to set it up. This requires creating a Google Cloud project and setting up the OAuth credentials.
5. **Auth Emails**: It is very much recommended to update the auth emails using the [following documentation](authentication-emails). The kit already implements the `confirm` route, but you need to update the emails in your Supabase settings.
6. **Deploy React Router**: Deploy the React Router app to Vercel or any another hosting provider. Copy the URL and set it in the Supabase project settings.
7. **Environment Variables**: The initial deploy **will likely fail** because you may not yet have a URL to set in your environment variables. This is normal. Once you have the URL, set the URL in the environment variables and redeploy.
8. **Webhooks**: [Set the DB Webhooks in Supabase](configuring-supabase-database-webhooks) pointing against your React Router app at `/api/db/webhooks`.
9. **Emails**: Get some SMTP details from an email service provider like SendGrid or Mailgun or Resend and configure the emails in both the Environment Variables and the [Supabase project settings](https://supabase.com/docs/guides/auth/auth-smtp).
10. **Billing**: Create a Stripe/Lemon Squeezy account, make sure to update the environment variables with the correct values. Point webhooks from these to `/api/billing/webhook`. Please use the relative documentation for more details.

Other minor things to consider:

1. Update the legal pages with your company's information (privacy policy, terms of service, etc.).
2. Remove the placeholder blog and documentation content / or replace it with your own
3. Update the favicon and logo with your own branding
4. Update the FAQ and other static content with your own information

---


1. **Create a Supabase Project**
   - **Why it's necessary:** Creating a Supabase project is the foundational step to set up your database, authentication, and storage services in the cloud. This will serve as the backend for your SaaS application.
   - **Action:** Create a new Supabase project in the Supabase dashboard. Once created, [link the project locally](https://supabase.com/docs/guides/cli/local-development#link-your-project) using the Supabase CLI:
     ```bash
     supabase link
     ```
2. **Migrations**
   - **Why it's necessary:** Pushing database migrations ensures that your database schema in the remote Supabase instance is configured to match Makerkit's requirements. This step is crucial for the application to function correctly.
   - **Action:** Push the database migrations to your remote Supabase instance:
     ```bash
     supabase db push
     ```
3. **Auth Configuration**
   - **Why it's necessary:** Setting your APP URL in the Supabase project settings is critical for enabling OAuth flows and redirecting users correctly during authentication.
   - **Action:** [Set your APP URL in the Supabase project settings](https://supabase.com/docs/guides/auth/redirect-urls). Add the path `/auth/callback` to the allowed URLs.
4. **OAuth Providers**
   - **Why it's necessary:** Configuring OAuth providers like Google ensures that users can log in using their existing accounts, enhancing user convenience and security. This is all done externally, in both Google and Supabase - not in the application code.
   - **Action:** [Set up the OAuth providers](https://supabase.com/docs/guides/auth/social-login) in your Supabase project settings. For Google Auth, create a Google Cloud project and set up the OAuth credentials.
5. **Auth Emails**
   - **Why it's necessary:** To provide a correct user experience with Makerkit's SSR authentication, you need to update the authentication emails to include the token hash and prevent errors usually related to PKCE - i.e when users click on the email and are redirected to a different browser - resulting in an error.
   - **Action:** Update the authentication emails using the [Supabase documentation](https://supabase.com/docs/guides/auth/auth-smtp). The kit implements the `confirm` route, but you need to update the email templates in your Supabase settings.
6. **Deploy React Router**
   - **Why it's necessary:** Because your users are waiting! Deploying your React Router app to a hosting provider makes it accessible to users worldwide, allowing them to interact with your application.
   - **Action:** Deploy your React Router app to Vercel or another hosting provider. Copy the deployment URL and set it in your Supabase project settings.
7. **Environment Variables**
   - **Why it's necessary:** Setting the correct environment variables is essential for the application to function correctly. These variables include API keys, database URLs, and other configuration details required for your app to connect to various services.
   - **Action:** Please [generate the environment variables using our script](production-environment-variables) and then add them to your hosting provider's environment variables. Redeploy the app once you have the URL to set in the environment variables.
8. **Webhooks**
   - **Why it's necessary:** Configuring database webhooks allows your application to respond to changes in the database in real-time, such as sending notifications or updating records, ensuring your app stays in sync with the database.
   - **Action:** [Set up the database webhooks in Supabase](https://supabase.com/docs/guides/database/webhooks) to point to your React Router app at `/api/db/webhooks`.
9. **Emails Configuration**
   - **Why it's necessary:** Properly configuring your email service ensures that your application can send emails for account verification, password resets, and other notifications, which are crucial for user communication.
   - **Action:** Obtain SMTP details from an email service provider such as SendGrid, Mailgun, or Resend. Configure the emails in both the environment variables and the [Supabase project settings](https://supabase.com/docs/guides/auth/auth-smtp).
10. **Billing Setup**
    - **Why it's necessary:** Well - you want to get paid, right? Setting up billing ensures that you can charge your users for using your SaaS application, enabling you to monetize your service and cover operational costs. This can take a while.
    - **Action:** Create a Stripe or Lemon Squeezy account. Update the environment variables with the correct values for your billing service. Point webhooks from Stripe or Lemon Squeezy to `/api/billing/webhook`. Refer to the relevant documentation for more details on setting up billing.

**Note**: Please note that these steps are essential for setting up Makerkit and ensuring that your SaaS application functions correctly. Omitting any of these steps may result in errors or unexpected behavior in your application.