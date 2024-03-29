(function() {
  // Load the Visualization API and the corechart package.
  google.charts.load("current", {
    packages: ["corechart"]
  });

  // draw front-end chart
  google.charts.setOnLoadCallback(drawFrontEndChart);

  // draw back-end chart
  google.charts.setOnLoadCallback(drawBackEndChart);

  // draw infrastructure chart
  google.charts.setOnLoadCallback(drawInfrastructureChart);

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawGeneralChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.

  function drawFrontEndChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    var container = document.getElementById("front_end_chart");
    data.addColumn("string", "Tecnologies");
    data.addColumn("number", "Slices");
    data.addRows([["Vue", 4], ["React", 2], ["Es+", 4]]);

    // Set chart options
    var options = {
      is3D: true,
      backgroundColor: "#6d4f61",
      titlePosition: "none",
      legend: {
        textStyle: {
          fontFamily: "'Roboto', sans-serif",
          color: "#fff"
        }
      },
      width: container.offsetWidth - 4,
      height: 250
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
  }

  function drawBackEndChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    var container = document.getElementById("back_end_chart");
    data.addColumn("string", "Tecnologies");
    data.addColumn("number", "Slices");
    data.addRows([
      ["Node", 3],
      ["Express", 2],
      ["WebSocket", 2],
      ["RabbitMq", 1],
      ["Redis", 1],
      ["Mongodb", 1]
    ]);

    // Set chart options
    var options = {
      is3D: true,
      backgroundColor: "#6d4f61",
      titlePosition: "none",
      legend: {
        textStyle: {
          fontFamily: "'Roboto', sans-serif",
          color: "#fff"
        }
      },
      width: container.offsetWidth,
      height: 250
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
  }

  function drawInfrastructureChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    var container = document.getElementById("infrastructure_chart");
    data.addColumn("string", "Tecnologies");
    data.addColumn("number", "Slices");
    data.addRows([
      ["Docker", 2],
      ["Firebase", 2],
      ["Google Cloud", 2],
      ["Linux", 2],
      ["Kubernetes", 1],
      ["Docker compose", 1]
    ]);

    // Set chart options
    var options = {
      is3D: true,
      backgroundColor: "#6d4f61",
      titlePosition: "none",
      legend: {
        textStyle: {
          fontFamily: "'Roboto', sans-serif",
          color: "#fff"
        }
      },
      width: container.offsetWidth,
      height: 250
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
  }

  function drawGeneralChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    var container = document.getElementById("general_chart");
    data.addColumn("string", "Tecnologies");
    data.addColumn("number", "Slices");
    data.addRows([["FrontEnd", 6], ["BackEnd", 3], ["Infrastructure", 1]]);

    // Set chart options
    var options = {
      is3D: true,
      backgroundColor: "#6d4f61",
      titlePosition: "none",
      legend: {
        textStyle: {
          fontFamily: "'Roboto', sans-serif",
          color: "#fff"
        }
      },
      width: container.offsetWidth - 4,
      height: 500
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(container);
    chart.draw(data, options);
  }
})();
