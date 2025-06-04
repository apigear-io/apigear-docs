---
sidebar_position: 4
---

# Simulation Examples

## Heating Example

The heating example uses the proxy api with `$createActor` to simulate a simple heating control system. The system consists of three actors: a heater, a thermostat, and a temperature sensor. The heater can be turned on and off, and it influences the temperature in the room. The thermostat can set a target temperature and switch between auto and manual mode. The temperature sensor reads the current temperature and updates it based on the heater's influence.

### API Definition

```ts
module heating

interface Heater {
    isOn: bool
    power: int
    temperature: float
    maxTemp: float
    minTemp: float
    turnOn()
    turnOff()
    updateTemperature(deltaTime: int)
}

interface Thermostat {
    targetTemperature: float
    tolerance: float
    mode: string
    setTargetTemperature(temp: float)
    checkTemperature()
    setMode(newMode: string)
}

interface TempSensor {
    currentTemperature: float
    updateInterval: int
    lastUpdate: int
    update()
}
```

### Simulation Script

```js
// Heater control system simulation
const heater = $createService("heating.Heater", {
    isOn: false,
    power: 2000, // watts
    temperature: 20.0, // celsius
    maxTemp: 30.0,
    minTemp: 15.0
});

const thermostat = $createService("heating.Thermostat", {
    targetTemperature: 22.0,
    tolerance: 0.5,
    mode: 'auto' // 'auto' or 'manual'
});

const tempSensor = $createService("heating.TempSensor", {
    currentTemperature: 20.0,
    updateInterval: 1000, // ms
    lastUpdate: Date.now()
});

// Heater methods
heater.turnOn = function () {
    if (!heater.isOn) {
        heater.isOn = true;
        console.log("Heater turned ON");
    }
}

heater.turnOff = function () {
    if (heater.isOn) {
        heater.isOn = false;
        console.log("Heater turned OFF");
    }
}

heater.updateTemperature = function (deltaTime) {
    if (heater.isOn) {
        // Simple temperature increase model
        // Temperature rises faster when difference to max temp is larger
        const heatIncrease = (heater.maxTemp - heater.temperature) * 0.1;
        heater.temperature += heatIncrease * (deltaTime / 1000);
    } else {
        // Natural cooling model
        // Temperature falls faster when difference to ambient temp is larger
        const cooling = (heater.temperature - tempSensor.currentTemperature) * 0.05;
        heater.temperature -= cooling * (deltaTime / 1000);
    }
}

// Thermostat methods
thermostat.setTargetTemperature = function (temp) {
    if (temp >= heater.minTemp && temp <= heater.maxTemp) {
        thermostat.targetTemperature = temp;
        console.log(`Target temperature set to ${temp}°C`);
        thermostat.checkTemperature();
    } else {
        console.log(`Temperature ${temp}°C is outside allowed range`);
    }
}

thermostat.checkTemperature = function () {
    const currentTemp = tempSensor.currentTemperature;
    const lowerBound = thermostat.targetTemperature - thermostat.tolerance;
    const upperBound = thermostat.targetTemperature + thermostat.tolerance;

    if (currentTemp < lowerBound) {
        heater.turnOn();
    } else if (currentTemp > upperBound) {
        heater.turnOff();
    }
}

thermostat.setMode = function (newMode) {
    if (newMode === 'auto' || newMode === 'manual') {
        thermostat.mode = newMode;
        console.log(`Thermostat mode set to ${newMode}`);
        if (newMode === 'auto') {
            thermostat.checkTemperature();
        }
    }
}

// Temperature sensor methods
tempSensor.update = function () {
    const now = Date.now();
    const deltaTime = now - tempSensor.lastUpdate;
    tempSensor.lastUpdate = now;

    // Update current temperature based on heater's influence
    const heatTransfer = (heater.temperature - tempSensor.currentTemperature) * 0.1;
    tempSensor.currentTemperature += heatTransfer * (deltaTime / 1000);

    // Add some random fluctuation
    tempSensor.currentTemperature += (Math.random() - 0.5) * 0.1;

    console.log(`Current temperature: ${tempSensor.currentTemperature.toFixed(1)}°C`);

    if (thermostat.mode === 'auto') {
        thermostat.checkTemperature();
    }
}

function main() {
    // Set up monitoring
    heater.$.onProperty("isOn", function (isOn) {
        console.log(`Heater state changed to: ${isOn ? "ON" : "OFF"}`);
    });

    tempSensor.$.onProperty("currentTemperature", function (temp) {
        console.log(`Temperature sensor reading: ${temp.toFixed(1)}°C`);
    });

    thermostat.$.onProperty("targetTemperature", function (temp) {
        console.log(`Target temperature changed to: ${temp.toFixed(1)}°C`);
    });

    // Initial setup
    thermostat.setMode('auto');
    thermostat.setTargetTemperature(23.0); // Want it a bit warmer

    // Simulate temperature changes over time
    const simulationSteps = 10;
    for (let i = 0; i < simulationSteps; i++) {
        tempSensor.update();
    }

    return {
        finalTemperature: tempSensor.currentTemperature,
        heaterState: heater.isOn,
        targetTemperature: thermostat.targetTemperature
    };
}
```


## Ball Animation Example

The ball animation example uses the proxy api with `$createActor` to simulate a simple ball animation. The system consists of a ball actor that moves around the screen based on its velocity and acceleration. The ball bounces off the walls and changes color when it hits the edges.

### API Definition

```ts
module game

struct Vec2D {
    x: int
    y: int
}

interface Ball {
    pos: Vec2D
    vel: Vec2D
    acc: Vec2D
    move()
}
```

## Simulation Script

```ts

class Vec2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


const ball = $createActor("game.Ball", {
    pos: { x: 0, y: 0 },
    vel: { x: 1, y: 1 },
    acc: { x: 1, y: 1 },
});


ball.move = function () {
    console.log("moving", JSON.stringify(ball.$.getProperties()));
    ball.pos = { x: ball.pos.x + ball.vel.x, y: ball.pos.y + ball.vel.y };
    ball.vel = { x: ball.vel.x + ball.acc.x, y: ball.vel.y + ball.acc.y };
};


ball.$.onProperty("pos", function (value) {
    console.log("pos changed", JSON.stringify(value));
});

ball.$.onProperty("vel", function (value) {
    console.log("vel changed", JSON.stringify(value));
});

ball.$.onProperty("acc", function (value) {
    console.log("acc changed", JSON.stringify(value));
});

function main() {
    console.log("running");
    for (let i = 0; i < 10; i++) {
        ball.move();
    }
    console.log("done", JSON.stringify(ball.$.getProperties()));
}
```