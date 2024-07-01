
var a=12;//we can declare declare and reassign the value
var a=19;
const b=33;//cant declare or reassign the value 

let c=44;//cant declare again but reassign again
c=67;
var d=50;
document.write(`<p>a=${a}</p>`);
document.write(`<p>a=${b}</p>`);
document.write(`<p>a=${c}</p>`);

document.write(`<p>a=${d}</p><hr>`);

if(d>a){
    document.write(`<p>CONDITION IS TRUE</p>`)
    document.write(`<p>a=${a}</p>`);
document.write(`<p>a=${b}</p>`);
document.write(`<p>a=${c}</p>`);

document.write(`<p>a=${d}</p><hr>`);

var x=100;
let y=200;
const z=300;
document.write(`<p>x=${x}</p>`);
document.write(`<p>y=${y}</p>`);
document.write(`<p>z=${z}</p>`);
}
document.write(`<p>x=${x}</p><hr>`);
//document.write(`<p>y=${y}</p>`); throws error bcz we cant access let outside the block
//document.write(`<p>z=${z}</p>`);bcz we cant access const outside the block

var isAdmin=false;
document.write(`<p>isAdmin=${typeof(isAdmin)}</p>`)
document.write(`<p>isAdmin=${isAdmin}</p><hr>`)
  
var title="welcome to js";
document.write(`<p>isAdmin=${typeof(title)}</p>`)
document.write(`<p>isAdmin=${title}</p><hr>`)

var x=1355267;
document.write(`<p>isAdmin=${typeof(x)}</p>`)
document.write(`<p>isAdmin=${x}</p><hr>`)

var yy=16.980;
document.write(`<p>isAdmin=${typeof(yy)}</p>`)
document.write(`<p>isAdmin=${yy}</p>`)

//Array
var colors=["orange","blue","red","green",9,9.5,true];
document.write(`<p>colors= ${typeof(colors)}</p>`)
document.write(`<p>colors= ${colors}</p>`)
//object
var user={
    name:"maneesha",
    mobile:8779496879,
    email:'nata@gamil.com'
};
document.write(`<p>user=${typeof(user)}</p>`);
document.write(`<p>user=${user}</p><hr>`);
console.table(user);

//function functionName(){}=funtion
function defaultFun(){
    let test="this is default function";
    document.write(`<p>${test}</p><hr>`)
}
defaultFun();

function parameterFun(name,email){
    let test="this is parameter function";
    document.write(`<p>${name}</p><hr>`);
    document.write(`<p>${email}</p><hr>`)

}
parameterFun("javascript","javascript.gail.com");

 