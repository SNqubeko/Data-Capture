

const submitBtn = document.getElementById('submit-btn');
const userName = document.getElementById('name');
const UserEmailAddress = document.getElementById('email-address');
const fieldsStatus = document.getElementById('status')


submitBtn.addEventListener('click', ()=>{


    if(!(userName.value==="") && !(UserEmailAddress.value==="")){
        captureUserData()
        userName.value="";
        UserEmailAddress.value="";
        fieldsStatus.textContent = ''
    }else{
        
        fieldsStatus.textContent = 'Ensure all fields are filled'
    }   
 
})

async function captureUserData(){
   const name = userName.value;
   const emailAddress = UserEmailAddress.value;


   //jSon file

   const data = {name,emailAddress};

    
   const options={
    method:'POST',
    headers:{
    'Content-Type':'application/json'},
    body:JSON.stringify(data)
   }
   console.log(data)

   //receiving data from the server side

   const response =await fetch('/api', options);
   const json = await response.json();

   console.log(json)
}
