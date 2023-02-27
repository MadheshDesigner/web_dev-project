const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');
const Btn = document.querySelector('button');

Btn.addEventListener('click',()=>{
   if(input1.value==input2.value){
    alert('Login Successful!')
    window.location.href='Order.html';
   }
   else{
    alert(`Please Enter Valid Credential ${input1.value} ${input2.value}`)
   }
})