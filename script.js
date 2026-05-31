document.addEventListener("DOMContentLoaded", function () {

  vegaEmbed("#fuel_map", "js/fuel_map.vg.json")
    .then(console.log)
    .catch(console.error);

  vegaEmbed("#fuel_bar", "js/fuel_bar.vg.json")
    .then(console.log)
    .catch(console.error);

});