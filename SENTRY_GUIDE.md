# Sentry Setup Guide

This quick guide will walk you through the initial steps of setting up Sentry for our project so we can capture errors and feedback loops.

## 1. Create Your Account and Project
1. Go to [Sentry.io](https://sentry.io/) and create an account.
2. Once logged in, click **Create Project**.
3. Select your platform: Choose **React** (since we are using React with Vite).
4. Name your project and assign it to your default team.

## 2. Get Your DSN Key
1. After the project is created, Sentry will show you a setup page.
2. Locate your **DSN Key** (it looks like a URL: `https://<key>@<region>.ingest.sentry.io/<project-id>`).
3. Save this key. We will need to add it to our local `.env` file as something like `VITE_SENTRY_DSN`.

## 3. Next Steps (Development)
Once you have the project created and the DSN key ready, update the AI agent. We will then:
1. Run `npm install @sentry/react`.
2. Initialize Sentry in your application's entry point (e.g., `main.tsx`).
3. Manually trigger a test error to verify that Sentry is receiving events successfully.
