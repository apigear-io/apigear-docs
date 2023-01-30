---
sidebar_position: 5
---

# API Examples

## Counter

The typical counter example to increment and decrement a count value.

```yml
schema: apigear.module/1.0
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

## Radio Tuner

A radio tuner with a current station and a station list. It can operate on different wavebands.

```yaml
schema: apigear.module/1.0
module: entertainment.tuner
version: 1.0

interfaces:
  - name: Tuner
    description: A tuner service to manages tuner stations
    properties:
      - name: currentStation
        type: Station
        description: current selected station
      - name: stationList
        type: Station[]
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
```

## Weather Station

The weather station uses a more compact YAML format to display the current temperature.

```yaml
schema: apigear.module/1.0
module: sensors.weatherstation
version: 2.5

interfaces:
  - name: WeatherStation
  - properties:
      - { name: temperature, type: float }
      - { name: lastError, type: Error }
  - operations:
      - { name: reset }
  - signals:
      - name: error
        params:
          - { name: error, type: Error }

structs:
  - name: Error
    fields:
      - name: msg
        type: string
```
