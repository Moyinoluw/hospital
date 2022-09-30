const onSubmit = async () => {
  let name = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let pword = document.getElementById("pword").value;

  let arr = [];
  arr.push({ uname: name, "email:": email, pword: pword });
  window.localStorage.setItem("myObject", JSON.stringify(arr));
  console.log("working", JSON.stringify(arr));
  alert("Your details has been saved ")
  window.location.replace("http://127.0.0.1:5501/Locator.html");
};
