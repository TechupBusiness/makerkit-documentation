---
status: "published"
title: 'Common commands you need to know for the React Router Supabase Turbo Starter Kit'
label: 'Common Commands'
order: 5
description: 'Learn about the common commands you need to know to work with the React Router Supabase Turbo Starter Kit.'
---

Here are some common commands you need to know to work with the React Router Supabase Turbo Starter Kit.

NB: You don't need these commands to kickstart your project - you just need to know they exist so you can use them when you need them.

## Installing dependencies

To install the dependencies, run the following command:

```bash
pnpm i
```

This command will install all the dependencies for the project.

## Starting the development server

```bash
pnpm run dev
```

## Running the Supabase CLI commands

Supabase is installed in the `apps/web` folder. To run commands with the Supabase CLI, you can use the command:

```
pnpm --filter web supabase <command>
```

For example, if the documentation in Supabase recommends a command such as:

```
supabase db link
```

You will use:

```
pnpm --filter web supabase db link
```

This command will start the development server for the web application.

## Starting Supabase

To start Supabase, run the following command:

```bash
pnpm run supabase:web:start
```

This command will start the Supabase web server.

## Starting Stripe

If you want to test the billing system, you can start Stripe by running the following command:

```bash
pnpm run stripe:listen
```

This will route webhooks to your local machine.

## Resetting Supabase

Resetting the Database is needed when you update the schema or need to start fresh.

If you need to reset the Supabase database, run the following command:

```bash
pnpm run supabase:web:reset
```

This will reset the Supabase database.

## Generate Supabase types

Generating the types is required when you update the Supabase schema. In this way, the client can have the latest types.

To generate the Supabase types, run the following command:

```bash
pnpm run supabase:web:typegen
```

This will generate the Supabase types for the project. This should be done every time you update the Supabase schema.

## Running tests

To run the tests, run the following command:

```bash
pnpm run test
```

This will run the tests for the project.

## Cleaning the project

To clean the project, run the following command:

```bash
pnpm run clean:workspaces
pnpm run clean
```

Then - reinstall the dependencies:

```bash
pnpm i
```

## Type-checkinh the project

To type-check the project, run the following command:

```bash
pnpm run typecheck
```

## Linting the project

To lint the project, run the following command:

```bash
pnpm run lint:fix
```

This will lint the project using ESLint.

## Formatting the project

To format the project, run the following command:

```bash
pnpm run format:fix
```

This will format the project using Prettier.
