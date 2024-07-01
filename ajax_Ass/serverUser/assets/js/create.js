let url = document.getElementById('url')
let title = document.getElementById('title')
let desc = document.getElementById('desc')
let mid=document.getElementById('mid')
let arr = []

console.log("g")

function uploadData(e) {
  e.preventDefault();
  let obj = {
    postUrl: url.value,
    postTitle: title.value,
    postDesc:desc.value,
  }
  console.log(obj)
  fetch('http://localhost:4000/post', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj)
  })
    .then((res) =>res.json())
    .then((response) => {
      console.log('posted')
    })
    .catch((err) => {
    console.log(err)
  })
}