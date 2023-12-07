---
title: Instant Rollback
description: How to use Instant Rollback to quickly revert to a previous production release.
---

Instant Rollback is a way to quickly revert to a previous production release. This can be useful in situations that require a swift recovery from production incidents, like breaking changes or bugs.

![Instant Rollback in action](../../../assets/images/instant-rollback.webp)
Instant Rollback in action

The rolled-back changes include the code, your app’s environment variables and the configuration used for the previous release. This gives you a complete rollback of app configuration and code, instead of just reverting code like some other platforms do.

## How To Perform Instant Rollback

To initiate an instant rollback:

1. Go to the project’s detail page by clicking on the project on the dashboard home page. You’ll find the **Instant Rollback** button on the project detail page.

![Production deployment](../../../assets/images/rollback-dashboard-home.webp)

2. Click the **Instant Rollback** button. This should bring up a confirmation dialog with details about the release and a button to confirm you want to roll back. You can see information about the commit associated to the release, when it was deployed, and other information.

![Rollback dialog](../../../assets/images/rollback-dialog.webp)

3. Click the **Continue** button if you want to proceed. This will trigger an instant rollback event and update the [GitHub deployment](deployment-log.md) status as it progresses.
