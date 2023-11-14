 function saveToLocalStorage(event){

    event.preventDefault();
    const name = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const birthdate = event.target.birthdate.value;
    const gender = event.target.gender.value;

/*     localStorage.setItem('fullname',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('birthdate',birthdate);
    localStorage.setItem('gender',gender); */
     
   const obj = {
      name,
      email,
      password,
      birthdate,
      gender
   }     
       axios.post("https://crudcrud.com/api/0059f115b1064e16af70a175445f0e99/appointmentdata",obj)
            .then((response) => {
               showUserOnScreen(response.data);
                 console.log(response);
            })
            .catch((err) => {
               console.log(err);
            })

   // localStorage.setItem(obj.email,JSON.stringify(obj))
   // showUserOnScreen(obj)
}    
   function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfItems')
            
    const childElem = document.createElement('li')
   childElem.textContent = obj.name + '-' + obj.email + '-' + obj.password + '-' + obj.birthdate + '-' + obj.gender 

   const deleteButton = document.createElement('input')    
   deleteButton.type = "button"
   deleteButton.value = 'Delete'
   deleteButton.onclick = () => {
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
   }
   
   const editButton = document.createElement('input')
   editButton.type = "button"
   editButton.value = 'Edit'
    editButton.onClick = () => {
      localStorage.removeItem(obj.email)
      parentElem.removeChild(childElem)
   document.getElementById('name').value = obj.fullname
   document.getElementById('email').value = obj.email 
   document.getElementById('password').value = obj.password
   document.getElementById('birthdate').value = obj.birthdate
   document.getElementById('gender').value = obj.gender 
   document.get
   }  

   childElem.appendChild(deleteButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem) 

}
 
function addNums(num1,nums2){
   return num1 + nums2;
}
 console.log(addNums(5,6));
