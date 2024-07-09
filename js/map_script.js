// function add_new_address() {
//   $("#addAddress").modal("show");
// }
$("#addAddress").on("shown.bs.modal", function () {
  InitializeMapAdd();
});

function InitializeMapAdd() {
  let marker;
  let coordinatesInput = document.getElementById("form-coordinates-add");
  let register_form_area = document.getElementById("register-form-area-add");
  let map = L.map("mapAdd", {
    center: [23, 45],
    zoom: 5,
    preferCanvas: true,
    closeButton: false
  });

  var container = L.DomUtil.get("mapAdd");
  if (container != null) {
    container._leaflet_id = null;
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  let myIcon = L.icon({
    iconUrl: register_form_area.dataset.src,
    iconSize: [22, 36]
  });

  // Initialize Click On Map
  function onMapClick(event) {
    let latitude = event.latlng.lat;
    let longitude = event.latlng.lng;

    // Change Inputs Values of Coordinates Input and Address Input
    coordinatesInput.value = changeAddressInputValue(latitude, longitude);
    changeCoordinatesInputSearchValue(latitude, longitude);

    // Check if the map has marker aleady and remove it
    if (!!marker) {
      map.removeLayer(marker);
    }

    // Adding marker to map
    let latlng = event.latlng;
    let markerHtml;
    let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    jQuery.get(url).then((data) => {
      markerHtml = data.display_name;
      marker = L.marker(latlng, { icon: myIcon })
        .addTo(map)
        .bindPopup(markerHtml, {
          className: "search__map__padding"
        })
        .openPopup();
    });
  }

  function changeAddressInputValue(latitude, longitude) {
    let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    jQuery.get(url, function (data) {
      register_form_area.value = `${data.display_name}`;
    });
  }

  function changeCoordinatesInputSearchValue(latitude, longitude) {
    coordinatesInput.value = `${latitude}, ${longitude}`;
    coordinatesInput.setAttribute("value", `${latitude}, ${longitude}`);
  }

  map.addEventListener("click", onMapClick);
}

// function edit coordinates
function InitializeMapEdit(coordinates) {
  let coordinatesInput = document.getElementById("form-coordinates-edit");
  let register_form_area = document.getElementById("register-form-area-edit");
  coordinatesInput.value = coordinates;
  let oldCoordinates = coordinatesInput.value;
  console.log(oldCoordinates);
  let latitude = oldCoordinates.slice(0, oldCoordinates.indexOf(","));
  let longitude = oldCoordinates.slice(oldCoordinates.indexOf(" "));
  let marker;
  let map = L.map("mapEdit", {
    center: [latitude, longitude],
    zoom: 5,
    preferCanvas: true,
    closeButton: false
  });

  var container = L.DomUtil.get("mapEdit");
  if (container != null) {
    container._leaflet_id = null;
  }

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  let myIcon = L.icon({
    iconUrl: register_form_area.dataset.src,
    iconSize: [22, 36]
  });

  marker = L.marker([latitude, longitude]).addTo(map);
  // Change Inputs Values of Coordinates Input and Address Input
  coordinatesInput.value = changeAddressInputValue(latitude, longitude);
  changeCoordinatesInputSearchValue(latitude, longitude);

  // Initialize Click On Map
  function onMapClick(event) {
    let latitude = event.latlng.lat;
    let longitude = event.latlng.lng;

    // Change Inputs Values of Coordinates Input and Address Input
    coordinatesInput.value = changeAddressInputValue(latitude, longitude);
    changeCoordinatesInputSearchValue(latitude, longitude);

    // Check if the map has marker aleady and remove it
    if (!!marker) {
      map.removeLayer(marker);
    }

    // Adding marker to map
    let latlng = event.latlng;
    console.log(latlng);
    let markerHtml;
    let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    jQuery.get(url).then((data) => {
      markerHtml = data.display_name;
      marker = L.marker(latlng, { icon: myIcon })
        .addTo(map)
        .bindPopup(markerHtml, {
          className: "search__map__padding"
        })
        .openPopup();
    });
  }

  function changeAddressInputValue(latitude, longitude) {
    let url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
    jQuery.get(url, function (data) {
      register_form_area.value = `${data.display_name}`;
      //   register_form_area.setAttribute("value",`${data.display_name}`)
    });
  }

  function changeCoordinatesInputSearchValue(latitude, longitude) {
    coordinatesInput.value = `${latitude}, ${longitude}`;
    coordinatesInput.setAttribute("value", `${latitude}, ${longitude}`);
  }

  map.addEventListener("click", onMapClick);
}

$("#editAddress").on("shown.bs.modal", function (e) {
  InitializeMapEdit(e.target.getAttribute("data-coordinates"));
});

$('[data-bs-target="#editAddress"]').on("click", function (e) {
  let el = e.target.closest("[data-coordinates]");
  document
    .querySelector("#editAddress")
    .setAttribute("data-coordinates", el.getAttribute("data-coordinates"));
});
