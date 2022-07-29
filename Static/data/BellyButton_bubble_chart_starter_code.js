// Bar and Bubble charts
// Create the buildCharts function.
function buildCharts(sample) {
  // Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    

    // // Deliverable 1 Step 10. Use Plotly to plot the data with the layout. 
    var samplesArray = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var desiredSample = samplesArray.filter(selectId => selectId.id == sample);
    // 5. Create a variable that holds the first sample in the array.
    var firstSample = desiredSample[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = firstSample.otu_ids;
    var otu_labels = firstSample.otu_labels;
    var sample_values =  firstSample.sample_values;

    // 1. Create the trace for the bubble chart.
    var trace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: [sample_values],
        color: [otu_ids]
      }
    };
    
    var bubbleData = [trace];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: "Bacteria Cultures per Sample",
      xaxis: {title: "OTU ID" },
      yaxis: {title: ""}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  });
}
