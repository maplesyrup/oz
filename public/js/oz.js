$(document).ready(function() {
  var ENTER = 13

  $("#search").keypress(function(e) {
    e.preventDefault()
    e.stopPropagation()

    if (e.keyCode === ENTER) {
      showResults();
    }
  })
  showResults()

})

function showResults() {
  histogram();
}

function chart(config) {
  var width = config.width
  var height = config.height
  var data = config.data

  var my = function() {
    var svg = d3.select("#histogram").append("svg")
      .attr("width","700")
      .attr("height", "700")

    var bars = svg.selectAll(".bar")
      .data(data).enter().append("rect")

    var x = d3.scale.linear()
      .domain([0, 375])
      .range([0, 700])

    var y = d3.scale.linear()
      .domain([0, 10])
      .range([0, 100])

    var yAxis = d3.svg.axis()
      .scale(y)
      .tickValues([5, 10])
      .orient("left")

    var xAxis = d3.svg.axis()
      .scale(x)
      .tickValues([0, 60, 120, 180, 240])
      .orient("bottom")

    var margin = 20

    bars.attr("height", function(d) {
        return y(d.occurences.length)
      })
      .attr("width", 15)
      .attr("x", function (d) {
        return x(d.range[0])
      })
      .attr("y", function(d) {
        return height - y(d.occurences.length) - margin
      })
      .attr("class", "bar")
      .on("click", function(d) {
        d3.select("#quote").html(d.occurences[0].phrase)
        d3.select("#regexvideo")[0][0].currentTime = d.range[0];
      })

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + margin + ", " + (height - margin) + ")")
      .call(xAxis)

    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + margin + ", 0)")
      .call(yAxis)
  }

  return my
}

var data = [
  {
    range: [0, 15],
    occurences: []
  },
  {
    range: [15, 30],
    occurences: [
      { phrase: "...make quite a bit of use of regular <b>expressions</b> in various places...",
      },
      { phrase: "And for many tasks it turns out that regular <b>expressions</b> are just a very practical and capable way of..." }
    ]

  }]

var histogram = chart({ width: 700, height: 100, data: data })

/*  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },
  {
    range: [15, 30]

  },


]
*/
