let container=document.getElementById('container');

fetch('http://localhost:4000/post',{
    method:'GET'
})
.then((res)=>res.json())
.then((responce)=>{
    console.log(responce);
    DisplayData(responce)
})
.catch((err)=>{
    console.log(err);
})




function DisplayData(data){
    if(data.length>0){
        data.map((item,index)=>{
            container.innerHTML +=`
            <div class="post card mb-3 p-3">
            <div class="card-header d-flex align-items-center gap-2 bg-transparent border-0 p-0 mb-2">
            <img src="">
            <div>
            <span class="fs-5 d-block fw-bold">Example user</span>
            <small class="small text-secondary">11/06/2024</small>
            </div>
            
            </div>
            </div>
    
    
            <div>
            <img src=${item.postImage} class="w-100  mainimage">
            <h1 class="fs-4">${item.postTitle}</h1>
            <p class="fs-6">${item.postDesc}</p>
            </div>
    
            <div class="card-footer bg-transparent border-0">
            <button class="btn btn-danger btn-sm" onclick="DeleteHandler('${item.id}')">Delete post</button>
             <a href="./update.html?id=${item.id}" class="btn btn-success btn-sm">edit post</a>
            </div>
    
    
    
            `
        })
    }
    else{
        container.innerHTML+=`
        <div class="border rounded p-3 text-center py-5 my-4">
        <h1 class="fs-1 text-secondary m">the posts not found</h1>
        <button><a href="./createPost.html">Create posts</a></button>

        </div>
        `

    }
}


function DeleteHandler(id){
    fetch(`http://localhost:4000/post/${id}`,{
        method:"DELETE"

    })
    .then((res)=>{
        alert('post removed')
    })
    .catch((err)=>{
        console.log(err);
    })



}