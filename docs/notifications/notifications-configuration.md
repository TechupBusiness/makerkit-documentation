---
status: "published"
title: "Configuring Notifications in the React Router Supabase Starter Kit"
description: "Learn how to configure notifications in the React Router Supabase Starter Kit."
label: "Notifications Configuration"
order: 0
---

Makerkit allows you to configure and send notifications using the `@kit/notifications` package. The package provides a simple API to send notifications.

There are two variables that you can set in the `.env` file to configure notifications:

1. **VITE_ENABLE_NOTIFICATIONS**: Set this to `true` to enable notifications.
2. **VITE_REALTIME_NOTIFICATIONS**: Set this to `true` to enable real-time notifications.

```bash
VITE_ENABLE_NOTIFICATIONS=true
VITE_REALTIME_NOTIFICATIONS=true
```

1. If `VITE_ENABLE_NOTIFICATIONS` is set to `false`, the bell icon will not appear in the header. Otherwise, it will appear.
2. If `VITE_REALTIME_NOTIFICATIONS` is set to `false`, the notifications will not be real-time. Otherwise, they will be real-time.

### Why would you not want to enable notifications?

If you are not using notifications in your application, you can disable them to reduce the complexity of your application. This can be useful if you are building a simple application and do not need notifications.

### Real-time notifications

If you want to enable real-time notifications, you need to set the `VITE_REALTIME_NOTIFICATIONS` environment variable to `true`. This will enable real-time notifications in your application.

This may be your preference for a more cost-effective solution, as it will reduce the number of requests to the server.