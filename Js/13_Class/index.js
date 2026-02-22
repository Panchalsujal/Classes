let id = document.querySelector(".id");
let submit = document.querySelector(".ok");

submit.addEventListener("click", function () {
  function CheckDetails(id, cb) {
    setTimeout(() => {
      cb({ id: 123 });
    }, 3000);
  }

  function Loggedin(id, cb) {
    setTimeout(() => {
      cb({ Loggedin: "Loggin Successfull" });
    }, 1);
  }

  CheckDetails("", function (data) {
    Loggedin(data.id, function (login) {
        if(id.value == data.id){
          document.body.innerHTML =`<p>id:${data.id} Loggin Successfull</p>`
        }else{
             document.body.innerHTML =`<p>😯</p>`
        }
    });
  });
});
