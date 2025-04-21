const student = {
    fullName : 'likhita k',
    marks : 77.5,
    printMarks : function () {
        console.log('marks = ', this.marks);
    }
}

console.log(student.fullName);
console.log(student.printMarks);
student.printMarks();

// this refers to the current working block

// prototype itself is an object that is avaiable in any obj by default
// it contains default methods that can be used without assigning explicitily

const subjects = {
    subject1 : 'js',
}

student.__proto__= subjects; //adds the obj2 as a prototype of of obj 1 so that the props n methods in this obj can be used by the other obj
console.log(student);
console.log(student.subject1);
// simply prototype is a reference of an obj
// when obj and prototype has same methods, the method in obj will be applied.

// classes - a template for creating objects
// these objs will hv some state(vars) and some behaviours (funcs) in it.
class Car {
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("start");
    }
    stop () {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let myCar = new Car("Ferari", "300"); // creating an obj from class
console.log(myCar);
myCar.setBrand("BMW");
console.log(myCar); //myCar.start(), .stop(), .brand

// constructor() - new kw itself invokes a constructor 

// inheritance - passing down properties n methods from parent cls to child cls
class Parent {
    hello() {
        console.log("hello..");
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    hi() {
        super.hello(); //accessing a method from parent cls to child cls via super kw
        console.log("child func")
    }
} // Child Cls had all the props n methods existing in parent cls. that is thru inheritance.
let obj = new Child('dav');
console.log(obj);
obj.hello();

// if parent and child have same methods, the method in child cls will over ride the method in parent cls

// super kw - used to call the constructor of its parent cls to access the parents props and methods - super(args), super.parentMethod(args)

// whenever a child(derived) cls has to use this.arg in it, it should first invoke the constructor from its parents cls. this is done using super()
// it also conveys any info from the child to parent cls as an argument for the super method.

// ex - create a cls user with 2 properties name and email. it also has a method called viewData() that allows user to view website data

let DATA = 'data';
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(this.name, this.email, DATA);
    }
}

let student1 =new User("likhita", "likhi@co.in");
let student2 =new User("bennu", "ben@co.in");

student1.viewData();
student2.viewData();

// ex- create a new cls called admin which inherits from user. add a new method called editdata to admin that allows it to edit website data
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = 'updated data';
        console.log(this.name, this.email, DATA);
    }
}

let admin1 = new Admin("roshni", "roshni@co.in");
admin1.editData();

// error handling - try-catch - to handle unexpected error in the code to avoid the code to stop running when any error occurs
let a = 10;
let b = 20;
console.log("a+b: ", a+b);
// console.log("a+b: ", a+c); // there is an error. so for such unexpected errors try-catch is used to avoid errors during compilation.
try {
    console.log("a+b: ", a+c);
} catch (err) {
    console.log(err); //the error will be logged as a text msg instead of an error
}
console.log("a+b+b: ", a+b+b);

