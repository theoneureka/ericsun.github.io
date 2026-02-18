// Load data from datasets/videogames_wide.csv using d3.csv and then make visualizations
async function fetchData() {
  const data = await d3.csv("./dataset/videogames_long.csv");
  return data;
}

fetchData().then(async (data) => {
    // Examples
    const vlSpec = vl
    .markBar()
    .data(data)
    .encode(
      vl.y().fieldN("platform").sort("-x"),
      vl.x().fieldQ("global_sales").aggregate("sum")
    )
    .width("container")
    .height(400)
    .toSpec();

    const vlSpec2 = vl
    .markBar()
    .data(data)
    .encode(
      vl.y().fieldN("genre").sort("-x"),
      vl.x().fieldQ("global_sales").aggregate("sum"),
      vl.color().value("teal")
    )
    .width("container")
    .height(400)
    .toSpec();

    const vlSpec11 = vl
    .markBar()
    .data(data)
    .encode(
      vl.y().fieldN("sales_region").sort("-x"),
      vl.x().fieldQ("sales_amount").aggregate("median"),
      vl.color().value("teal")
    )
    .width("container")
    .height(400)
    .toSpec();

    render("#view", vlSpec);
    render("#view2", vlSpec2);
    render("#view11", vlSpec11);

    // Actual Visualizations

    // QUESTION 1
    // Visualization of global sales of Wii, DS, PS4, and Xbox360 Games
    const vlSpec3 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["platform"] == "Wii" || datum["platform"] == "DS" || datum["platform"] == "PS4" || datum["platform"] == "X360"')
    )
    .encode(
        vl.x().fieldQ("global_sales").aggregate("sum"),
        vl.y().fieldN("platform").sort("-x"),
        vl.color().value("red")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Visualization of global sales of Wii, DS, PS4, and Xbox360 Games sorted by genres
    const vlSpec4 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["platform"] == "Wii" || datum["platform"] == "DS" || datum["platform"] == "PS4" || datum["platform"] == "X360"')
    )
    .encode(
        vl.x().fieldQ("global_sales").aggregate("sum"),
        vl.y().fieldN("genre").sort("-x"),
        vl.color().value("green")
    )
    .width("container")
    .height(400)
    .toSpec();

    // QUESTION 2
    // Visualization of Shooter game sales by year on PC
    const vlSpec5 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["genre"] == "Shooter"'),
        vl.filter('datum["platform"] == "PC"')
    )
    .encode(
        vl.x().fieldQ("global_sales").aggregate("sum"),
        vl.y().fieldN("year"),
        vl.color().value("blue")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Visualization of Strategy game sales by year across on PC
    const vlSpec6 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["genre"] == "Strategy"'),
        vl.filter('datum["platform"] == "PC"')
    )
    .encode(
        vl.x().fieldQ("global_sales").aggregate("sum"),
        vl.y().fieldN("year"),
        vl.color().value("orange")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Question 3 
    // Visualization of PC sales across regions
    const vlSpec7 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["platform"] == "PC"')
    )
    .encode(
        vl.x().fieldQ("sales_amount").aggregate("sum"),
        vl.y().fieldN("sales_region").sort("-x"),
        vl.color().value("pink")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Visualization of DS sales across regions
    const vlSpec8 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["platform"] == "DS"')
    )
    .encode(
        vl.x().fieldQ("sales_amount").aggregate("sum"),
        vl.y().fieldN("sales_region").sort("-x"),
        vl.color().value("purple")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Visualization of Shooter games sales in EU on PC over the years
    const vlSpec9 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["sales_region"] == "eu_sales"'),
        vl.filter('datum["genre"] == "Shooter"'),
        vl.filter('datum["platform"] == "PC"')
    )
    .encode(
        vl.x().fieldQ("sales_amount").aggregate("sum"),
        vl.y().fieldN("year"),
        vl.color().value("aquamarine")
    )
    .width("container")
    .height(400)
    .toSpec();

    // Visualization of Shooter games sales in NA on PC over the years
    const vlSpec10 = vl
    .markBar()
    .data(data)
    .transform(
        vl.filter('datum["sales_region"] == "na_sales"'),
        vl.filter('datum["genre"] == "Shooter"'),
        vl.filter('datum["platform"] == "PC"')
    )
    .encode(
        vl.x().fieldQ("sales_amount").aggregate("sum"),
        vl.y().fieldN("year"),
        vl.color().value("cyan")
    )
    .width("container")
    .height(400)
    .toSpec();
    
  render("#view3", vlSpec3);
  render("#view4", vlSpec4);
  render("#view5", vlSpec5);
  render("#view6", vlSpec6);
  render("#view7", vlSpec7);
  render("#view8", vlSpec8);
  render("#view9", vlSpec9);
  render("#view10", vlSpec10);
});

async function render(viewID, spec) {
  const result = await vegaEmbed(viewID, spec);
  result.view.run();
}
