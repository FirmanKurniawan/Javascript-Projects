anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile(    "diamond_export.json",
      function (data) {
        // Creates map chart
        var map = anychart.connector();
  
        // Sets settings for map chart
        map.geoData('anychart.maps.world');
  
        // Darkens all the regions
        map
          .unboundRegions()
          .enabled(true)
          .fill('#E1E1E1')
          .stroke('#D2D2D2');

        // Sets title for map chart 
        map
        .title('Five Main Destinations of Diamonds Exports from South Africa');

        // Display all labels even if there is an overlap
        map. 
        overlapMode("allow-overlap");

        // Helper function to create several series
      var createSeries = function (data) {
        
        // Creates connector series and customizes them
        var connectorSeries = map
          .connector(data);
        
        connectorSeries
          .markers()
          
          .size(0);

        
        
        // Sets labels for the source countries
        connectorSeries
          .labels()
          .enabled(true)
          .format(function () {
            return this.getData('to');
          });
        
      };

      // Creates Dataset from the data
      var dataSet = anychart.data.set(data).mapAs();

      createSeries(dataSet);

      // Sets container id for the chart
      map.container('container');

      // Initiates chart drawing
      map.draw();
    }
  );
});
     