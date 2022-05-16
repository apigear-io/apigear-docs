# Qt C++ SDK Template

The Qt C++ template generates a CMake based SDK to develop QtQuick plugins or C++ libraries. Each API module is transformed into an own C++ library and wrapped in a QtQuick plugin. This allows you to use and test the library independent from the QtQuick technology.

The Qt C++ SDK also supports the use of the simulation backend. And the ApiGear analytics data center (experimental).

Following template feature switches are supported:

- Basic - Only creates the interface files for you
- Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explain in great detail how to build and use the code.

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
class AbstractCounter : public QObject {
    Q_OBJECT
public:
    AbstractCounter(QObject * parent=nullptr);
    virtual void setCount(int count) = 0;
    virtual int count() const = 0;
    virtual void increment() = 0;
Q_SIGNALS:
    void countChanged(int count);
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

A data structure is transformed to a Qt C++ gadget so it can be also be used later in QML.

```cpp
class Message
{
    Q_GADGET
    Q_PROPERTY(QString text READ text WRITE setText)

public:
    Message();
    void setText(const QString& text);
    QString text() const;

    bool operator==(const Message &other) const;
    bool operator!=(const Message &other) const;

private:
    QString m_text;
};

Q_DECLARE_METATYPE(Message)
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
class Direction : public QObject {
    Q_OBJECT
public:
    Direction(QObject *parent = nullptr)
        : QObject(parent)
        {}
    enum DirectionEnum {
        Up = 0,
        Down = 1,
        Left = 2,
        Right = 3,
    };
    Q_ENUM(DirectionEnum)

    static DirectionEnum toEnum(quint8 v, bool *ok);
};
```
