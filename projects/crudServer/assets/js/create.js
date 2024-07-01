

//select inpus
let image=document.getElementById('url');
let title=document.getElementById('title');
let desc=document.getElementById('desc');

const uploadPost=(e) =>{
    e.preventDefault();

    const newPost={
        postImage:image.value,
        postTitle:title.value,
        postDesc:desc.value
    }
    console.log(newPost);

    //uploading the new post
    fetch('http://localhost:4000/post',{
        method:'POST',
        header:{"Content-Type":"application/json"},

        body:JSON.stringify(newPost)
    })

    .then((responce)=>{
        alert("post upload")
    })
    .catch((error)=>{
        alert('error')
    })
}