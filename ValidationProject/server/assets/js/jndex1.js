// const container = document.getElementById('container');

// fetch('http://localhost:4000/users')
// .then((res)=>res.json())
// .then((responce)=>{
//     console.log(responce);
//     PrintData(responce)
// })
// .catch((err)=>{
//     console.log(err);
// })



// function PrintData(data){
//     if(data.length == 0){
//         container.innerHTML = `
//         <div class="card text-center shadow p-3 my-5">
//             <h1 class="display-4">No User Found</h1>
//             <a href="./create.html">Create Account</a>
//         </div>
//         `
//     }else{
//         data.map((item, index)=>{
//             container.innerHTML +=`
//         <div class="col-md-4">
//             <div class="card p-2">
//                 <img style="width:150px;height:150px;border-radius:100px;margin:auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXiPLaGz8NbwGo1u6BlOyBfobypV5EQOf9Q&s" alt=${item.username}>
//                 <ul class="list-group mt-3">
//                 <li class="list-group-item"><b>username: </b> ${item.username}</li>
//                 <li class="list-group-item"><b>Email address: </b> ${item.email}</li>
//                 <li class="list-group-item"><b>Phone number: </b> ${item.phonenumber}</li>
//                 </ul>

//                 <div class="d-flex align-items-center gap-3 mt-3">
//                 <button class="btn btn-danger w-100" onclick="deleteItem('${item.id}')">Delete</button>
//                 <a href="./update.html?id=${item.id}" class="btn btn-success w-100">Edit</a>
//                 </div>
//             </div>
//         </div>
//         `
//         })
//     }
// }


// function deleteItem(id) {
//     fetch((`http://localhost:4000/users/${id}`), {
//         method:"DELETE"
//     })
//         .then((res) => res.json())
//         .then((response) =>response)
//         .catch((err) => {
//         console.log(err)
//     })
    
// }










<!--indexedDB.html->
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg  bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><h1 class="fs-4 text-white">User Data</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white fs-4" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form class="d-flex">
              <a href="./create.html" class="btn btn-light" >create User</a>
            </form>
          </div>
        </div>
      </nav>


    <div class="container">
        <h1 class="display-3 text-success text-center">All Users</h1>
    
            <div class="row" id="container">

            </div>
     
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="./assets/js/index.js"></script>
</body>
</html> -->

