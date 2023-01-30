---
sidebar_position: 2
---

# C++ 14 SDK template

The C++ 14 code SDK generates C++ 14 conform interfaces to be implemented by the developers. If scaffolding is switched on it will also generate a full project with CMake, Conan and test support. The project will scale with new API modules.

Following template feature switches are supported:

- Basic - Only creates the interface files for you
- Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explains in great detail how to build and use the code.

# API

## Interfaces

An interface like this counter will be directly transformed to an abstract C++ class.

```yaml
interfaces:
  - name: Counter
    properties:
      - name: count
        type: int
    operations:
      - name: increment
```

The class will then later be used to be implemented by the customer.

```cpp
class CounterBase
{
public:
    CounterBase(){};
    virtual ~CounterBase(){};
// methods
    virtual void increment() = 0;

// property methods
    virtual void setCount(int count) = 0;
    virtual int count() const = 0;
};
```

## Data Structures

A data structure like this message which contains one field, called text is transformed into a C++ class with public fields.

```yaml
structs:
  - name: Message
    fields:
      - name: text
        type: string
```

A data structure is transformed to a Qt C++ class with public fields.

```cpp
class Message
{
public:
    Message();
    void setText(const std::string& text);
    std::string text() const;

    bool operator==(const Message &other) const;
    bool operator!=(const Message &other) const;

private:
    std::string m_text;
};
```

## Enumerations

A enumeration will be transformed to a standalone class with an enum embedded.

```yaml
enums:
  - name: Direction
    members:
      - name: Up
      - name: Down
      - name: Left
      - name: Right
```

This is transformed to

```cpp
class Direction {
public:
    Direction()
        {}
    enum DirectionEnum {
        Up = 0,
        Down = 1,
        Left = 2,
        Right = 3
    };

    static DirectionEnum toEnum(std::uint8_t v, bool *ok);
};
```
