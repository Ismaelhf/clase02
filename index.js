// clase 2 -objectos
const objectoliteral ={};
const objectoConstructor = new Object();

const employee = {
    name: 'DAniel',
    surname: 'soto',
    career:'developer',
    greet:function(){
        return `Hi, my name is ${this.name}`;

    },
    isStudent: false,

}
console.log('employee:',employee.name);

delete employee.name;
console.log('employee:',employee.name);