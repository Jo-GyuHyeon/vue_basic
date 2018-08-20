import FormView from '../views/FormView.js';

const tag = '[MainControllers]'

export default{
  init(){
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit',e => this.onSubmit(e.detail.input))
      .on('@reset',e => this.onRest(e.detail.input))
  },

  onSubmit(input){
    console.log(tag,'onSubmit()',input);
  },

  onRest(input){
    console.log(tag,'onRest()',input);
  }
}