---
title: "Examples"
description: "A temperature sensor tutorial using ApiGear and Raspberry Pi"
position: 99
category: "ObjectAPI"
version: 1.0
---

## Counter

```yml
objectapi: "1.0"
name: org.example
version: "1.0"
info:
  title: "Counter API"
  description: A counter module develope

interfaces:
  - name: Counter
    description: Counter interface to count up and down
    properties:
      - name: count
        type: int
    operations:
      - name: increment
      - name: decrement
```

## Tuner

```yaml
objectapi: "1.0"
module: entertainment.tuner
version: 1.0

interfaces:
  - name: Tuner
    description: A tuner service to manages tuner stations
    properties:
      - name: currentStation
        $ref: Station
        description: current selected station
      - name: stationList
        type: array
        $ref: Station
        description: list of current available stations
    operations:
      - name: nextStation
        description: sets current station to next station from list
      - name: previousStation
        description: sets current station to previous station from list
      - name: updateCurrentStation
        description: update current station
        params:
          - name: stationId
          - type: id

structs:
  - name: Station
    fields:
      - name: stationId
        type: id
        description: station id
      - name: name
        type: string
        description: station name
      - name: modified
        type: string
        format: date-time
        description: station last time modified

enums:
  - name: State
    description: State for tuner interface
    members:
      - name: None
        description: tuner not initialized
      - name: Loading
        description: tuner is loading
      - name: Ready
        description: tuner is ready and operational
      - name: Error
        description: tuner received an error
  - name: Waveband
    members:
      - name: FM
        description: FM waveband
      - name: AM
        description: AM waveband

flags:
  - name: Features
    members:
      - name: Mono
        description: audio supports mono
      - name: Stereo
        description: audio support stereo
```

## Weather Station

```yaml
interfaces:
  - name: WeatherStation
  - properties:
      - { name: temperature, type: float }
      - { name: lastError, $ref: Error }
  - operations:
      - { name: reset }
  - signals:
      - name: error
        params:
          - { name: error, $ref: Error }
```
