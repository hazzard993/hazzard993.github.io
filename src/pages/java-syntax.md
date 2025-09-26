---
layout: layout.html
title: Java Syntax
---

# Java Syntax

Some terminology to help navigate around Java syntax.

For junior devs and up!

## Hello World

A common hello world program consists of:

```java
class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

This page will attempt to teach you Java with just 3 components that you already
see in this program above:

- [Class Header](#class-header)
- [Method Signature](#method-signature)
- [Statement](#statement)

Click through them, and go through the [practice run](#practice-run).

Then, we go to [the gauntlet](#the-gauntlet) where we drill code into your head!

&nbsp;

### Class Header

Contains the class name, used at the beginning of a class.

```diff
+ class Main {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
```

```
class Main
class Foo
class Foo extends Bar
class Foo implements FooBar
class Foo extends Bar implements FooBar
class Foo extends Bar implements FooBar, FooBaz
```

> Also called a class signature, a class declaration, or a class definition.

Written in _PascalCase_, matches the filename, and is only defined once per
file.

| [Back to top](#java-syntax) |
| --------------------------- |

### Method Signature

Contains the method name, used at the beginning of a method.

```diff
  class Main {
+   public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
```

```
public static void main(String[] args)    // public access
private static void main(String[] args)   // private access
protected static void main(String[] args) // protected access
public static void main(String[] args)    // static method
public void main(String[] args)           // method
```

> Also called a method declaration, a method definition, or a method header.

Written in _camelCase_, can be defined more than once.

| [Back to top](#java-syntax) |
| --------------------------- |

### Statement

Statements are one of many things. But they can only be inside of code blocks.

This one is a call expression because it uses `()` to call/invoke something.

Statements do things! Can't do much without them.

```diff
  class Main {
    public static void main(String[] args) {
+     System.out.println("Hello World!");
    }
  }
```

```
System.out.println("Hello World!");
System.out.printf("Hello %s!", "World");
System.out.flush();
```

This is absolutely not exhaustive, this is only one kind of statement.

| [Back to top](#java-syntax) |
| --------------------------- |

&nbsp;

## Practice run

Change class name from "Main" to "Foo" in class header.

```diff
- class Main {
+ class Foo {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
```

&nbsp;

Extend "Main" with "Foo".

```diff
- class Main {
+ class Main extends Foo {
    public static void main(String[] args) {
      System.out.println("Hello World!");
    }
  }
```

&nbsp;

Change method from "main" to "foobar".

```diff
  class Main {
-   public static void main(String[] args) {
+   public static void foobar(String[] args) {
      System.out.println("Hello World!");
    }
  }
```

&nbsp;

Change println call to just print "Hello!" instead of "Hello World!".

```diff
  class Main {
    public static void main(String[] args) {
-     System.out.println("Hello World!");
+     System.out.println("Hello!");
    }
  }
```

| [Back to top](#java-syntax) |
| --------------------------- |

&nbsp;

## The Gauntlet

This is a bunch of code examples you can follow along to.

So, get yourself ready.

```java
class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}
```

Compiling and running this? If so, good!

You can swap the code below with any of the samples below (removing the + and -
from the start of the lines of course).

Read the message, review the code, extra points for playing with the code
yourself.

&nbsp;

### Numbers and Iteration

Declare variable "number". An "int" type with an initial value of 0.

```diff
  class Main {
    public static void main(String[] args) {
+     int number = 0;
    }
  }
```

&nbsp;

Print variable "number" to the console.

```diff
  class Main {
    public static void main(String[] args) {
      int number = 0;
+     System.out.println(number);
    }
  }
```

&nbsp;

Increment variable "number" by 1 before printing.

```diff
  class Main {
    public static void main(String[] args) {
      int number = 0;
+     number += 1;
      System.out.println(number);
    }
  }
```

&nbsp;

Change plus equals to plus plus to increment variable "number" by 1.

```diff
  class Main {
    public static void main(String[] args) {
      int number = 0;
-     number += 1;
+     number++;
      System.out.println(number);
    }
  }
```

&nbsp;

Print numbers 0 to 19 using a while loop.

```diff
  class Main {
    public static void main(String[] args) {
      int number = 0;
+     while (number < 20) {
+       System.out.println(number);
+       number++;
+     }
-     System.out.println(number);
    }
  }
```

&nbsp;

Let's review. We have 4 statements in our method.

```diff
  class Main {
    public static void main(String[] args) {
+     int number = 0;
+     while (number < 20) {
+       System.out.println(number);
+       number++;
      }
    }
  }
```

And 2 of those statements are inside our "while" loop.

- `int number = 0;` is a variable declaration statement
- `while (number < 20) {` is a while statement
- `System.out.println(number);` is a call expression statement
- `number++;` is a unary expression statement
