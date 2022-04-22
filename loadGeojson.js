export default loadGeoson = e => {
    let geojson;

    const formData = new FormData();

    formData.append("f", "geojson");
    formData.append("where", "1=1");
    formData.append("outSr", "4326");
    formData.append("outFields", "OBJECTID, Shape, Name, Prov, Latitude, HDD_Below_18C, DHDBT, DCDBT, DCWBT");


    const data = fetch("https://maps-cartes.services.geo.ca/server_serveur/rest/services/NRCan/Carte_climatique_HOT2000_Climate_Map_EN/MapServer/1/query", {
        method: "POST",
        body: formData
    })
        .then(res => res.json())
        .then(d => {
            geojson = d;
            console.log(geojson);
        })
        .catch(err => console.log(err));

    return geojson;
}
