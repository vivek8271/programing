// call method

// const person={
//   method: function(message){
//     return this.name + +" " +message;
//   }
// }

// const person1={
//   name :"vivek",
//   age:20
// }

// const callFun = person.method.call(person1, "hello")
// console.log(callFun)


        // apply method

// const person={
//   method: function(message){
//     return this.name +" " +message[1];
//   }
// }

// const person1={
//   name :"vivek",
//   age:20
// }

// const callFun = person.method.apply(person1, ["hello", "how are you?", "good morning"])
// console.log(callFun)


      // bind method
      
// const person={
//   method: function(message){
//     return message+" " +this.name;
//   }
// }

// const person1={
//   name :"vivek",
//   age:20
// }
// const person2={
//   name :"sachin",
//   age:22
// }

// const callFun = person.method.bind(person1, "hello")
// console.log(callFun())


// function multiply(a, b) {
//   return a * b;
// }

// const double = multiply.bind(3, 2);
// console.log(double(4));

