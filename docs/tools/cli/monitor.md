---
sidebar_position: 4
label: "API Monitoring (experimental)"
---

# API Monitoring

API Monitoring is a feature that allows you to monitor the behavior of an API. This is useful for testing, demonstration, and development. It decouples the interface implementation from the interface users. 

:::warning Experimental
The **monitoring** is experimental and not all templates support this feature.


:::
 Make sure you are generating `monitor` feature, and wrap your implementation with it.<br />
 For more information about this feature check [monitor documentation](/docs/advanced/monitor/intro).

## Quick API Monitoring

API Monitoring is a feature of the ApiGear platform. It allows to monitor the traffic of an API. The `apigear` command line tool can be used to monitor an API. The following example shows how to monitor the demo API.

```bash
apigear monitor run
```

This will start the API monitoring server. By default the server will listen on "127.0.0.1:5555" address. To change the it use the `--addr` option with address and port of your choice.

The monitoring server will listen for API calls. Normally the API events will come from a running API client.
