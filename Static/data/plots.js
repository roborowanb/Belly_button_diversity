function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}




function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
}




function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}






d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");

  var xData = [1, 2, 3, 4, 5];
  var yData = [];

  if (dataset === 'dataset1') {
    yData = [1, 2, 4, 8, 16];
  };

  if (dataset === 'dataset2') {
    yData = [1, 10, 100, 1000, 10000];
  };

  var trace = {
    x: [xData],
    y: [yData],
  };
  Plotly.restyle("plot", trace);
};

init();



// The first function to execute is init(), which renders the initial visualization:

function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] 
  }];
  Plotly.newPlot("plot", data);
};
init();




// Plotly.newPlot("plotArea", [{x: [5, 10, 15], y: [10, 20, 30]}]);




// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = { 
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);

//   var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b).reverse();
// console.log(sortedAge);






// var trace = {
//   x: topFiveCityNames,
//   y: topFiveCityGrowths,
//   type: "bar"
// };
// var data = [trace];
// var layout = {
//   title: "Most Rapidly Growing Cities",
//   xaxis: {title: "City" },
//   yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);




