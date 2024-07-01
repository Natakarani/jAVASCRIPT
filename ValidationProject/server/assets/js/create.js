//getting all data from form

let nameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let passwordInput = document.getElementById('password');


let allusers = [];//declaring one variable to store all database users

//here getting all database to array using fetch method
fetch('http://localhost:5000/users')
.then((res)=>res.json())
.then((responce)=>{
    console.log(responce);
    allusers = responce; //storing all responce array inside allusers array
    console.log("users = ", allusers);
})
.catch((err)=>{
    console.log(err);
})


const CreateAccount = (e) =>{
    e.preventDefault();

    const userData = {
        username:nameInput.value,
        email:emailInput.value,
        phonenumber:phoneInput.value,
        password:passwordInput.value 
    }

    console.log(userData);

    //checking is user email already exist or not in database
    let isExist = allusers.find((item)=> item.email === emailInput.value)

    console.log(isExist);

    if(isExist){
        alert("user Email already exist.")
    }else{
      fetch('http://localhost:5000/users', {
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(userData)
      })
      .then((res)=>{
        console.log(res);
        alert('account created')
      })
      .catch((err)=>{
        console.log(err);
      })
    }
}