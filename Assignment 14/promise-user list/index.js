const api_url = "https://reqres.in/api/users/";

async function fetchData(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  console.log(data.data.length);
  console.log(data.data);
  console.log("page:", data.page);

  if (response) {
    hideloader();
  }
  show(data);
}

setTimeout(() => {
  fetchData(api_url);
}, 1000);

function hideloader() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("display-users").style.display = "block";
}

function show(data) {
  var user = data.data;
  const table = document.getElementById("users");

  for (let i = 0; i < user.length; i++) {
    var tr = table.insertRow();
    var index = tr.insertCell(0);
    var email = tr.insertCell(1);
    var firstName = tr.insertCell(2);
    var lastName = tr.insertCell(3);
    var avatar = tr.insertCell(4);
    index.innerHTML = user[i].id;
    email.innerHTML = user[i].email;
    firstName.innerHTML = user[i].first_name;
    lastName.innerHTML = user[i].last_name;
    avatar.innerHTML = `<img src=${user[i].avatar}>`;
  }

    if (data.page == 1) {
      const nextBtn = document.createElement("button");
      nextBtn.innerHTML = "next page";
      document.body.appendChild(nextBtn);

      var nextPage = () => {
        for (let i = 0; i < user.length; i++) {
          table.deleteRow(-1);
        }
        const newApi = "https://reqres.in/api/users?page=2";
        fetchData(newApi);
        console.log("clicked");
        nextBtn.remove();
        nextBtn.removeEventListener("click", nextPage);
      };
      nextBtn.addEventListener("click", nextPage);
    }

    else {
      const PreBtn = document.createElement("button");
      PreBtn.innerHTML = "pre page";
      document.body.appendChild(PreBtn);

      var prePage = () => {
        for (let i = 0; i < 6; i++) {
          table.deleteRow(-1);
        }
        const newApi = "https://reqres.in/api/users?page=1";
        fetchData(newApi);
        console.log("clicked");
        PreBtn.remove();
        PreBtn.removeEventListener("click", prePage);
      };
      PreBtn.addEventListener("click", prePage);
    }

}
