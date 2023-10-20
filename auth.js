function login(){
    // validador email   
   
   ///<img src="./img/login.png" class="" alt="Responsive image" width="1000" height="935">
  const email = document.getElementById('floatingEmail')
   emailValue = email.value;
   const password= document.getElementById('floatingPassword')
   passwordValue = password.value; 

   
   
   if(emailValue==='root'){
    if(passwordValue==='123'){
      redirectHome()
   }else{
    window.alert('Senha Incorreta')
   }
   }else{
    window.alert('Email Incorreto')
   }
 
  }
  function redirectHome(){
    window.open('./dashboard/index.html')
   }
  function logout(){
    
    window.open('./index.html')
    }
