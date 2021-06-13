import React from 'react';




// Name and Password from the register-form
let name = document.getElementById('name');
let pw = document.getElementById('pw');

// storing input from register-form
function store() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('pw', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

  // stored data from the register-form
  let storedName = localStorage.getItem('name');
  let storedPw = localStorage.getItem('pw');

  // entered data from the login-form
  let userName = document.getElementById('userName').value;
  let userPw = document.getElementById('userPw').value;

  // check if stored data from register-form is equal to data from login form
  if (userName.value == storedName && userPw.value == storedPw) {
    alert('You are loged in.');
  } else {
    alert('ERROR.');
  }
}
export default check;
export default store;