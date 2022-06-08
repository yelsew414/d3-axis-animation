(function() {
    
    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    let width = 1000 - margin.left - margin.right;
    let height = 100 - margin.top - margin.bottom

    let svg = d3.select("#chart").append("svg")
                .attr("width", width - margin.left - margin.right)
                .attr("height", height - margin.top - margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let upper = 10
    let lower = 0

    let xScale = d3.scaleBand()
                .domain(d3.range(lower, upper + 1, 1))
                .range([0, width - 100])
                .padding(.2)

    svg.append("g")
        .attr("class", "xaxis")
        .call(d3.axisBottom(xScale))
    
})();
