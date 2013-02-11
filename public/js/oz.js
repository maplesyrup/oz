$(document).ready(function() {
  var ENTER = 13

  $("#search").keypress(function(e) {

    if (e.keyCode === ENTER) {
      showResults();
    }
  })

})

var data = [
  {
    range: [0, 15],
    occurences: []
  },
  {
    range: [15, 30]
    occurences: [
      { phrase: "make quite a bit of use of regular <b>expressions</b> in various places",
      },
      { phrase: "And for many tasks it turns out that regular <b>expressions</b> are just a very practical and capable way of..." }
    ]

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
  {
    range: [15, 30]

  },


]

