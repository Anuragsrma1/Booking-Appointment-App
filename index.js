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
       axios.post("https://crudcrud.com/api/d3a2075881d24d49973679688c165e6a/appointmentdata",obj)
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

  window.addEventListener("DOMContentLoaded", ()=> {
        
   
     axios.get("https://crudcrud.com/api/d3a2075881d24d49973679688c165e6a/appointmentdata")
         
     .then((response) => {
        console.log(response);

        for(var i=0; i<response.data.length; i++ ){
         showUserOnScreen(response.data[i]);
        } 
   })
       .catch((err) => {
          console.log(err);
   })
  })

   function showUserOnScreen(user){


    const parentElem = document.getElementById('listOfItems')
            
    const childElem = document.createElement('li')
   childElem.textContent = user.name + '-' + user.email + '-' + user.password + '-' + user.birthdate + '-' + user.gender 
  //    console.log(user._id);
   const deleteButton = document.createElement('input')    
   deleteButton.type = "button"
   deleteButton.value = 'Delete'
   deleteButton.onclick = () => {
    //  localStorage.removeItem(user.email)
    axios.delete(`https://crudcrud.com/api/d3a2075881d24d49973679688c165e6a/appointmentdata/6556dcd8f3272103e862cbc4`)
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
      parentElem.removeChild(childElem)
   }
   
   
   const editButton = document.createElement('input')
   editButton.type = "button"
   editButton.value = 'Edit'
    editButton.onClick = () => {
      localStorage.removeItem(user.email)
      parentElem.removeChild(childElem)
   document.getElementById('name').value = user.fullname
   document.getElementById('email').value = user.email 
   document.getElementById('password').value = user.password
   document.getElementById('password').value = user.password
   document.getElementById('birthdate').value = user.birthdate
   document.getElementById('gender').value = user .gender 
   
   }  

   childElem.appendChild(deleteButton)
   childElem.appendChild(editButton)
   parentElem.appendChild(childElem) 

}
 
