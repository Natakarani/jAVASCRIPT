const container = document.getElementById('container');

fetch('http://localhost:5000/users')
.then((res) => res.json())
.then((response) => {
    console.log(response);
    printData(response);
})
.catch((err) => {
    console.log(err);
});

function printData(data) {
    if (data.length === 0) {
        container.innerHTML = `
        <div class="card text-center shadow p-3 my-5">
            <h1 class="display-4">No User Found</h1>
            <a href="./create.html">Create Account</a>
        </div>
        `;
    } else {
        let content = '';
        data.forEach((item) => {
            content += `
            <div class="col-md-4">
                <div class="card p-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXiPLaGz8NbwGo1u6BlOyBfobypV5EQOf9Q&s" alt="${item.username}">
                    <ul class="list-group mt-3">
                        <li class="list-group-item"><b>Username: </b> ${item.username}</li>
                        <li class="list-group-item"><b>Email Address: </b> ${item.email}</li>
                        <li class="list-group-item"><b>Phone Number: </b> ${item.phone}</li>
                         <li class="list-group-item"><b>password: </b> ${item.password}</li>
                    </ul>
                    <div class="d-flex align-items-center gap-3 mt-3">
                        <button class="btn btn-danger w-100"onclick="DeleteHandler('${item.id}')">Delete</button>
                        <a href="./update.html?id=${item.id}" class="btn btn-success w-100">Edit</a>
                    </div>
                </div>
            </div>
            `;
        });
        container.innerHTML = content;
    }
}

function DeleteHandler(id){
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE"

    })
    .then((res)=>{
        alert('post removed')
    })
    .catch((err)=>{
        console.log(err);
    })



}



