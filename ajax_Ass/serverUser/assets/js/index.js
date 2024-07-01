let mid = document.getElementById('mid')


var a=[]
fetch('http://localhost:4000/post')
    .then((res) => res.json())
    .then((response) => {
        a = response;
        console.log(a)
        a.map((item, index) => {
            mid.innerHTML += `
            <img src=${item.postUrl} style="width:50px">
            <p>${item.postTitle}</p>
            <p>${item.postDesc}</p>
            <button>edit</button>
            <button>delete</button>`
                
                
        })
      
    })
    .catch((err) => console.log(err))




    // function DeleteHandler(id){
    //     fetch(`http://localhost:4000/post/${id}`,{
    //         method:"DELETE"
    
    //     })
    //     .then((res)=>{
    //         alert('post removed')
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    
    
    
    // }
