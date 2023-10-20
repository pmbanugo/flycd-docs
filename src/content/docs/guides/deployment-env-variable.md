---
title: Deployment Environment Variables
description: information about FlyCD system environment variables
---

FlyCD provides a set of Environment Variables that are automatically set by the system at deploy time, such as the SHA of the Git Commit or the name of the Git commit author. They’re prefixed with `FLYCD_`.

The table below contains the list of variables and their description:

| Variables           | Description    |
|:--------------------|:---------------|
|FLYCD_GIT_COMMIT_SHA |The SHA hash of the commit that triggered the deployment. For example `c5c78cf9f25f348285c4fc7006f3e0f17af330aa` |
|FLYCD_GIT_COMMIT_REF |The git branch of the commit that triggered the deployment. For example: `feat-instant-rollback`. |
|FLYCD_GIT_COMMIT_URL |The URL of the commit that triggered the deployment. For example `https://github.com/pmbanugo/silver-lamp/commit/c5c78cf9f25f348285c4fc7006f3e0f17af3300we` |
|FLYCD_GIT_COMMIT_AUTHOR |The author of the commit that triggered the deployment. |

:::note
This feature currently is available only to premium users and is enabled automatically. In the future, we could provide a means for you to enable/disable it for individual projects.
:::