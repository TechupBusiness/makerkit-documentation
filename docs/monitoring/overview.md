---
title: "Setting Monitoring in Makerkit"
label: "How Monitoring works"
position: 0
description: "Introducing how Makerkit handles monitoring of performance metrics and exceptions in the React Router Supabase SaaS kit"
---

Makerkit provides first-class support for two monitoring providers:

1. Baselime (now part of Cloudflare)
2. Sentry

Makerkit will set up a few things for you out of the box:

1. **Performance Metrics** - Instrumentation using React Router's instrumentation hook
2. **Client exceptions** - Automatically capturing uncaught exceptions on the client
3. **Server exceptions** - Automatically capturing server-side exceptions when using the functions `enhanceAction` and `enhanceRouteHandler`

Additionally, it provides you with the tools to manually capturing exceptions, should you want to.

To set up monitoring in your application, you need to define the two variables below:

```bash
# sentry or baselime
VITE_MONITORING_PROVIDER=

# performance monitoring
MONITORING_INSTRUMENTATION_ENABLED=true
```

1. **Monitoring Provider** - the monitoring provider to use. Based on this variable, Makerkit will provide the relative implementation.
2. **Enable Instrumentation** - if enabled, we report performance metrics to the provider using React Router

For the provider's specific settings, please check the relative documentation.

#### Performance Monitoring

Performance monitoring uses React Router's experimental instrumentation for reporting performance metrics using OpenTelemetry.

NB: Performance monitoring is only enabled for Node.js runtimes. This means you won't see performance metrics in the edge runtime or Cloudflare.