---
title: Qt C++ SDK Blueprint
description: Tutorials for using ApiGear with different technologies
position: 402
category: Blueprints
version: 1.0
menuTitle: Qt SDK
features:
  - Qt C++ Library
  - Qt Quick Plugin
  - ApiGear Simulation Support
  - ApiGear Analytics Support
  - Blueprint feature switches
 
---

The Qt C++ template generates a CMake based SDK to develop QtQuick plugins or C++ libraries. Each API module is transformed into an own C++ library and wrapped in a QtQuick plugin. This allows you to use and test the library independent from the QtQuick technology.

The Qt C++ SDK also supports the use of the simulation backend. And the ApiGear analytics data center (experimental).

Following blueprint feature switches are supported:

* Basic - Only creates the interface files for you
* Scaffold - Creates a full project with reference implementation and build system support.

In the generated source code you will find a `README` which explain in great detail how to build and use the code.