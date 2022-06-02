# The big picture - Training Notes

## some benefits
 - script typed
 - tooling support

## tsc compilation commands
 - ``` tsc --target ES2015 --outDir folderName typescriptName.ts``` with target parameter can specify the ECM version to compile; outDir will generate compiled scripts in this directory
  - ```tsc --init``` to initialize a typescript projetc

## Topics
configuring typescript project
using typews and functions
clsses and interfaces
modules

## Questions
1. what means built-in types
2. what is type assertion? 
    ```
    (numberValue as number).toFixed(4);
    (<number>numberValue).toFixed(4);
    ```

## Union types
a variable that can have more than one possible type 
```let someValue: number | string```
to support null or undefined values strictly we can specify to the compiler with```--strictNullChecks``` which is going to make the compiler validate whther the varibles are with null values , for example this examples are going to fail the compiler:
```
let name: string = null;
let name: string | undefined = null;
let name: string | null = undefined;
```

To allow the variables having null or undefined those should be declared like this:
```
let name: string | null = null;
let name: string | undefined = undefined;
let name: string | null | null | undefined;
name = f():null | undefined | string;
```

## Custom types