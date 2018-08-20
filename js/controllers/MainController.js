import FormView from '../views/FormView.js';
import ResultView from '../views/ResultView.js';

import SearchModel from '../models/SearchModel.js';

const tag = '[MainControllers]'

export default {
  init() {
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onRestFrom())

    ResultView.setup(document.querySelector('#search-result'))

  },

  serarch(query) {
    console.log(tag, 'search()', query)
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
   
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input);
    this.serarch(input)
  },

  onRestFrom() {
    console.log(tag, 'onRest()');
  },

  onSearchResult(data){
    ResultView.render(data)
  }
}