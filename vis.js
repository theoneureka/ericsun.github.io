const svgNS = "http://www.w3.org/2000/svg";

const vis1 = document.getElementById("vis1");
console.log(vis1);

const vis2 = document.getElementById("vis2");
console.log(vis2);

// Create line function that appends a line to the SVG
function createLine(x1, y1, x2, y2, stroke = 'black', strokeWidth = 0.5) {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  
  // Set attributes
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke', stroke);
  line.setAttribute('stroke-width', strokeWidth);
  
  // Append line to SVG
  return line;
}

//create an element
const line1 = createLine(350, 200, 350, 350, 'peachpuff', 5);
const line2 = createLine(270, 280, 350, 300, 'peachpuff', 5);
const line3 = createLine(350, 300, 430, 250, 'peachpuff', 5);
const line4 = createLine(350, 350, 300, 450, 'peachpuff', 5);
const line5 = createLine(350, 350, 400, 450, 'peachpuff', 5);

const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute('cx', '350');
circle.setAttribute('cy', '200');
circle.setAttribute('r', '50');
circle.setAttribute('fill', 'peachpuff');

// add element into container
vis1.appendChild(circle);
vis1.appendChild(line1);
vis1.appendChild(line2);
vis1.appendChild(line3);
vis1.appendChild(line4);
vis1.appendChild(line5);