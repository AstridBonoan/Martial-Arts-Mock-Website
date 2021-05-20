
function myFunction(){
  var email = document.getElementById('email').value;
  var firstname = document.getElementById('fname').value;
  var lastname = document.getElementById('lname').value;
  var  payment= document.getElementById('Payment').value;
  var phone_number= document.getElementById('Pnumber').value;
  var gender = document.querySelector('input[name = "gender"]:checked');

if (!gender){
  alert('Please to choose your gender')
}
if (!isNaN(firstname)){
  alert('invalid first name');
}
if (!isNaN(lastname)){
alert('invalid last name');
}
if (!payment.includes('$30')){
alert('invalid payment');
}
if (!phone_number.includes('-')){
alert('invalid phone number');

}
if (!email.includes('@')){
alert('invalid email');

}
}
