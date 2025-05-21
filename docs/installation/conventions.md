---
status: "published"
description: "A collection of conventions used in the core kit"
title: "Conventions in the React Router Supabase Turbo Starter Kit"
label: "Conventions"
order: 7
---

Below are some of the conventions used in the React Router Supabase Turbo Starter Kit.

In this project, we use Turborepo packages to define reusable code that can be shared across multiple applications.

**Apps are used to define the main application**, including the routing, layout, and global styles.

Apps pass down the configuration to the packages - and the packages provide the corresponding logic and components.

#### Should I create a package for my app code?

I do not recommend creating a package for your app code unless you are planning to reuse it in multiple applications, or unless you're experienced writing library code.

If you are building an application that is not meant to be reused, you should keep all the code in the app folder.

This will save you time - and make you think less. Both are good things when you're trying to ship fast.

**If you are experienced** by all means, go for it!

#### Imports and Paths

When importing something from a package or an app, you will use the following paths:

- When you import something from a package, you will use `@kit/package-name` (e.g., `@kit/ui`, `@kit/shared`, etc.).
- When you import something from an app, you will use `~/` (e.g., `~/lib/components`, `~/config`, etc.).

#### Non-Route Folders

Non-route folders within `app` will be prefixed with an underscore (e.g., `_components`, `_lib`, etc.).

This makes it obvious that these folders are not routes and are used for shared components, utilities, etc.

#### Server Code

The files localed in `server` folders are to be assumed as server-side code. They are not meant to be used in the client-side code. This helps everyone understanding where the code is meant to be run, since the lines are very blurry in React Router.

For example, you will find the server code related to a part of the app at `_lib/server` folder.