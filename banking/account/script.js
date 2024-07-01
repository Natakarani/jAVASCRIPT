var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');

//old address details
var old_address1 = document.getElementById('o_add1');
var old_address2 = document.getElementById('o_add2');
var old_city = document.getElementById('o_city');
var old_region = document.getElementById('o_region');
var old_pin = document.getElementById('o_pin');
var old_country = document.getElementById('o_country');

//new address details
var new_address1 = document.getElementById('n_add1');
var new_address2 = document.getElementById('n_add2');
var new_city = document.getElementById('n_city');
var new_region = document.getElementById('n_region');
var new_pin = document.getElementById('n_pin');
var new_country = document.getElementById('n_country');
var date = document.getElementById('date');

var container = document.getElementById('allusersTables');

var allAccounts = [];

document.addEventListener('DOMContentLoaded', function(){
   if(localStorage.getItem('AllBankAccounts')){ //checking the key is present in local stoarge or not
    allAccounts = JSON.parse(localStorage.getItem('AllBankAccounts'))
    console.log(allAccounts);
   }else{
    allAccounts = [];
   }


   displayAllUsersinTable();
})


function createAccount(){
    var newHolder = {
        holderFirstname:firstname.value,
        holderLastname:lastname.value,
        holderEmail:email.value,
        holderOldAddress1:old_address1.value,
        holderOldAddress2:old_address2.value,
        holderOldCity:old_city.value,
        holderOldregion:old_region.value,
        holderOldPin:old_pin.value,
        holderOldCountry:old_country.value,
        holderNewAddress1:new_address1.value,
        holderNewAddress2:new_address2.value,
        holderNewCity:new_city.value,
        holderNewregion:new_region.value,
        holderNewPin:new_pin.value,
        holderNewCountry:new_country.value,
        HolderAccountDate:date.value
    }
    allAccounts.push(newHolder);
    console.log(allAccounts);

    localStorage.setItem('AllBankAccounts', JSON.stringify(allAccounts))
    alert('account created')
    window.location.href = './allAccounts.html'; //redirecting to allAccounts.html page
}



function displayAllUsersinTable(){
    if(allAccounts.length ==0){
        container.innerHTML = `
            <div class="p-3 p-md-5 text-center">
                <h1 class="text-center display-3 mb-4 text-muted">No Holders Found</h1>
                <a href="./create.html" class="main-btn" style="text-decoration:none">Create Your First Account</a>
            </div>
        `
    }else{
        container.innerHTML = `
        <tr>
        <th>Si No</th>
        <th>username</th>
        <th>Email</th>
        <th>Country</th>
        <th>City</th>
        <th>Region</th>
        <th>Pincode</th>
        <th>Created At</th>
        <th>Action</th>
    </tr>
        `;
        allAccounts.map((item, index)=>{
            container.innerHTML += `
            <tr>
            <td>${index+1}</td>
            <td>${item.holderFirstname} ${item.holderLastname}</td>
            <td>${item.holderEmail}</td>
            <td>${item.holderNewCountry}</td>
            <td>${item.holderNewCity}</td>
            <td>${item.holderNewregion}</td>
            <td>${item.holderNewPin}</td>
            <td>${item.HolderAccountDate}</td>
            <td><button class="main-btn" onclick =deletehandler(${index}) >Delete</button></td>
        </tr>
            ` 
        })
    }
}


function deletehandler(index){
    allAccounts.splice(index, 1);
    localStorage.setItem('AllBankAccounts', JSON.stringify(allAccounts));
    displayAllUsersinTable();
}