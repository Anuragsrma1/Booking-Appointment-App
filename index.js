function saveToLocalStorage(event) {
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
    gender,
  };
  axios
    .post(
      "https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/appointmentdata",
      obj
    )
    .then((response) => {
      showUserOnScreen(response.data);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  // localStorage.setItem(obj.email,JSON.stringify(obj))
  // showUserOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/appointmentdata"
    )

    .then((response) => {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showUserOnScreen(user) {
  const parentElem = document.getElementById("listOfItems");

  const childElem = document.createElement("li");
  childElem.textContent =
    user.name +
    "-" +
    user.email +
    "-" +
    user.password +
    "-" +
    user.birthdate +
    "-" +
    user.gender;
  //    console.log(user._id);
  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    //  localStorage.removeItem(user.email)
    axios
      .delete(
        `https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/appointmentdata/655c19c3f3272103e862d604`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    parentElem.removeChild(childElem);
  };
  console.log(user)
  const editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.onclick = () => {
    //localStorage.removeItem(user.email);
      axios
      .put(
        `https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/appointmentdata/655c19c3f3272103e862d608`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    parentElem.removeChild(childElem);
    
    document.getElementById("fullname").value = user.name;
    document.getElementById("mail").value = user.email;
    document.getElementById("pass").value = user.password;
    document.getElementById("cp").value = user.confirmpassword;
    document.getElementById("bd").value = user.birthdate;
    document.getElementById("gnder").value = user.gender;
 //   console.log(user);
  };

  childElem.appendChild(deleteButton);
  childElem.appendChild(editButton);
  parentElem.appendChild(childElem);
}
