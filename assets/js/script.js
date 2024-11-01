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
    const shapeContainer = document.querySelector('.shape-container');
   
    if (shapes.length >= maxShapes) {
      return;
    }
  
    const shapeType = document.querySelector('.shape-select').value;
    const color = document.querySelector('.color-select').value;
  
    const shape = new Shape(shapeType, color);
    shapes.push(shape);
  
    const shapeElement = document.createElement('div');
    shapeElement.classList.add(shapeType, color);
    shapeElement.addEventListener('click', () => {
      document.querySelector('.info-display').textContent = shape.getInfo();
    });
  
    shapeContainer.appendChild(shapeElement);
  }
  
  document.querySelector('.create-btn').addEventListener('click', createShape);
  
  