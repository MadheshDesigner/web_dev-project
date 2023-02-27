
fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
    .then(response => response.json())
    .then(data => showOrders(data));

function showOrders(data) {
    document.getElementById('tableBody').innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let user = data[i];
        document.getElementById('tableBody').innerHTML += `<tr className='tr_row'><td id='id_1'>${user.id}</td> <td>${user.customerName}</td><td>${user.orderDate}</td><td>${user.orderTime}</td><td id='amount'>${user.amount}</td><td>${user.orderStatus}</td></tr>`;
    }
}

function func1(m){
  console.log( document.getElementById(m).checked);
   if( document.getElementById(m).checked){
    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
		.then(response => response.json())
		.then(data => ifNewOnly(data));
    function ifNewOnly(data){
       
        for(let i=0; i< data.length; i++){
            let user=data[i];
            if(user.orderStatus ==="New"){
                document.getElementById('tableBody').innerHTML +=`<tr><td>${user.id}</td> <td>${user.customerName}</td><td>${user.orderDate}</td><td>${user.orderTime}</td><td>${user.amount}</td><td>${user.orderStatus}</td></tr>`;
            }
                
        }
    }
   }
}


function func2(m){
    console.log( document.getElementById(m).checked);
     if( document.getElementById(m).checked){
      fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
          .then(response => response.json())
          .then(data => ifPackedOnly(data));
          function ifPackedOnly(data){
			
			for(let i=0; i< data.length; i++){
				let user=data[i];
				if(user.orderStatus === "Packed"){
					document.getElementById('tableBody').innerHTML +=`<tr><td>${user.id}</td> <td>${user.customerName}</td><td>${user.orderDate}</td><td>${user.orderTime}</td><td>${user.amount}</td><td>${user.orderStatus}</td></tr>`;
				}
					
			}
		}
     }
  }

  
function func3(m){
    console.log( document.getElementById(m).checked);
     if( document.getElementById(m).checked){
      fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
          .then(response => response.json())
          .then(data => ifDeliveredOnly(data));
          function ifDeliveredOnly(data){
			
			for(let i=0; i< data.length; i++){
				let user=data[i];
				if(user.orderStatus ==="Delivered"){
					document.getElementById('tableBody').innerHTML +=`<tr><td>${user.id}</td> <td>${user.customerName}</td><td>${user.orderDate}</td><td>${user.orderTime}</td><td>${user.amount}</td><td>${user.orderStatus}</td></tr>`;
				}	
			}
		}
     }
  }

   
function func4(m){
    console.log( document.getElementById(m).checked);
     if( document.getElementById(m).checked){
      fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
          .then(response => response.json())
          .then(data => ifInTransitOnly(data));
          function ifInTransitOnly(data){
			for(let i=0; i< data.length; i++){
				let user=data[i];
				if(user.orderStatus ==="InTransit"){
					document.getElementById('tableBody').innerHTML +=`<tr><td>${user.id}</td> <td>${user.customerName}</td><td>${user.orderDate}</td><td>${user.orderTime}</td><td>${user.amount}</td><td>${user.orderStatus}</td></tr>`;
				}
					
			}
		}
     }
  }

  

const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');
const input3 = document.getElementById('input_3');
const input4 = document.getElementById('input_4');
console.log(input1,input2,input3,input4);

function input_func(){
    console.log('ckeck');
  if(input1.checked==true){
    document.getElementById('tableBody').innerHTML ="";
    func1('input_1');
    func2('input_2')
    func3('input_3')
    func4('input_4')
    
  }
  else{
    document.getElementById('tableBody').innerHTML ="";
    func2('input_2')
    func3('input_3')
    func4('input_4')
  }
  
}

function input_func2(){
    console.log('ckeck');
    if(input2.checked==true){
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1');
      func2('input_2')
      func3('input_4')
      func4('input_3')
      
    }
    else{
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1')
      func3('input_4')
      func4('input_3')
    }
}


function input_func3(){
    console.log('ckeck');
    if(input3.checked==true){
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1');
      func2('input_2')
      func3('input_4')
      func4('input_3')
      
    }
    else{
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1')
      func2('input_2')
     func3('input_4')
    }
}


function input_func4(){
    console.log('ckeck');
    if(input4.checked==true){
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1');
      func2('input_2')
      func3('input_4')
      func4('input_3')
      
    }
    else{
      document.getElementById('tableBody').innerHTML ="";
      func1('input_1')
      func2('input_2')
      func4('input_3')
    }
}






//





