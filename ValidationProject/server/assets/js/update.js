// // //retrive the url parameters using  URLSearchParams
// // const params=new URLSearchParams(window.location.search);
// // console.log(params);

// // //getting
// // const id=params.get('id')
// // console.log(id);



// // let usernameInput=document.getElementById('username');
// // let emailInput=document.getElementById('email');
// // let phonenumberInput=document.getElementById('phonenumber');
// // let passwordInput=document.getElementById('password')
// // //getting perticular data using id form database using fetch method


// // fetch(`http://localhost:4000/post/${id}`)
// // .then((res) => res.json())
// //         .then((responce) => {
// //             console.log(responce);
// //             //inserting all responce data to form inputs to update
// //             usernameInput.value = responce.username;
// //             emailInput.value = responce.email;
// //             phonenumberInput.value = responce.phonenumber;
// //             passwordInput.value = responce.password;
// //         })
// //         .catch((error) => {
// //             console.log(error);
// //         })


// // function UpdateHandler() {
// //     // e.preventDefault()
// //         const userData = {
// //             username: usernameInput.value,
// //             email:emailInput.value ,
// //             phonenumber: phonenumberInput.value,
// //             password:passwordInput.value,
// //         }
// //         console.log(userData);

// //         fetch(`http://localhost:4000/post/${id}`, {
// //             method: 'PATCH',
// //             headers: { "Content-type": "application/json" },
// //             body: JSON.stringify(userData)
// //         })
// //             .then((responce) => {
// //                 console.log(responce);
// //                 alert('Post updated');
// //                 window.location.href = "./index.js"
// //             })
// //             .catch((error) => {
// //                 console.log(error);
// //             })

// // }











// //retrive the url parameters using  URLSearchParams
// const params=new URLSearchParams(window.location.search);
// console.log(params);

// //getting
// const id=params.get('id')
// console.log(id);

// let usernameInput=document.getElementById('username');
// let emailInput=document.getElementById('email');
// let phonenumberInput=document.getElementById('phonenumber');
// let passwordInput=document.getElementById('password')
// // //getting perticular data using id form database using fetch method



// fetch(`http://localhost:4000/post/${id}`)
// .then((res)=>res.json())
// .then((responce)=>{
//     console.log(responce);
//     //inserting all responce data to form inputs to update
//     usernameInput.value = responce.username;
//             emailInput.value = responce.email;
//             phonenumberInput.value = responce.phonenumber;
//             passwordInput.value = responce.password;
// })
// .catch((error)=>{
//     console.log(error);
// })


// function UpdateHandler(){
//     const newdata={
//         username: usernameInput.value,
//                     email:emailInput.value ,
//                     phonenumber: phonenumberInput.value,
//                     password:passwordInput.value,
//     }
//     console.log(newdata);

//     fetch(`http://localhost:4000/post/${id}`,{
//         method:'PATCH',
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify(newdata)
//     })
//     .then((responce)=>{
//         console.log(responce);
//         alert('Post updated');
//         window.location.href="./index.html"
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// }




const params = new URLSearchParams(window.location.search);
console.log(params);

const id = params.get('id');
console.log(id);

let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');

fetch(`http://localhost:5000/users/${id}`)
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
        username.value = response.username;
        email.value = response.email;
        phone.value = response.phone;
        password.value = response.password;
    })
    .catch((error) => {
        console.log(error);
    });


function UpdateHandler() {
    const newdata = {
        username: username.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    };
    console.log(newdata);

    
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newdata)
    })
    .then((response) => {
        console.log(response);
        if (response) {
            
            alert('User updated successfully');
            window.location.href = "./index.js";
        } else {
            alert('Failed to update user');
        }
    })
    .catch((error) => {
        console.log(error);
    });
}