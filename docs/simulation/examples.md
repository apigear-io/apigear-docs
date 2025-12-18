---
sidebar_position: 4
---

# Simulation Examples

## Heating Example

The heating example simulates a simple heating control system. The system consists of three services: a heater, a thermostat, and a temperature sensor. The heater can be turned on and off, and it influences the temperature in the room. The thermostat can set a target temperature and switch between auto and manual mode. The temperature sensor reads the current temperature and updates it based on the heater's influence.

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

// Heater methods using natural API
heater.turnOn = function () {
    if (!this.isOn) {
        this.isOn = true;
        console.log("Heater turned ON");
        this.emit('stateChanged', true);
    }
}

heater.turnOff = function () {
    if (this.isOn) {
        this.isOn = false;
        console.log("Heater turned OFF");
        this.emit('stateChanged', false);
    }
}

heater.updateTemperature = function (deltaTime) {
    if (this.isOn) {
        // Simple temperature increase model
        // Temperature rises faster when difference to max temp is larger
        const heatIncrease = (this.maxTemp - this.temperature) * 0.1;
        this.temperature += heatIncrease * (deltaTime / 1000);
    } else {
        // Natural cooling model
        // Temperature falls faster when difference to ambient temp is larger
        const cooling = (this.temperature - tempSensor.currentTemperature) * 0.05;
        this.temperature -= cooling * (deltaTime / 1000);
    }
}

// Thermostat methods using natural API
thermostat.setTargetTemperature = function (temp) {
    if (temp >= heater.minTemp && temp <= heater.maxTemp) {
        this.targetTemperature = temp;
        console.log(`Target temperature set to ${temp}°C`);
        this.checkTemperature();
    } else {
        console.log(`Temperature ${temp}°C is outside allowed range`);
    }
}

thermostat.checkTemperature = function () {
    const currentTemp = tempSensor.currentTemperature;
    const lowerBound = this.targetTemperature - this.tolerance;
    const upperBound = this.targetTemperature + this.tolerance;

    if (currentTemp < lowerBound) {
        heater.turnOn();
    } else if (currentTemp > upperBound) {
        heater.turnOff();
    }
}

thermostat.setMode = function (newMode) {
    if (newMode === 'auto' || newMode === 'manual') {
        this.mode = newMode;
        console.log(`Thermostat mode set to ${newMode}`);
        if (newMode === 'auto') {
            this.checkTemperature();
        }
    }
}

// Temperature sensor methods using natural API
tempSensor.update = function () {
    const now = Date.now();
    const deltaTime = now - this.lastUpdate;
    this.lastUpdate = now;

    // Update current temperature based on heater's influence
    const heatTransfer = (heater.temperature - this.currentTemperature) * 0.1;
    this.currentTemperature += heatTransfer * (deltaTime / 1000);

    // Add some random fluctuation
    this.currentTemperature += (Math.random() - 0.5) * 0.1;

    console.log(`Current temperature: ${this.currentTemperature.toFixed(1)}°C`);

    if (thermostat.mode === 'auto') {
        thermostat.checkTemperature();
    }
}

function main() {
    // Set up monitoring using natural API
    heater.on("isOn", function (isOn) {
        console.log(`Heater state changed to: ${isOn ? "ON" : "OFF"}`);
    });

    tempSensor.on("currentTemperature", function (temp) {
        console.log(`Temperature sensor reading: ${temp.toFixed(1)}°C`);
    });

    thermostat.on("targetTemperature", function (temp) {
        console.log(`Target temperature changed to: ${temp.toFixed(1)}°C`);
    });
    
    // Listen to custom signal
    heater.on('stateChanged', function(state) {
        console.log(`Heater state signal: ${state ? "ON" : "OFF"}`);
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

The ball animation example simulates a simple ball physics system. The ball has position, velocity, and acceleration properties. The ball moves around based on its velocity and acceleration, demonstrating the natural API for property updates and signal emissions.

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
    reset()
}
```

### Simulation Script

```js
// Ball physics simulation using natural API
const ball = $createService("game.Ball", {
    pos: { x: 0, y: 0 },
    vel: { x: 1, y: 1 },
    acc: { x: 1, y: 1 },
});

// Define move method using natural API with 'this'
ball.move = function() {
    const acc = this.acc;
    const vel = this.vel;
    const pos = this.pos;
    
    // Calculate new position and velocity
    const newPos = { x: pos.x + vel.x, y: pos.y + vel.y };
    const newVel = { x: vel.x + acc.x, y: vel.y + acc.y };
    
    // Update properties using natural assignment
    this.pos = newPos;
    this.vel = newVel;
    
    // Emit movement signal
    this.emit('moved', newPos);
};

// Reset method
ball.reset = function() {
    this.pos = { x: 0, y: 0 };
    this.vel = { x: 1, y: 1 };
    this.emit('reset');
}

// Monitor property changes using natural API
ball.on("pos", function (value) {
    console.log("Position changed:", JSON.stringify(value));
});

ball.on("vel", function (value) {
    console.log("Velocity changed:", JSON.stringify(value));
});

ball.on("acc", function (value) {
    console.log("Acceleration changed:", JSON.stringify(value));
});

// Listen to custom signals
ball.on('moved', function(newPos) {
    console.log(`Ball moved to: (${newPos.x}, ${newPos.y})`);
});

ball.on('reset', function() {
    console.log('Ball was reset to initial position');
});

function main() {
    console.log("=== Ball Physics Simulation ===");
    
    // Access raw properties when needed
    console.log("Initial state:", JSON.stringify(ball.$.getProperties()));
    
    // Run simulation
    for (let i = 0; i < 5; i++) {
        console.log(`\nStep ${i + 1}:`);
        ball.move();
    }
    
    // Access final state through raw API
    console.log("\nFinal state:", JSON.stringify(ball.$.getProperties()));
    
    // Demonstrate reset
    console.log("\nResetting ball...");
    ball.reset();
    
    // Direct property access
    console.log("Position after reset:", JSON.stringify(ball.pos));
    console.log("Velocity after reset:", JSON.stringify(ball.vel));
}
```

## Vehicle Dashboard Example

This example demonstrates a more complex simulation with multiple interconnected services representing a vehicle dashboard system.

### Simulation Script

```js
const state = $createService("vehicle.State", {
    location: { x: 0, y: 0 },
    speed: 0,
    rpm: 0,
    fuelLevel: 50,
    fuelLevelWarning: false,
    temperature: 20,
    overheatWarning: false
});

const indicators = $createService("vehicle.Indicators", {
    checkEngine: false,
    oilPressure: false,
    battery: false,
    airbag: false,
    brake: false,
    seatbelt: false,
    tractionControl: false,
    highBeam: false
});

const commands = $createService("vehicle.Commands", {});

// Command methods using natural API
commands.turnOn = function () {
    const order = ['checkEngine', 'oilPressure', 'battery', 'brake', 'seatbelt', 'tractionControl', 'highBeam'];
    let index = 0;
    const interval = setInterval(function() {
        if (index < order.length) {
            const indicator = order[index];
            indicators[indicator] = true;
            console.log(`Turned on ${indicator}`);
            index++;
        } else {
            clearInterval(interval);
            commands.emit('allIndicatorsOn');
        }
    }, 200);
}

commands.turnOff = function () {
    // Turn off all indicators using direct property access
    indicators.checkEngine = false;
    indicators.oilPressure = false;
    indicators.battery = false;
    indicators.airbag = false;
    indicators.brake = false;
    indicators.seatbelt = false;
    indicators.tractionControl = false;
    indicators.highBeam = false;
    this.emit('allIndicatorsOff');
}

// Add method to state service for speed updates
state.accelerate = function(amount = 10) {
    this.speed += amount;
    this.rpm = Math.min(8000, this.speed * 100);
    
    // Update fuel consumption
    this.fuelLevel = Math.max(0, this.fuelLevel - amount * 0.01);
    this.fuelLevelWarning = this.fuelLevel < 10;
    
    // Update temperature
    this.temperature = Math.min(120, this.temperature + amount * 0.1);
    this.overheatWarning = this.temperature > 100;
}

function main() {
    // Set up event monitoring with natural API
    state.on('speed', function(speed) {
        console.log(`Speed: ${speed} km/h`);
    });
    
    state.on('fuelLevelWarning', function(warning) {
        if (warning) {
            console.log('⚠️  Low fuel warning!');
        }
    });
    
    state.on('overheatWarning', function(warning) {
        if (warning) {
            console.log('⚠️  Engine overheating!');
        }
    });
    
    commands.on('allIndicatorsOn', function() {
        console.log('All indicators checked');
    });
    
    // Monitor specific indicator
    indicators.on("checkEngine", function (value) {
        console.log("Check engine indicator:", value ? "ON" : "OFF");
    });
    
    // Run startup sequence
    commands.turnOn();
    
    // Simulate driving
    let drivingInterval = setInterval(function() {
        state.accelerate();
        if (state.speed >= 120 || state.fuelLevel <= 0) {
            clearInterval(drivingInterval);
            console.log('Stopping simulation');
            commands.turnOff();
        }
    }, 500);
}
```

## Key Features of the Natural API

The examples above demonstrate the key features of the new natural API:

1. **Direct Property Access**: Properties can be read and written directly using dot notation
2. **Automatic `this` Binding**: Methods automatically receive the service proxy as `this`
3. **Unified Event Handling**: The `on()` method handles both property changes and custom signals
4. **Signal Emission**: Use `this.emit()` to emit custom signals from within methods
5. **Raw API Access**: When needed, access the underlying service object via `service.$`

This natural API provides a more intuitive JavaScript development experience while maintaining full compatibility with the ObjectLink protocol.