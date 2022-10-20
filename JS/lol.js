const onSubmit = async () => {
  let name = document.getElementById('uname').value;
  let email = document.getElementById('email').value;
  let pword = document.getElementById('pword').value;

  let arr = [];
  arr.push({ uname: name, 'email:': email, pword: pword });
  window.localStorage.setItem('myObject', JSON.stringify(arr));
  console.log('working', JSON.stringify(arr));
  alert('Your details has been saved ');
  window.location.replace('http://127.0.0.1:5501/Locator.html');
};

function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
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

  window.localStorage.setItem('myLocation', JSON.stringify(arr));
}

const onfecth = async () => {
  getLocation();

  var myLocation = JSON.parse(localStorage.getItem('myLocation'));
  console.log(myLocation['0'].latitude);
  const menu = await fetch(
    `https://vbox.com.ng/api/v1/agents?longitude=${myLocation['0'].longitude}&latitude=${myLocation['0'].latitude}`,

    {
      method: 'Get',
    }
  );
  const data = await menu.json();
  const res = data.data.agentsNearby;
  // console.log(data.data.agentsNearby);
  count = 0;

  var HTML = '<table border="3px" class="nor"> ';

  HTML += ' <thead>';
  HTML += '   <th>no</th>';
  HTML += '  <th>name</th>';
  HTML += '   <th>address</th>';
  HTML += '  <th>city</th>';
  HTML += '   <th>country</th>';
  HTML += '   </thead>';

  for (let i = 0; i < res.length; i++) {
    count++;
    var name = res[i].name
    HTML += '<tr>';
    HTML += `<td align=center  onclick="test(+name +)"> ${count}  </td>`;

    HTML += '<td align=center onclick="test()">' + res[i].name + '</td>';
    HTML += '<td align=center onclick="test()">' + res[i].address + '</td>';
    HTML += '<td align=center onclick="test()">' + res[i].city + '</td>';
    HTML += '<td align=center onclick="test()">' + res[i].country + '</td>';
    HTML += '</tr>';
  }
  HTML += '</table>';

  document.getElementById('ben').innerHTML = HTML;
};

const test = (count) => {
console.log("tablle", count)
}

function initMap() {
  // The location of Uluru

  const uluru = { lat: 6.6857798892, lng: 3.321347246352115 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 20,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
