const onSubmit = async () => {
  let name = document.getElementById("uname").value;
  let email = document.getElementById("email").value;
  let pword = document.getElementById("pword").value;

  let arr = [];
  arr.push({ uname: name, "email:": email, pword: pword });
  window.localStorage.setItem("myObject", JSON.stringify(arr));
  console.log("working", JSON.stringify(arr));
  alert("Your details has been saved ");
  window.location.replace("http://127.0.0.1:5501/Locator.html");
};

var tt = `<div class="mapouter">
          <div class="gmap_canvas">
            <iframe width="600" height="500" id="gmap_canvas"
              src=https://maps.google.com/maps?q=6.683993,%203.331077&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
              href="https://123movies-to.org"></a><br>
            <style>
              .mapouter {
                position: relative;
                text-align: right;
                height: 500px;
                width: 600px;
              }
            </style><a href="https://www.embedgooglemap.net">add google maps</a>
            <style>
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 500px;
                width: 600px;
              }
            </style>
          </div>
        </div>`;

document.getElementById("map").innerHTML = tt;


function getLocation() {
  if (navigator.geolocation) {
   return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // var x = document.getElementById("demo");

  // console.log("hello", position.coords.latitude);
  // x.innerHTML =
  //   "Latitude: " +
  //   position.coords.latitude +
  //   "<br>Longitude: " +
  //   position.coords.longitude;

  let arr = [];
  arr.push({
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  });

    window.localStorage.setItem("myLocation", JSON.stringify(arr));
}

const onfecth = async () => {

  getLocation()

  var myLocation = JSON.parse(localStorage.getItem("myLocation"));
  console.log(myLocation["0"].latitude);
  const menu = await fetch(
    `http://134.209.218.152/api/v1/agents?longitude=3.321347246352115&latitude=6.685779889200000`,
    {
      method: "Get",
    }
  );
  const data = await menu.json();
  const res = data.data.agentsNearby;
  // console.log(data.data.agentsNearby);
    var HTML = "";
    count = 0;

  for (let i = 0; i < res.length; i++) {
    count++;
    console.log("Hostipal name", res[i].name);
    HTML += "<tr>";
            HTML += "<td align=center>" + count + "</td>";

        HTML += "<td align=center>" + res[i].name + "</td>";
        HTML += "<td align=center>" + res[i].address + "</td>";
        HTML += "<td align=center>" + res[i].city + "</td>";
        HTML += "<td align=center>" + res[i].country + "</td>";
    HTML += "</tr>";

  }

    document.getElementById("ben").innerHTML = HTML;


    


};
