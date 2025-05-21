---
status: "published"
label: "Email Configuration"
description: "Learn how to configure the mailer provider to start sending emails from your React Router Supabase Starter Kit."
title: "Email Configuration in the React Router Supabase Starter Kit"
order: 0
---

## Makerkit Emails vs Supabase Auth Emails

Before we dive into the configuration, it's important to understand the difference between Makerkit emails and Supabase Auth emails.

1. **Makerkit Emails**: Makerkit emails are used to send transactional emails, such as inviting a member to join a team, and a delete account confirmation, plus all the ones you will be adding
2. **Supabase Auth Emails**: Supabase Auth emails are used to send emails for authentication purposes, such as email verification and password reset.

You will need to set up both Makerkit and Supabase Auth emails to have a complete email setup in your application.

The guide below refers to Makerkit emails.

For Supabase Auth, please refer to the [Supabase documentation](https://supabase.com/docs/guides/auth/auth-smtp) for more information.

---

Makerkit allows you to configure and send emails using the `@kit/mailers` package. The package provides a simple API to send emails.

Makerkit provides three implementations of the mailer:

1. `nodemailer`: The default mailer that uses the `nodemailer` library. Perfect for Node.js environments as it works with any SMTP server - so you're not locked into any specific provider.
2. `resend`: A mailer that uses the [Resend](https://resend.com) API using HTTP. It's a good choice if you choose to use Resend.

Below, we will show you how to configure the mailer provider to start sending emails from your React Router Supabase Starter Kit.

## Configuration

To set the mailer provider, you need to set the `MAILER_PROVIDER` environment variable in the `apps/web/.env` file. For example, to use the `nodemailer` mailer, set the `MAILER_PROVIDER` environment variable to `nodemailer`:

```bash
MAILER_PROVIDER=nodemailer
```

By default, we use `nodemailer`.

### SMTP Configuration

If you want to use the `nodemailer` mailer, you need to set the SMTP configuration in your environment variables. Here is an example of the SMTP configuration:

```bash
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_TLS=
```

The variables are:

1. `EMAIL_USER`: The user of the email address. This is provider-specific so please check your email provider's documentation.
2. `EMAIL_PASSWORD`: The password of the account provided by the email provider.
3. `EMAIL_HOST`: The SMTP server host. This is provider-specific so please check your email provider's documentation.
4. `EMAIL_PORT`: The SMTP server port. This is provider-specific so please check your email provider's documentation.
5. `EMAIL_TLS`: The TLS configuration. This is provider-specific so please check your email provider's documentation. Generally, you can set it to `true`.
6. `EMAIL_SENDER`: The sender of the emails. This is usually the email address of your application. It's usually in the format `Sender Name <email@app.com>`.

## Resend API

Alternatively, you can use Resend.

Set the `MAILER_PROVIDER` environment variable to `resend` in the `apps/web/.env` file:

```bash
MAILER_PROVIDER=resend
```

And provide the Resend API key:

```bash
RESEND_API_KEY=your-api-key
EMAIL_SENDER=your-email
```

That's it! You're now ready to send emails from your React Router Supabase Starter Kit using the configured mailer provider.