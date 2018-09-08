!(function (d3) {

$("acontent").empty();

d3.select("acontent").append("h2").text("Global Sales per Year of Release Top 5");

    // Define the div for the tooltip
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: -100, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%Y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line1
    var valueline = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.ElectronicArts); });

    // define the line 2
    var valueline2 = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.Nintendo); });
        
    // define the line 3
    var valueline3 = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.Activision); });
        
    // define the line 4
    var valueline4 = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.Sony_Computer_Entertainment); });
        
    // define the line 5
    var valueline5 = d3.line()
        .x(function(d) { return x(d.Date); })
        .y(function(d) { return y(d.Take_Two_Interactive); });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("acontent").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    // Get the data
    d3.csv("Global Sales per Year of Release Top 5.csv", function(error,data) {
      if (error) throw error;
      // format the data
      data.forEach(function(d) {
          d.Date = parseTime(d.Date);
          d.Nintendo =+ d.Nintendo;
          d.ElectronicArts =+ d.ElectronicArts;
          d.Activision =+ d.Activision;
          d.Sony_Computer_Entertainment =+ d.Sony_Computer_Entertainment;
          d.Take_Two_Interactive =+ d.Take_Two_Interactive;
      });

      // Scale the range of the data
      x.domain(d3.extent(data, function(d) { return d.Date; }));
      y.domain([0, d3.max(data, function(d) { return d.Nintendo; })]);

      // Add the valueline path1.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("stroke", "steelblue")
          .attr("d", valueline)
          .on("mouseover", function(d) {
                        tooltip.transition()
                             .duration(200)
                             .style("opacity", .9);
                        tooltip.html(d["Publisher"] + "<br/> (Global Sales: " + d.ElectronicArts
                        + ", Year: " + d.Date + ")")
                             .style("left", (d3.event.pageX + 5) + "px")
                             .style("top", (d3.event.pageY - 28) + "px");
                    })
                    .on("mouseout", function(d) {
                        tooltip.transition()
                             .duration(500)
                             .style("opacity", 0);
                    });

      svg.append("text")
          .attr("transform", "translate("+(width+1)+","+y(data[data.length-3].ElectronicArts)+")")
          .attr("text-anchor", "middle")
          .style("fill", "steelblue")
          .attr("font-size","15")
          .text("ElectronicArts");

      // Add the valueline path 2.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("stroke", "red")
          .attr("d", valueline2)
          

      svg.append("text")
          .attr("transform", "translate("+(width-100)+","+y(data[data.length-10].Nintendo)+")")
          .attr("text-anchor", "start")
          .style("fill", "red")                      
          .attr("font-size","15")
          .text("Nintendo");
          
          
          
    // Add the valueline path 3.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("stroke", "black")
          .attr("d", valueline3);

      svg.append("text")
          .attr("transform", "translate("+(width+1)+","+y(data[data.length-5].Activision)+")")
          .attr("text-anchor", "start")
          .style("fill", "black")                      
          .attr("font-size","15")
          .text("Activision");
          
     // Add the valueline path 4.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("stroke", "orange")
          .attr("d", valueline4);

      svg.append("text")
          .attr("transform", "translate("+(width+1)+","+y(data[data.length-1].Sony_Computer_Entertainment)+")")
          .attr("text-anchor", "start")
          .style("fill", "orange")                      
          .attr("font-size","15")
          .text("Sony_Computer_Entertainment");
          
    // Add the valueline path 5.
      svg.append("path")
          .data([data])
          .attr("class", "line")
          .attr("stroke", "green")
          .attr("d", valueline5);

      svg.append("text")
          .attr("transform", "translate("+(width+1)+","+y(data[data.length-2].Take_Two_Interactive)+")")
          .attr("text-anchor", "start")
          .style("fill", "green")                      
          .attr("font-size","15")
          .text("Take_Two_Interactive");
          
      

      // Add the X Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // text label for the x axis
      svg.append("text")             
          .attr("transform","translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
          .style("text-anchor", "middle")
          .text("Year")
          .attr("font-size",15);

      // Add the Y Axis
      svg.append("g")
          .call(d3.axisLeft(y));

      svg.append("text")
          .attr("text-anchor", "middle")  // this makes it easy to centre the text as the 
          .attr("transform", "translate(-35,"+(height/2)+")rotate(-90)") 
          .text("Globel Sales")
          .attr("font-size",15);
    
          
    
    });

      })(d3);