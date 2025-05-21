---
status: "published"
title: "Running the React Router Supabase Turbo project"
label: "Running the Project"
order: 4
description: "Learn how to run the React Router Supabase Turbo project on your local machine."
---

To run the project - there are some commands you need to run.

1. Start the development server (web application)
2. Start Supabase (ensure Docker is running)
3. Start Stripe (optional, if you want to test the billing system)

## 0. Environment variables

Please create a copy of the `.env.template` file and rename it `.env`.

## 1. Start the development server

```bash
# Start the development server
pnpm dev
```

This command will run the web application.

Please refer to `apps/web/README.md` for more information about the web application.

To get started right away, use the credentials below:

- **Email**: `test@makerkit.dev`
- **Password**: `testingpassword`

To confirm email addresses, please visit [Inbucket](http://localhost:54324/status): Supabase uses Inbucket to capture emails sent during the authentication process.

### Testing the Super Admin locally

By default, we seed the `auth.users` table with a super admin user. To login as this user, you can use the following credentials:

```json
{
  "email": "super-admin@makerkit.dev",
  "password": "testingpassword"
}
```

Since you require MFA for the Super Admin user, please use the following steps to pass MFA:

1. **TOTP**: Use the following [TOTP generator](https://totp.danhersam.com/) to generate a TOTP code.
2. **Secret Key**: Use the test secret key `NHOHJVGPO3R3LKVPRMNIYLCDMBHUM2SE` to generate a TOTP code.
3. **Verify**: Use the TOTP code and the secret key to verify the MFA code.
Make sure the TOTP code is not expired when you verify the MFA code.

{% alert type="warning" title="These are test credentials" %}
The flow above is for testing purposes only. For production, you must use an authenticator app such as Google Authenticator, Authy, Bitwarden, Proton, or similar.
{% /alert %}

## 2. Start Supabase

{% alert type="warning" title="Have Docker running" %}
We need to have Docker running so that we can start the Supabase Docker container. If you don't have Docker running, please start it now.
{% /alert %}

Ensure Docker is running, the run the following command to start Supabase (or use your IDE to run the command in the package.json).
[Docker Desktop](https://www.docker.com/products/docker-desktop/) is the best way to get started with Docker.

```bash
pnpm run supabase:web:start
```

This command will start the Supabase web server.

Please read the [Supabase documentation](https://supabase.com/docs/guides/local-development/cli/getting-started#running-supabase-locally) for more information about starting Supabase locally.

## 3. Start Stripe

If you want to test the billing system, you can start Stripe by running the following command:

```bash
pnpm run stripe:listen
```

This will route webhooks to your local machine.
