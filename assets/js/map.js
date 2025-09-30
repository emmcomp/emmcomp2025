var map = L.map("map").setView([-19.93022647984335, -43.97841905913299], 17) 

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 25,
    attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

L.marker([-19.93022647984335, -43.97841905913299])
    .addTo(map)
    .bindPopup(
        "CEFET-MG - Campus I<br>Av. Amazonas, 5253 - Nova Suiça, Belo Horizonte - MG, 30421-169"
    )
