---
status: "published"

title: "Configuring Baselime in your React Router Supabase SaaS kit"
label: "Baselime"
order: 1
---


[Baselime](https://baselime.io) (now part of Cloudflare) is an observability platform that helps you monitor your application's performance and errors. In this guide, you'll learn how to configure Baselime in your React Router Supabase SaaS kit.

To use [Baselime](https://baselime.io) to capture exceptions and performance metrics of your app, please define the below variables:

```bash
VITE_BASELIME_KEY=your_key
VITE_MONITORING_PROVIDER=baselime
```