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


class valu{

    
    6(name){
        this.name=name;
    }
    intro(){
        console.log(`My name is ${this.name}`);
    }

}

const samp= new valu('vinu');
samp.intro();