var date = document.getElementById('date')
var accNum = document.getElementById('accNum')
var holderName = document.getElementById('holderName')
let branchName = document.getElementById('branchName')
let accType = document.getElementById('accType')
let amount = document.getElementById('amount')
let amountWords = document.getElementById('amountWords')
let depName = document.getElementById('depName')
let pan = document.getElementById('pan')
let mobileNum = document.getElementById('mobileNum')
let amountCount = document.getElementById('amountCount')
let depositContainer = document.getElementById('depositContainer')
let Thousand2 = document.getElementById('Thousand2')
let hundred5 = document.getElementById('hundred5')
var hundred=document.getElementById('hundred')

var hundred2=document.getElementById('hundred2')
var twenty=document.getElementById('twenty')
let fifty=document.getElementById('fifty')
let five=document.getElementById('five')
var ten=document.getElementById('ten')
var total=document.getElementById('total')
var allDepositList=[]
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem("allDeposits")) {
        allDepositList = JSON.parse(localStorage.getItem("allDeposits"))
    }
    else {
        allDepositList = []
    }
    displayDeposits()
})


function submitForm() {
    let allDetails = {
        depositDate: date.value,
        holderAccountNum: accNum.value,
        holderNameText: holderName.value,
        holderBranchName: branchName.value,
        holderAccountType: accType.value,
        amountDeposit: amount.value,
        amountDepositInWords: amountWords.value,
        holderDepName: depName.value,
        holderPan: pan.value,
        holderMobileNum: mobileNum.value,
        twentyRs: twenty.value,
        hundred2Rs: hundred2.value,
         hundredRs: hundred.value,
        fiftyRs: fifty.value,
        tenRs: ten.value,
        hundred5: hundred5.value,
        Thousand2: Thousand2.value,
        fiveRs: five.value,
        totalRs: total.value,
        // holderAmountCount:amountCount.value
    }
    console.log(allDetails)
    console.log(allDetails.fiveRs)
   
    allDepositList.push(allDetails)
    localStorage.setItem("allDeposits", JSON.stringify(allDepositList))
    window.location.href = './history.html'; //redirecting to allAccounts.html page
}

function displayDeposits() {
    if (allDepositList.length == 0) {
        depositContainer.innerHTML='<h1>no Amount had Deposited in YOur Account</h1>'
    }
    else {
       
            depositContainer.innerHTML = `
            <tr>
             <th>S.NO</th>
             <th>Deposit Date</th>
             <th>HolderName</th>
             <th>Total</th>
             <th>Branch Name</th>
            <th>Phone Number</th>
           <th>Action</th>
        </tr>
            `;
        allDepositList.map((item, index) => {
            depositContainer.innerHTML += `<tr style="font-size:20px">
            <td>${index+1}</td>
            <td>${item.depositDate}</td>
            <td>${item.holderNameText}</td>
            
            <td>Rs. ${item.totalRs}
            </td>
            <td> ${item.holderDepName}</td>
            <td>${item.holderMobileNum}</td>

            <td><button onclick="deleteData()" style="color:white;fw-bold, border:none;background:rgb(241, 63, 14);padding:6px 20px;border:none;border-radius:10px">Delete</button></td>
            
            </tr>`
           
        })
    }
    }


function deleteData(index) {
    allDepositList.splice(index, 1)
    localStorage.setItem("allDeposits", JSON.stringify(allDepositList))
    displayDeposits()
    }