
function greeter(name = 'Anonimous', date: Date = new Date()): string {
    return `Hello ${name} from TypeScript on ${date.toDateString()}`;
}

document.getElementById('results')!.innerHTML = greeter('Tsvetomir', new Date("2000-10-31T01:30:00.000-05:00"));

//type Guard
// const elem = document.getElementById('results');
// if(elem != null) {
//     elem.innerHTML = greeter('Tsvetomir');
// }

function printId(id: number | string) {
    if(typeof id === "string"){
    console.log("Your ID is: " + id.toUpperCase());
} else {
  console.log("Your ID is: " + ++id);
}
}

  printId(33)
  printId('abcd1123')

  function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }

  welcomePeople(['mitko','ivan','pesho'])

  function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
  }

  logValue(new Date("2000-10-31T01:30:00.000-05:00"))
  logValue('Tsvetomir')

  type Fish = {swim: () => void};
  type Bird = {fly: () => void};

  function move(animal: Fish | Bird){
    if ("swim" in animal){
        return animal.swim();
    }
    return animal.fly();
  }

  let x = Math.random() < 0.5 ? 10: "hello world";
  x=1;
  console.log(1);
  x = 'goodbye!';
  console.log(x);

  function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !==undefined;
  }

  // Both calls to 'swim' and 'fly' are now okay.
  function getSmallPet() {
    return Math.random() < 0.5 ? {swim() {return}} : {fly() {return}} as Bird
  }
const pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 5 });

  interface Square {
    kind: "square";
    sideLength: number;
  }
  interface Circle {
    kind: "circle" ;
    radius: number;
  }

  type Shape = Circle | Square;

  function getArea(shape: Shape){
    if (shape.kind=== "circle"){
    return Math.PI * shape.radius **2;
}  
return shape.sideLength **2;
}