import {Figure} from './figure';

export default class Square extends Figure {
  constructor(props){
    super(props);
  }

  stylization(){
    super.stylization();
    this.elem.style.height = `${this.width}px`;
  }
}
