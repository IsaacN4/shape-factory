'use strict';

class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `${this.color} ${this.name}`;
  }
}

const shapes = [];
const maxShapes = 30;


function createShape() {
  if (shapes.length >= maxShapes) {
    return;
  }

  const shape = getShapeData();
  if (shape) {
    shapes.push(shape);
    addShapeToDOM(shape);
  }
}


function getShapeData() {
  const shapeType = document.querySelector('.shape-select').value;
  const color = document.querySelector('.color-select').value;

  return new Shape(shapeType, color);
}

function addShapeToDOM(shape) {
  const shapeContainer = document.querySelector('.shape-container');
  const shapeElement = document.createElement('div');


  shapeElement.classList.add(shape.name, shape.color);
  shapeElement.addEventListener('click', () => {
    displayShapeInfo(shape);
  });

  shapeContainer.appendChild(shapeElement);
}


function displayShapeInfo(shape) {
  document.querySelector('.info-display').textContent = shape.getInfo();
}

document.querySelector('.create-btn').addEventListener('click', createShape);