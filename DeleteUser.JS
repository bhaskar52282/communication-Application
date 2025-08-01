let UserID;

function deleteUserId(id) {
  UserID = id;
}

function deleteUser() {
  let users = JSON.parse(localStorage.getItem("usersLocastorage"));
  let i;

  for (i in users) {
    if (UserID === users[i].id) {
      users.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("usersLocastorage", JSON.stringify(users));
  window.location.href = "Userlist.html"; 
}
