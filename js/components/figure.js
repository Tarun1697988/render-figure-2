const divElem = document.querySelector('.render-figure');

class Figure {
  constructor(propertis = {}) {
    let { color = 'black', width = 100, height = 100 } = propertis;
    this.color = color;
    this.width = width;
    this.height = height;
    this.elem = document.createElement('div');
  }

  stylization() {
    this.elem.style.width = `${this.width}px`;
    this.elem.style.height = `${this.height}px`;
    this.elem.style.backgroundColor = this.color;
  }

  render() {
    this.createElem();
    this.stylization();
    this.hover();
    this.clicked();
  }

  createElem() {
    let fragment = document.createDocumentFragment();
    fragment.appendChild(this.elem);
    divElem.appendChild(fragment);
  }

  hover() {
    this.elem.addEventListener('mouseover', function (event) {
      event.target.style.opacity = "0.5";
    })
    this.elem.addEventListener('mouseout', function (event) {
      event.target.style.opacity = "1";
    })
  }

  clicked() {
    let index = 0;
    this.elem.addEventListener('click', function (event) {
      index++;
      event.target.style.transform = `translateX(${index * 100}px)`;
    })
  }
}

export { Figure, divElem };
