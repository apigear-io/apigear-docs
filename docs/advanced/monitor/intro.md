---
sidebar_position: 3
---

# Introduction

## What is API Monitoring?

API Monitoring is a feature that allows you to monitor the usage of your API. It allows you to detect anomalies and to see how your API is used during runtime. This is especially useful during development and testing.

:::warning Experimental

The **monitoring** is experimental and not all templates support this feature.

:::

## How does it work?

API Monitoring is a protocol that is implemented by the ApiGear templates. It allows clients to send API usage information to an API Monitoring Service. For development a server is embedded into your local ApiGear Studio / CLI application. This allows developers to see in real-time how the API is used and detect any anomalies fast.

## How to use it?

To use API Monitoring you need to use a template that supports it. Please check the documentation of the template you are using for more information.

When you generate your API SDK you can use the `monitor` feature to include the monitoring code into your API SDK. This will allow you to send API usage information to the monitoring server.

When your client application is running messages will be send to the monitoring server. You can then use the monitoring server to see the API usage information.

## How to setup the monitoring server?

The monitoring server is embedded into the ApiGear Studio / CLI application. You can find the monitoring server settings in the settings page of the ApiGear Studio.

:::note
If your template supports tracing, please consult the individual template documentation._
:::
