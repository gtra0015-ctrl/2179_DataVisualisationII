document.addEventListener("DOMContentLoaded", function () {

  vegaEmbed("#fuel_map", "js/fuel_map.vg.json")
    .then(console.log)
    .catch(console.error);

  vegaEmbed(
    "#fuelCycleHeatmap",
    "js/fuel_cycles.vg.json",
    { actions: false }
  ).catch(console.error);

  vegaEmbed(
    "#fuelCompareFacetplot",
    "js/fuel_compare.vg.json",
    { actions: false }
  ).then(result => {
    console.log("Facet plot loaded");
  }).catch(err => {
    console.error("Vega embed error:", err);
  });

  vegaEmbed("#fuel_ranked_bar", "js/fuel_ranked_bar.vg.json", {
    actions: false
  }).catch(console.error);

  vegaEmbed("#policy_timeline", "js/policy_timeline.vg.json", {
  actions: false
  }).catch(console.error);

  vegaEmbed("#policy_map", "js/policy_map.vg.json", {
  actions: false
  }).catch(console.error);

  vegaEmbed("#policy_bar", "js/policy_spending.vg.json", { actions: false })
    .catch(console.error);

  vegaEmbed(
  "#policy_trellis",
  "js/policy_intensity.vg.json",
  { actions: false }
  ).catch(console.error);

  vegaEmbed("#pt_multiline", "js/transport_recovery.vg.json", {
  actions: false
  }).catch(console.error);

  vegaEmbed(
  "#pt_area",
  "js/transport_composition.vg.json",
  { actions: false }
  ).catch(console.error);

  vegaEmbed(
  "#pt_slope",
  "js/ridership_growth.vg.json",
  { actions: false }
  ).catch(console.error);

  vegaEmbed(
  "#pt_bubble",
  "js/transport_bubble.vg.json",
  { actions: false }
  ).catch(console.error);

});
