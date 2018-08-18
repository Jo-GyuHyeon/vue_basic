import FormView from '../views/FormView.js';

const tag = '[MainControllers]'

export default{
  init(){
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'));
  }
}