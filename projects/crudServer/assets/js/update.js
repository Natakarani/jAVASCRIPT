//retrive the url parameters using  URLSearchParams
const params=new URLSearchParams(window.location.search);
console.log(params);

//getting
const id=params.get('id')
console.log(id);

let image=document.getElementById('url');
let title=document.getElementById('title');
let desc=document.getElementById('desc');

//getting perticular data using id form database using fetch method


fetch(`http://localhost:4000/post/${id}`)
.then((res)=>res.json())
.then((responce)=>{
    console.log(responce);
    //inserting all responce data to form inputs to update
    image.value=responce.postImage;
    title.value=responce.postTitle;
    desc.value=responce.PostDesc
})
.catch((error)=>{
    console.log(error);
})


function UpdateHandler(){
    const newdata={
        postImage:image.value,
        postTitle:title.value,
        PostDesc:desc.value
    }
    console.log(newdata);

    fetch(`http://localhost:4000/post/${id}`,{
        method:'PATCH',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newdata)
    })
    .then((responce)=>{
        console.log(responce);
        alert('Post updated');
        window.location.href="./index.html"
    })
    .catch((error)=>{
        console.log(error);
    })

}