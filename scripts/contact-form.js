  function validateForm(){
    testName();
    testEmail();
    testEmailConfirm();
    testPhone();
    testAddress();
 }

// Name Validation / regex είναι για να δέχεται μόνο λατινικούς χαρακτήρες
 function testName(){
  let nameRegex = /^[a-zA-Z]{2,16}$/;
  let Name = document.getElementById("Name").value;
  if(nameRegex.test(Name)){
    const validationMesssage = document.getElementById('nameError')
    validationMesssage.innerHTML =  "&#10004;"
    validationMesssage.style.color = 'green'
      return true;
    }else{
      const validationMesssage = document.getElementById('nameError')
      validationMesssage.innerHTML =  "Please enter your name."
      validationMesssage.style.color = 'red'
      return false;
    }
    }

// Phone number Validation / regex είναι για 10 νούμερα
 function testPhone(){
 let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
 let Phone = document.getElementById("Phone").value;
 if(phoneRegex.test(Phone)){
  const validationMesssage = document.getElementById('phoneError')
  validationMesssage.innerHTML = "&#10004;"
  validationMesssage.style.color = 'green'
  return true;
}else{
  const validationMesssage = document.getElementById('phoneError')
  validationMesssage.innerHTML = "Please enter a valid phone number."
  validationMesssage.style.color = 'red'
  return false;
}
}
 
// Email Validation / π.χ. email@gmail.com
 function testEmail(){
 let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 let email = document.getElementById("Email").value;
  if(emailRegex.test(email)){
    const validationMesssage = document.getElementById('emailError')
    validationMesssage.innerHTML =  "&#10004;"
    validationMesssage.style.color = 'green'
      return true;
    }else{
      const validationMesssage = document.getElementById('emailError')
      validationMesssage.innerHTML =  "Please enter your email."
      validationMesssage.style.color = 'red'
      return false;
    }
    }

// Email Confirmation / όσο το input είναι ίδιο με το email input το παίρνει για true
 function testEmailConfirm(){
 let EmailConfirm = document.getElementById("EmailConfirm").value;
 let email = document.getElementById("Email").value;
 if(EmailConfirm !="" && EmailConfirm  == email){
  const validationMesssage = document.getElementById('EmailConfirmError')
  validationMesssage.innerHTML =  "&#10004;"
  validationMesssage.style.color = 'green'
    return true;
  }else{
    const validationMesssage = document.getElementById('EmailConfirmError')
    validationMesssage.innerHTML =  "Please confirm your email."
    validationMesssage.style.color = 'red'
    return false;
  }
  }

// Address validation / Για input θέλει γράμματα μετα αριθμό μετά 5ψήφιο αριθμό και μετά γράμματα. (Mosxato 5 11111 Athens)
 function testAddress(){
  let addressRegex = /^[A-Za-z\s]+\s[0-9,-]+[\s]*[0-9]{5}\s[A-Za-z\s]+$/;
  let address = document.getElementById("Address").value;
  if(addressRegex.test(address)){
  const validationMesssage = document.getElementById('addressError')
  validationMesssage.innerHTML =  "&#10004;"
  validationMesssage.style.color = 'green'
    return true;
  }else{
    const validationMesssage = document.getElementById('addressError')
    validationMesssage.innerHTML =  "Please enter a valid adress."
    validationMesssage.style.color = 'red'
    return false;
  }
  }



