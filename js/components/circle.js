import { Figure } from './figure';


export default class Circle extends Figure {
  constructor(props) {
    super(props);
    this.radius = this.width / 2;
    this.height = this.width;
  }

  stylization() {
    super.stylization();
    this.elem.style.borderRadius = `${this.radius}px`;
  }
}
