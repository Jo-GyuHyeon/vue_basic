import FormView from '../views/FormView.js';

const tag = '[MainControllers]'

export default{
  init(){
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit',e => this.onSubmit(e.detail.input))
      .on('@reset',e => this.onRestFrom())
  },

  onSubmit(input){
    console.log(tag,'onSubmit()',input);
  },

  onRestFrom(){
    console.log(tag,'onRest()');
  }
}