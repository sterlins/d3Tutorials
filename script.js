var bardata = [20, 30, 105, 400, 450,
              20, 30, 105, 400, 450,
              20, 30, 105, 400, 450];

var height = 400,
    width = 600,
    barOffset = 5;

var xScale = d3.scaleOrdinal()
              .domain([0, bardata.length])
              .range([0, width])

var yScale = d3.scaleLinear()
              .domain([0, d3.max(bardata)])
              .range([height,0])

d3.select('#chart')
  .append('svg')
    .attr('height', height)
    .attr('width', width)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(bardata)
    .enter()
  .append('rect')
    .style('fill','#C61C6F')
    .attr('width', xScale.range)
    .attr('height',function(d){
      return height - yScale(d);
    })
    .attr('x',function(d,i){
      return i * (barWidth+barOffset);
    })
    .attr('y',function(d){
      return yScale(d);
    })






                // To access anything in d3, we start off by calling the D3 object, and then we call whichever method we want to use.
                // E.g., get me an item and modify the text within that item to 'select'
                //Picks the first element matching the critera
                //d3.select('.item').text('select')

                //This modifies all items
                //d3.selectAll('.item').text('select')

                //To select a specific item (nth child)--note that this is not 0-indexed
                //d3.select('.item:nth-child(2)').text('select')
                //Selects all odd-numbered lines
                //d3.selectAll('.item:nth-child(odd)').text('select')
                //Selects every item including and after the 3rd element
                //d3.selectAll('.item:nth-child(n+3)').text('select')
                //Another way to select every even element --2n+1 would be every odd (can also be 3n, 4n, etc.)
                // d3.selectAll('.item:nth-child(2n)').text('select')


                // You can modify the content of an element using not just text, but HTML
                // d3.select('.item')
                // //You can add to an element using the append statement.  This adds in a div AFTER the first item
                //   .append('div')
                //   .html('<strong>selection</strong>')

                // //If you want to add an element at a certain poisition within a selection, you can use the INSERT method instead of append
                // d3.select('#chart')
                // //You can add to an element using the append statement.  This adds in a div after the first item
                //   .insert('span',':nth-child(3)')
                //   .html('<strong>selection</strong>')

                //You can also remove
                //Use select method to target an element and then take it out
                // d3.select('#chart .item:nth-child(3)')
                //   .remove()


                //You can also control any HTML attributes within your selections.
                //You can use this to style your selections with CSS you've pre-written
                //Generic method for controlling any attribute in D3 is called ATTR
                //This actually REPLACES the class, does not toggle it
                // d3.selectAll('.item')
                //   .attr('class','highlight')

                //If you wanted to toggle the classes instead (control the classes more carefully) you can say "classed"
                //This example will leave on item as a class and add in 'highlight' for the 3rd item
                // d3.selectAll('.item:nth-child(3)')
                //   .classed('highlight', true)

                //If you want to turn more than one class on or off, it is no longer recommended
                //to use an object.  This is not supported in v4 without requiring the multi-add
                // d3.selectAll('.item:nth-child(3)')
                //   .classed('highlight', true)
                //   .classed('item', false)

                //You can also specify styles directly without adding classes, using the style method
                // d3.selectAll('.item:nth-child(3)')
                //   .style('background', '#268BD2')
                //   .style('padding', '10px')
                //   .style('margin', '5px')
                //   .style('color', '#EEE8D5')


                // var myStyles=[
                //               {width: 200,
                //                color:'#A57706',
                //                name: 'Balls McGee'},
                //                {width: 230,
                //                 color:'#BD3613',
                //                 name: 'Hassum Harrod'},
                //               {width: 220,
                //                color:'#D11C24',
                //                name: 'Jennifer Jerome'},
                //                {width: 290,
                //                 color:'#C61C6F',
                //                 name: 'Richard Tweet'},
                //               {width: 236,
                //                color:'#595AB7',
                //                name: 'Lorenzo Garcia'},
                //                {width: 230,
                //                 color:'#2176C7',
                //                 name: 'Xhou Ta'}
                //             ];
                //
                //             d3.selectAll("#chart").selectAll('div')
                //                 .data(myStyles)
                //                 .enter()
                //               .append('div')
                //                 .classed('item','true')
                //                 .text(function(d){
                //                   return d.name;
                //                 })
                //                 .style('color', 'white')
                //                 //use callback which inherits the information from the data specified
                //                 .style('background', function(d) {
                //                         return d.color;
                //                       })
                //                 .style('width',function(d){
                //                         return d.width + 'px'
                //                 });
                //
                // d3.select("#chart")
                //   .append('svg')
                //     .attr('width', 600)
                //     .attr('height', 400)
                //     .style('background','#93A1A1')
                //   .append('rect')
                //     .attr('x', 200)
                //     .attr('y', 100)
                //     .attr('height', 200)
                //     .attr('width', 200)
                //     .style('fill','#CB4B19')
                //
                // d3.select('svg')
                //   .append('circle')
                //     .attr('cx', 300)
                //     .attr('cy', 200)
                //     .attr('r', 50)
                //     .style('fill', '#840043')


                //
                // var bardata = [20, 30, 105, 400, 450,
                //               20, 30, 105, 400, 450,
                //               20, 30, 105, 400, 450];
                //
                // var height = 400,
                //     width = 600,
                //     barWidth = 50,
                //     barOffset = 5;
                //
                // var yScale = d3.scaleLinear()
                //               .domain([0, d3.max(bardata)])
                //               .range([height,0])
                //
                // d3.select('#chart')
                //   .append('svg')
                //     .attr('height', height)
                //     .attr('width', width)
                //     .style('background', '#C9D7D6')
                //     .selectAll('rect').data(bardata)
                //     .enter()
                //   .append('rect')
                //     .style('fill','#C61C6F')
                //     .attr('width', barWidth)
                //     .attr('height',function(d){
                //       return height - yScale(d);
                //     })
                //     .attr('x',function(d,i){
                //       return i * (barWidth+barOffset);
                //     })
                //     .attr('y',function(d){
                //       return yScale(d);
                //     })
