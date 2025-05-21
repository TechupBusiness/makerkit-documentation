---
status: "published"
title: 'Deploy React Router Supabase Turbo to Fly.io'
label: 'Deploy to Fly.io'
order: 7
description: 'Guide to deploy the React Router  SaaS boilerplate to Fly.io'
---

This guide was shared by a community member to deploy the React Router Supabase Turbo Kit to Fly.io.

First, create the `fly.toml` in the root directory (configure fly server to your needs):

```toml
app = "react-router-turbo-kit"
primary_region = "lax"
kill_signal = "SIGINT"
kill_timeout = 5

[build]
  dockerfile = "Dockerfile"

[env]
  NODE_ENV = "production"

[experimental]
  allowed_public_ports = []
  auto_rollback = true

[[services]]
  http_checks = []
  internal_port = 3000
  processes = ["app"]
  protocol = "tcp"
  script_checks = []
  [services.concurrency]
    hard_limit = 25
    soft_limit = 20
  [[services.ports]]
    force_https = true
    handlers = ["http"]
    port = 80
  [[services.ports]]
    handlers = ["tls", "http"]
    port = 443
  [[services.tcp_checks]]
    grace_period = "1s"
    interval = "15s"
    restart_limit = 0
    timeout = "2s"
```

then we add this dockerfile to your root:

```dockerfile
# syntax=docker/dockerfile:1

# Stage 1: Builder
ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential

# Install pnpm
RUN npm install -g pnpm

# Copy workspace files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies for the entire workspace
RUN pnpm install

# Change working directory to web app
WORKDIR /app/apps/web

# Copy all files
COPY . .

# Install dependencies for the web app
RUN pnpm install

# Define build arguments
ARG NODE_ENV
ARG VITE_SITE_URL
ARG VITE_PRODUCT_NAME
ARG VITE_SITE_TITLE
ARG VITE_SITE_DESCRIPTION
ARG VITE_DEFAULT_THEME_MODE
ARG VITE_DEFAULT_LOCALE
ARG VITE_AUTH_PASSWORD
ARG VITE_AUTH_MAGIC_LINK
ARG CONTACT_EMAIL
ARG VITE_ENABLE_THEME_TOGGLE
ARG VITE_ENABLE_PERSONAL_ACCOUNT_DELETION
ARG VITE_ENABLE_PERSONAL_ACCOUNT_BILLING
ARG VITE_ENABLE_TEAM_ACCOUNTS
ARG VITE_ENABLE_TEAM_ACCOUNT_DELETION
ARG VITE_ENABLE_TEAM_ACCOUNTS_BILLING
ARG VITE_ENABLE_TEAM_ACCOUNTS_CREATION
ARG VITE_ENABLE_NOTIFICATIONS
ARG VITE_REALTIME_NOTIFICATIONS
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_ANON_KEY
ARG SUPABASE_SERVICE_ROLE_KEY
ARG VITE_BILLING_PROVIDER
ARG VITE_STRIPE_PUBLISHABLE_KEY
ARG STRIPE_SECRET_KEY
ARG STRIPE_WEBHOOK_SECRET
ARG VITE_CMS_CLIENT
ARG VITE_KEYSTATIC_CONTENT_PATH
ARG VITE_LOCALES_PATH
ARG MAILER_PROVIDER
ARG EMAIL_SENDER
ARG EMAIL_HOST
ARG EMAIL_PORT
ARG EMAIL_USER
ARG EMAIL_PASSWORD
ARG EMAIL_TLS
ARG GADGET_SECRET_KEY
ARG VITE_TEAM_NAVIGATION_STYLE
ARG VITE_USER_NAVIGATION_STYLE
ARG VITE_THEME_COLOR
ARG VITE_THEME_COLOR_DARK
ARG SIGN_IN_PATH
ARG SIGN_UP_PATH
ARG TEAM_ACCOUNTS_HOME_PATH
ARG INVITATION_PAGE_PATH
ARG VITE_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX

# Set environment variables
ENV NODE_ENV=${NODE_ENV}
ENV VITE_SITE_URL=${VITE_SITE_URL}
ENV VITE_PRODUCT_NAME=${VITE_PRODUCT_NAME}
ENV VITE_SITE_TITLE=${VITE_SITE_TITLE}
ENV VITE_SITE_DESCRIPTION=${VITE_SITE_DESCRIPTION}
ENV VITE_DEFAULT_THEME_MODE=${VITE_DEFAULT_THEME_MODE}
ENV VITE_DEFAULT_LOCALE=${VITE_DEFAULT_LOCALE}
ENV VITE_AUTH_PASSWORD=${VITE_AUTH_PASSWORD}
ENV VITE_AUTH_MAGIC_LINK=${VITE_AUTH_MAGIC_LINK}
ENV CONTACT_EMAIL=${CONTACT_EMAIL}
ENV VITE_ENABLE_THEME_TOGGLE=${VITE_ENABLE_THEME_TOGGLE}
ENV VITE_ENABLE_PERSONAL_ACCOUNT_DELETION=${VITE_ENABLE_PERSONAL_ACCOUNT_DELETION}
ENV VITE_ENABLE_PERSONAL_ACCOUNT_BILLING=${VITE_ENABLE_PERSONAL_ACCOUNT_BILLING}
ENV VITE_ENABLE_TEAM_ACCOUNTS=${VITE_ENABLE_TEAM_ACCOUNTS}
ENV VITE_ENABLE_TEAM_ACCOUNT_DELETION=${VITE_ENABLE_TEAM_ACCOUNT_DELETION}
ENV VITE_ENABLE_TEAM_ACCOUNTS_BILLING=${VITE_ENABLE_TEAM_ACCOUNTS_BILLING}
ENV VITE_ENABLE_TEAM_ACCOUNTS_CREATION=${VITE_ENABLE_TEAM_ACCOUNTS_CREATION}
ENV VITE_ENABLE_NOTIFICATIONS=${VITE_ENABLE_NOTIFICATIONS}
ENV VITE_REALTIME_NOTIFICATIONS=${VITE_REALTIME_NOTIFICATIONS}
ENV VITE_SUPABASE_URL=${VITE_SUPABASE_URL}
ENV VITE_SUPABASE_ANON_KEY=${VITE_SUPABASE_ANON_KEY}
ENV SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
ENV VITE_BILLING_PROVIDER=${VITE_BILLING_PROVIDER}
ENV VITE_STRIPE_PUBLISHABLE_KEY=${VITE_STRIPE_PUBLISHABLE_KEY}
ENV STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
ENV STRIPE_WEBHOOK_SECRET=${STRIPE_WEBHOOK_SECRET}
ENV VITE_CMS_CLIENT=${VITE_CMS_CLIENT}
ENV VITE_KEYSTATIC_CONTENT_PATH=${VITE_KEYSTATIC_CONTENT_PATH}
ENV VITE_LOCALES_PATH=${VITE_LOCALES_PATH}
ENV MAILER_PROVIDER=${MAILER_PROVIDER}
ENV EMAIL_SENDER=${EMAIL_SENDER}
ENV EMAIL_HOST=${EMAIL_HOST}
ENV EMAIL_PORT=${EMAIL_PORT}
ENV EMAIL_USER=${EMAIL_USER}
ENV EMAIL_PASSWORD=${EMAIL_PASSWORD}
ENV EMAIL_TLS=${EMAIL_TLS}
ENV GADGET_SECRET_KEY=${GADGET_SECRET_KEY}
ENV VITE_TEAM_NAVIGATION_STYLE=${VITE_TEAM_NAVIGATION_STYLE}
ENV VITE_USER_NAVIGATION_STYLE=${VITE_USER_NAVIGATION_STYLE}
ENV VITE_THEME_COLOR=${VITE_THEME_COLOR}
ENV VITE_THEME_COLOR_DARK=${VITE_THEME_COLOR_DARK}
ENV SIGN_IN_PATH=${SIGN_IN_PATH}
ENV SIGN_UP_PATH=${SIGN_UP_PATH}
ENV TEAM_ACCOUNTS_HOME_PATH=${TEAM_ACCOUNTS_HOME_PATH}
ENV INVITATION_PAGE_PATH=${INVITATION_PAGE_PATH}
ENV VITE_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX=${VITE_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX}

# Build the web app
RUN pnpm run build

# Stage 2: Runner
FROM node:${NODE_VERSION}-slim AS runner

# Set the working directory in the container
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app/apps/web /app

# Install pnpm in the final stage to ensure it's available for runtime
RUN npm install -g pnpm
RUN pnpm install --prod

# Expose the port the app runs on
EXPOSE 8080

# Start the server by default, this can be overwritten at runtime
CMD ["pnpm", "start"]
```

Lastly, add this workflow file for the deployment:

```yaml
name: Fly Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy app
    runs-on: ubuntu-latest
    concurrency: deploy-group
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: |
          flyctl deploy --remote-only \
            --build-arg NODE_ENV="${{ vars.NODE_ENV }}" \
            --build-arg VITE_SITE_URL="${{ vars.VITE_SITE_URL }}" \
            --build-arg VITE_PRODUCT_NAME="${{ vars.VITE_PRODUCT_NAME }}" \
            --build-arg VITE_SITE_TITLE="${{ vars.VITE_SITE_TITLE }}" \
            --build-arg VITE_SITE_DESCRIPTION="${{ vars.VITE_SITE_DESCRIPTION }}" \
            --build-arg VITE_DEFAULT_THEME_MODE="${{ vars.VITE_DEFAULT_THEME_MODE }}" \
            --build-arg VITE_DEFAULT_LOCALE="${{ vars.VITE_DEFAULT_LOCALE }}" \
            --build-arg VITE_AUTH_PASSWORD="${{ vars.VITE_AUTH_PASSWORD }}" \
            --build-arg VITE_AUTH_MAGIC_LINK="${{ vars.VITE_AUTH_MAGIC_LINK }}" \
            --build-arg CONTACT_EMAIL="${{ secrets.CONTACT_EMAIL }}" \
            --build-arg VITE_ENABLE_THEME_TOGGLE="${{ vars.VITE_ENABLE_THEME_TOGGLE }}" \
            --build-arg VITE_ENABLE_PERSONAL_ACCOUNT_DELETION="${{ vars.VITE_ENABLE_PERSONAL_ACCOUNT_DELETION }}" \
            --build-arg VITE_ENABLE_PERSONAL_ACCOUNT_BILLING="${{ vars.VITE_ENABLE_PERSONAL_ACCOUNT_BILLING }}" \
            --build-arg VITE_ENABLE_TEAM_ACCOUNTS="${{ vars.VITE_ENABLE_TEAM_ACCOUNTS }}" \
            --build-arg VITE_ENABLE_TEAM_ACCOUNT_DELETION="${{ vars.VITE_ENABLE_TEAM_ACCOUNT_DELETION }}" \
            --build-arg VITE_ENABLE_TEAM_ACCOUNTS_BILLING="${{ vars.VITE_ENABLE_TEAM_ACCOUNTS_BILLING }}" \
            --build-arg VITE_ENABLE_TEAM_ACCOUNTS_CREATION="${{ vars.VITE_ENABLE_TEAM_ACCOUNTS_CREATION }}" \
            --build-arg VITE_ENABLE_NOTIFICATIONS="${{ vars.VITE_ENABLE_NOTIFICATIONS }}" \
            --build-arg VITE_REALTIME_NOTIFICATIONS="${{ vars.VITE_REALTIME_NOTIFICATIONS }}" \
            --build-arg VITE_SUPABASE_URL="${{ vars.VITE_SUPABASE_URL }}" \
            --build-arg VITE_SUPABASE_ANON_KEY="${{ vars.VITE_SUPABASE_ANON_KEY }}" \
            --build-arg SUPABASE_SERVICE_ROLE_KEY="${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}" \
            --build-arg VITE_BILLING_PROVIDER="${{ vars.VITE_BILLING_PROVIDER }}" \
            --build-arg VITE_STRIPE_PUBLISHABLE_KEY="${{ vars.VITE_STRIPE_PUBLISHABLE_KEY }}" \
            --build-arg STRIPE_SECRET_KEY="${{ secrets.STRIPE_SECRET_KEY }}" \
            --build-arg STRIPE_WEBHOOK_SECRET="${{ secrets.STRIPE_WEBHOOK_SECRET }}" \
            --build-arg VITE_CMS_CLIENT="${{ vars.VITE_CMS_CLIENT }}" \
            --build-arg VITE_KEYSTATIC_CONTENT_PATH="${{ vars.VITE_KEYSTATIC_CONTENT_PATH }}" \
            --build-arg VITE_LOCALES_PATH="${{ vars.VITE_LOCALES_PATH }}" \
            --build-arg MAILER_PROVIDER="${{ secrets.MAILER_PROVIDER }}" \
            --build-arg EMAIL_SENDER="${{ secrets.EMAIL_SENDER }}" \
            --build-arg EMAIL_HOST="${{ secrets.EMAIL_HOST }}" \
            --build-arg EMAIL_PORT="${{ secrets.EMAIL_PORT }}" \
            --build-arg EMAIL_USER="${{ secrets.EMAIL_USER }}" \
            --build-arg EMAIL_PASSWORD="${{ secrets.EMAIL_PASSWORD }}" \
            --build-arg EMAIL_TLS="${{ secrets.EMAIL_TLS }}" \
            --build-arg VITE_TEAM_NAVIGATION_STYLE="${{ vars.VITE_TEAM_NAVIGATION_STYLE }}" \
            --build-arg VITE_USER_NAVIGATION_STYLE="${{ vars.VITE_USER_NAVIGATION_STYLE }}" \
            --build-arg VITE_THEME_COLOR="${{ vars.VITE_THEME_COLOR }}" \
            --build-arg VITE_THEME_COLOR_DARK="${{ vars.VITE_THEME_COLOR_DARK }}" \
            --build-arg SIGN_IN_PATH="${{ vars.SIGN_IN_PATH }}" \
            --build-arg SIGN_UP_PATH="${{ vars.SIGN_UP_PATH }}" \
            --build-arg TEAM_ACCOUNTS_HOME_PATH="${{ vars.TEAM_ACCOUNTS_HOME_PATH }}" \
            --build-arg INVITATION_PAGE_PATH="${{ vars.INVITATION_PAGE_PATH }}" \
            --build-arg VITE_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX="${{ vars.VITE_DISPLAY_TERMS_AND_CONDITIONS_CHECKBOX }}"
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

Configure your secrets and environment variables in GitHub Actions.

Note: It's recommended to use GitHub's secrets and variables for this deployment process, as Fly.io's secrets may not function as expected in this context.

Please review the list of environment variables in the deployment command above and adjust them according to your project's specific requirements. Remove any variables that are not applicable to your setup.

Ensure all necessary secrets and variables are properly set in your GitHub repository settings before running the deployment workflow.