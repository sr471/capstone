var namespace = "http://www.w3.org/2000/svg"

var numOfFish = 8
var screenHeight = 300
var screenWidth = 600


function random(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

// General helper functions: moving items,
// making images and shapes
function getX(shape) {
  if (shape.hasAttribute("x")) {
    return parseFloat(shape.getAttribute("x"))
  } else {
    return parseFloat(shape.getAttribute("cx"))
  }
}

function getY(shape) {
  if (shape.hasAttribute("y")) {
    return parseFloat(shape.getAttribute("y"))
  } else {
    return parseFloat(shape.getAttribute("cy"))
  }
}

function setX(shape, x) {
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else {
    shape.setAttribute("cx", x)
  }
}

function setY(shape, y) {
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else {
    shape.setAttribute("cy", y)
  }
}

function move(shape, dx, dy) {
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

// game-specific helper functions: collision checking, etc.
function checkCollisionsRectangles() {
  for (var i = 0; i < rectangles.length; i++) {
    if (!(getX(rectangles[i]) > getX(penguin) + Number(penguin.getAttribute("width"))
        || getX(rectangles[i]) + Number(rectangles[i].getAttribute("width")) < getX(penguin)
        || getY(rectangles[i]) > getY(penguin) + Number(penguin.getAttribute("height"))
        || getY(rectangles[i]) + Number(rectangles[i].getAttribute("height")) < getY(penguin))) {
      console.log(i)
      gameOver = true
      gameOverDisplay()
    }
  }
}

function checkCollisionsSharks() {
  for (var i = 0; i < sharks.length; i++) {
    if (!(getX(sharks[i]) > getX(penguin) + Number(penguin.getAttribute("width"))/2
        || getX(sharks[i]) + Number(sharks[i].getAttribute("width")) < getX(penguin)+20
        || getY(sharks[i])+10 > getY(penguin) + Number(penguin.getAttribute("height"))/2
        || getY(sharks[i]) + Number(sharks[i].getAttribute("height"))-10 < getY(penguin))) {
      gameOver = true
      gameOverDisplay()
    }
  }
}

function checkCollisionsFish() {
  for (var i = 0; i < fish.length; i++) {
    if (!(getX(fish[i]) > getX(penguin) + Number(penguin.getAttribute("width"))/2
        || getX(fish[i]) + Number(fish[i].getAttribute("width")) < getX(penguin)
        || getY(fish[i]) > getY(penguin) + Number(penguin.getAttribute("height"))/2
        || getY(fish[i]) + Number(fish[i].getAttribute("height"))/2 < getY(penguin))) {
      score++
      scoreText.innerHTML = score
      if (fish[i].parentNode) {
          fish[i].parentNode.removeChild(fish[i])
        }
      fish.splice(i, 1)
      fish.push(makeImage("images/fish.png", 650, random(20, 250), 30, 30))
    }
  }
}

function addFish() {
  for (var i = 0; i < numOfFish; i++) {
    fish.push(makeImage("images/fish.png", random(0, 600), random(20, 250), 30, 30))
  }
}

function gameOverDisplay() {
  makeText("GAME OVER", 220, 150, 48, "VT323", "navy", 1)
}


// GAME INITIALIZATION

