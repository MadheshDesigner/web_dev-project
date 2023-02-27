
// product_page....>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data => showInfoForListing(data));


function showInfoForListing(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
    }
}

function lowStock(){
    
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data => Iflowstock(data));


function Iflowstock(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        if(user.stock<=100){
            document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
        }
    }
}
}


function withoutLowstock(){
      
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data => IfHighstock(data));


function IfHighstock(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        if(user.stock>=100){
            document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
        }
    }
 }
}

const inputEl_1 = document.getElementById('input_1');
const inputEl_2 = document.getElementById('input_2');

function lowStockinput(){
    if(inputEl_2.checked==true){
        console.log('If conditon');
        document.getElementById('tableBody_1').innerHTML ="";
        
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data => showInfoForListing(data));


function showInfoForListing(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
    }
}
    }
    else{
        console.log('Else');
        document.getElementById('tableBody_1').innerHTML ="";
        withoutLowstock()
    }
}


// var date = new Date("Sun May 11,2014");
// var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
//                     .toISOString()
//                     .split("T")[0];

// console.log(dateString);

// const month =  [
//     "Jan", "Feb", "Mar",
//     "Apr", "May", "Jun",
//     "Jul", "Aug", "Sep",
//     "Oct", "Nov", "Dec"
// ];

// var temp = '14-Aug-2012'

// var dataList = temp.split('-');

// console.log(parseInt(dataList[1]));







function expiryDate(dd){
   
const month =  [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
];
var dataList = dd.split('-');
let mm =0;
 for(let item in month){
    if(dataList[1]==month[item]){
        mm = item;
    }
 }
  
 return new Date(parseInt(dataList[2]),mm,parseInt(dataList[0]))
}

console.log(expiryDate(temp));



function withoutExpirydate(){
      
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
    .then(response => response.json())
    .then(data => IfExpirydate(data));
    
    
    function IfExpirydate(data){
        for(let i=0; i< data.length; i++){
            let user=data[i];
            var todayDate = new Date();
            if(expiryDate(user.expiryDate)>=todayDate){
                document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
            }
        }
     }
    }








function expiryDateinput(){
    if(inputEl_1.checked==true){
        console.log('If conditon');
        document.getElementById('tableBody_1').innerHTML ="";
        
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
.then(response => response.json())
.then(data =>  expirydateListing(data));


function expirydateListing(data){
    for(let i=0; i< data.length; i++){
        let user=data[i];
        document.getElementById('tableBody_1').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td>${user.medicineName}</td><td  id='data_id2'>${user.medicineBrand}</td><td>${user.expiryDate}</td><td  id='data_id3'>${user.unitPrice}</td><td>${user.prescriptionRequired}</td><td  id='data_id4'>${user.stock}</td></tr>`;
    }
}
    }
    else{
        console.log('Else');
        document.getElementById('tableBody_1').innerHTML ="";
        withoutExpirydate();
    }
}


//  var todayDate = new Date();

