fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
		.then(response => response.json())
		.then(data => showUser(data));


		function showUser(data){
			for(let i=0; i< data.length; i++){
				let user=data[i];
				document.getElementById('tableBody').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td><img src=${user.profilePic}/></td><td id='data_id2'>${user.fullName}</td><td>${user.dob}</td><td id='data_id3'>${user.gender}</td><td>${user.currentCity}</td><td id='data_id4'>${user.currentCountry}</td></tr>`;
			}
		}


const inputEl = document.getElementById('input1')

inputEl.addEventListener('keyup',(event)=>{
    if(event.key ==='Enter'){
        function search(argument) {
			let url = 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName='+argument;
		
		fetch(url)
		.then(response => response.json())
		.then(data => showSearchUser(data));


		function showSearchUser(data){
			document.getElementById('tableBody').innerHTML ="";
			for(let i=0; i< data.length; i++){
				let user=data[i];
				document.getElementById('tableBody').innerHTML +=`<tr><td>${user.id}</td> <td><img src=${user.profilePic}/></td><td>${user.fullName}</td><td>${user.dob}</td><td>${user.gender}</td><td>${user.currentCity}</td><td>${user.currentCountry}</td></tr>`;
			}
		  }
		}

		//--------------------------
      search(inputEl.value);
    }
})

const Btn = document.getElementById('Btn');
const tbody = document.getElementById('tableBody');

Btn.addEventListener('click',()=>{
   if(tbody!=''){
    tbody.innerHTML=''

    fetch("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
    .then(response => response.json())
    .then(data => showUser(data));


    function showUser(data){
        for(let i=0; i< data.length; i++){
            let user=data[i];
            document.getElementById('tableBody').innerHTML +=`<tr><td id='data_id'>${user.id}</td> <td><img src=${user.profilePic}/></td><td id='data_id2'>${user.fullName}</td><td>${user.dob}</td><td id='data_id3'>${user.gender}</td><td>${user.currentCity}</td><td id='data_id4'>${user.currentCountry}</td></tr>`;
        }
    }
   }
   
})



