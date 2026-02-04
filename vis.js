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

function createRect(x, y, width, height, color) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('fill', color);

    return rect;
}

//create an element
const line1 = createLine(350, 200, 350, 350, 'peachpuff', 5);
const line2 = createLine(270, 280, 350, 300, 'peachpuff', 5);
const line3 = createLine(350, 300, 430, 250, 'peachpuff', 5);
const line4 = createLine(350, 350, 300, 450, 'peachpuff', 5);
const line5 = createLine(350, 350, 400, 450, 'peachpuff', 5);

const rect1 = createRect(110, 200, 40, 50, 'burlywood');
const rect2 = createRect(170, 150, 40, 100, 'darkolivegreen');
const rect3 = createRect(230, 175, 40, 75, 'sienna');
const rect4 = createRect(290, 50, 40, 200, 'peru');
const rect5 = createRect(350, 100, 40, 150, 'coral');

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

vis2.appendChild(rect1);
vis2.appendChild(rect2);
vis2.appendChild(rect3);
vis2.appendChild(rect4);
vis2.appendChild(rect5);