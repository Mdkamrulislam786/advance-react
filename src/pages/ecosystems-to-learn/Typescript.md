### Typescript

Install: npm install -g typescript  
Typescript is a superset of Javscript which is used to define types of your JS code. It compiles your TS code to JS.

1. Catches error in developemnt
2. Only active during development.Runs in development only not in browser or in production. Has no efects on how our code gets executed by Browser or Node
3. Serves as documentation. Uses type anotation to analyze our code.
4. Dosent provide any performance issue

Type: easy way to differ to the diff properties + functions that a value has. TS knows what properties + functions that a value has thats why you get auto complete/suggesstions.

Type annotation: code we add to tell typescript what type of value a variable will refer to. We developer will tell the type to script. Use it when a var has a type that cant be inferenced, in function paramas, when var is declared only, if any var or func return type any
Type inference: typescript figures out what type of value a var refres to. Typescript will use inference if the declaration and initialization are on the same line.

Remember: Type annotations never change the runtime behavior of your program.

#### Type annotations for functions

Always annotate arguments , the returned value gets type infered most of the time. Return type void is infered if nothing is returned or u dont know what it returns, but always annotate params and return type. use return type void when u expect a function to not return anything or return undefined/null, use type never when u exepect a function to not run fully, like in the middle of the function it throws an error,

```
const profile ={
    name : 'kamrul',
    age: 23
}
const {age}: {age:number} = profile
//we use type anotation for destructuring like this
```

<b>Generic functions</b>

generics are used when we want to describe a correspondence between two values.Remember, generics are all about relating two or more values with the same type!
We do this by declaring a type parameter in the function signature, when we this more specific types come out:

```
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
```

Another example:

```
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

<b>constraints</b>
<Type extends { length: number }> means the arguments passed to the func must have a .length property

```
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);
```

### Arrays

```
const names: string[] = ['kamrul', 'wali', 'abbas']
const name: string[][] = [ ['strins']]
//multiple type is an array
const arr : (Date } string)[] = [new Date(), 'kamrul']
```

use type annotaion here if we dont declare the shape of array upfront

### Tuples

Array like structure but very specific in order and type. Example

```
type Drink = [string, boolen, number] //new type created
const drink: Drink = ['monster', true, 40]
drink[0] = 12 //error cauase a [0] point we've a string

//Example2
var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
var employee: [number, string] = [1, "Steve"];

```

### Interfaces

Creates a new type that describes the properties( names and values) of a objects.

```
interface IPerson {
   firstName:string,
   lastName:string,
   sayHi: ()=>string,
  //equvalent sayHi() : string
}

var customer:IPerson = {
   firstName:"Tom",
   lastName:"Hanks",
   sayHi: ():string =>{return "Hi there"}
}
```

### Basic types

```
let num:number = 10;
let name:string = 'kams'
let bool : boolean = true
let arr: string[] = ['kam', 'rul']
let arr: Array<string> = ['kam', 'rul']
let arr : any[] = ['kam', true, 40]
let multiArr: Array<string | number | boolean> = ['kam', true, 40]
let tuple : [string, boolean, number] =  ['kam', true, 40]

```
