# Interface Definition Language


> An interface description language or interface definition language (IDL),
> is a specification language used to describe a software component's
> application programming interface (API). IDLs describe an interface
> in a language-independent way, enabling communication between software
> components that do not share one language, for example, between those
> written in C++ and those written in Java.
>
> Source: https://en.wikipedia.org/wiki/Interface_description_language


APIGear is an attempt to establish one interface description language with an easy to use code generator framework. The hope is that many projects can agree on this interface language and many interesting generators will be created and we all can learn from how other projects generate code from the same IDL.

## The IDL

The IDL uses common API concept such as modules, interfaces, properties, structs and enums/flags. Additionally it knows about arrays. An array can be of primitive or complex types.

The data types provided of APIGear can be divided into primitive and complex types:

Primitive Types

* Boolean: A boolean value e.g. true or false
* Integer: A decimal number e.g. 1, 2, 3
* Floating Point: a floating point number e.g. 1.234
* String: text e.g. like “Hello World”

Complex Types

* Arrays : e.g. a list of values e.g. [Int]
* Interface: An object containing state properties and operations as also signals
* Struct: A data object
* Enum/Flag: A enumerated list of values

## Why another IDL

Many IDLs are already in existence. Most of them are bound to a certain technology or library or are limited for a specific use. Only a few IDLs exist which are independent from a technology. From these few which are known to the author none satisfied the requirement from the author to be compatible with a service description and many are not easy to use. Also the IDL should be easy to install and be extendable. The unique mix of technologies used in APIGear allows it to provide a solid stable IDL with a powerful generation framework.

## Defining APIs

There are many opinions how to define APIs and what the best way is. The idea of APIGear is that many projects find it useful and use the same IDL. Consequently, there will be a large set of generators and finally APIs can be compared and unified also if they will be used with different technologies.

Even inside one technology there are often discussions about how an interface shall be coded. APIGear allows the different parties to create their own generators based on the same API. Ideally at the end the knowledge how an interface shall be coded will reside in the provided generator.

## Large Projects

In larger projects there is the need to make a large set of operating services available to QML. It is less about defining new visual items in C++, more about creating an abstraction of a service and make it available to the HMI developer inside QML.

This can be a challenge when you create many of these plugins and in the middle of the project you figure out that you have issues with your current design or if the customer in the next project wants to use a different HMI technology. All the knowledge is inside these plugins.

With APIGear these companies can be certain that APIGear does not lock them into the HMI technology and smaller design issues can be fixed by fixing the generator.

## Remote Services

Some projects use network communication to communicate from the HMI to the services, which might run on a different process or even a networked device. APIGear was not designed for remote services as it does not define any storage types (e.g. int32, int16, int64), it only knows an int and does not define how large the int shall be. For this APIGear needs to rely on the author of the generators to have a defined protocol to exchange data.

## Complex APIs

APIGear is purposely designed to have limited features. The goal is to make APIGear easy to use with an easy to remember syntax so that you don’t need to be an expert to write interface files.

APIGear does not support unions or structs that extend other structs. If you look for these features, APIGear is probably the wrong choice.

## Limitations

Like other code generation tools, APIGear is limited by how much information you can place inside your interface files. In excessive cases code generation might not make sense and hence APIGear will also not help.

APIGear allows you to use annotations `@` which can add meta information to the interface files. But the generator needs to be designed to understand this meta information. Only the structure of these annotations are defined not the information they carry. Annotations might help to add information to an interface document to better control the code generation process.

