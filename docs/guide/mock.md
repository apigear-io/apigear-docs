# Mock Service

APIGear support the developer flow by supporting auto generated mock server based on the defined interface description.

!!! note

    The API Mock maybe is limited based on your account type.


## Start and stop API Mock Server

To enable the API Mock go to the play section of the API and start the API Mock Server. The MockServer will be available after a short time and stop when no traffik has been received after a certain time.

The API server can not be stopped manually and will automatically timeout after no activity.


Based on the API description we are able to auto generate an API Mock server. The description can contain directives for the Mock Server how the fake data shall be generated.

```js

module game 1.0

interface Dice {
    @mock: { number: { min: 1, max: 6 }}
    int value
    roll()
}
```

These directives can be either be embedded into the API description or be loaded from an external annotation document.

```yml
game.Dice:
    mock: { number: { min: 1, max: 6 }}
```

A code generator can support the feature `mock` so that the mock connectivity code is generated with the source code.

The generated code is then able to be used as usual but the implementation will connect to the mock server using a specific url and token.

The state is automatically created using the mock parameters.

The Mockserver supports by default only static data retrieval. To add behavior to the API you’ll need to implement the API on the client side to push the changed data to to the server using the helper functions .


```js
{
    throw(state, args) {
        state.value = Math.floor( Math.random() * 6 ) +1;
    }
}
```

The modified state will automatically uploaded to the server and can be retrieved by all connected clients.

Behavior is an optional feature.