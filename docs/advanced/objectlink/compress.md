---
sidebar_position: 8
---

# Compress Mode

In the compress mode the object and member identifier are replaced with unique integer values. This will done automatically by the code generator, if enabled. The compress mode will shorten the message size as also reduce the time to compare identifiers on client and service side. For example a property change message will be reduced from 1 integer, 2 strings and 1 json value to 3 integers and 1 json value.

```
[ PROPERTY_CHANGE, "org.demos.Echo", "message", "foo"]
// 1 is the object id of "org.demos.Echo"
// 2 is the member id of "message"
[ PROPERTY_CHANGE, 1, 2, "foo"]
```

The generated code will use the integer values for the object and member identifiers. To make this work and more reliable a checksum on a module level is introduced. The checksum is a hash value of the module content and will be used to verify the remote object is the same as the local object, to avoid using the wrong object or object version.

The link message will carry an additional checksum value.

```
[ LINK, 1, CHECKSUM ]
```

There is no handshake messages, to ensure both client and services are in compress mode, this needs to be ensured during the deployment. If the client and service are not in the same mode, the link will fail, as the object identifier will not match.
