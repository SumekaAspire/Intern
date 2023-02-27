let z=null,x;
console.log(typeof(z));
if(z == x){
    console.log('true');//true -checks values
}
if(z === x){
    console.log('eetrue');//checks datatypes
}
else{
    console.log("dbjhs");
}


//object

const value={};
console.log(value);//{}

const val={
    name: ['sumi','akil'],
    dep: 'IT',
    age: 20,
    bio: function(){
        console.log(`${this.name[0]} ${this.name[1]} is department of ${this.dep} .`);
    },
    intro: function(){
        console.log(`${this.name[0]} - welcome`);
    },
    subject:{
        sub1: 'DSA',
        sub2: 'c'
    }
};
console.log(val);
//dot notation
console.log(val.name);
console.log(val.name[2]);
console.log(val.name[0]);
console.log(val.age);
console.log(val.dep);
console.log(val.bio());
console.log(val.intro());
console.log(val.subject.sub2);

//bracket notation
console.log(val["age"]);
console.log(val['name'][1]);
console.log(val['subject']['sub1']);

val.age = 23;
val.name[0]= 'sumeka';
val.subject.sub1='c++';
console.log(`---------------------`);
//adding new property
val.year=2019;
console.log(val);

val['year']=2022;
console.log(val);
console.log(val['year']);

let key= 'age';
val[key]=25;//updated
val.key=20;//val.age is not updated
console.log(val);


//anotherway to create object
let item = new Object();
item .name='akil'
item .age=16
console.log(item);

let user ={
    name:'sumeka',
    age:20,
    login(){
        console.log("Hi",this.name);
        console.log("you are logged in");
    },
    logout(){
        console.log("you are logged out");
    }
}
user.login();
//class is a  template of properties and methods
//static  - common variables/mathods for class , accessed with classname to invoke

class User{ //base clas or parent class or super class
    static noOfUsers = 0;
    constructor(name,age){
        //instance variables
        this.name=name;
        this.age=age;
        User.noOfUsers++;

    }

    login(){
        console.log("Hi",this.name);
        console.log("you are logged in");
    }
    logout(){
        console.log("you are logged out");
    }
    static displayTotalUser(){
        console.log("total number of users",User.noOfUsers);
    }
}
let user1 = new User('sumi',20);
let user2 = new User('ram',22);
console.log(user1);
console.log(user2);
console.log(user1.age);
// console.log("number of users",User.noOfUsers);
User.displayTotalUser();
user1.login();
user2.logout();

//inheritance
class Userinfo extends User{//derived class or child class or sub class
   constructor(name,age){
    super(name,age)
   
   }
    message(){
        console.log('Details of : ',this.name)
    }

    //overriding - change the defining
    login(){
        console.log("Hi",this.name);
        console.log("THank you");
        return this
    }
}
let userinfo = new Userinfo('sam');
userinfo.message()
userinfo.login()
// user1.message()

//method chaining
userinfo.login().message()

//encapsulation

class Student{
    constructor(){
        let name,age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name= name;
    }
    getage(){
        return this.age;
    }

    setage(age){
        this.age= age;
    }

}

let stu = new Student();
stu.setName('sumi');
stu.setage(20);
console.log(stu.getName(),stu.getage());
