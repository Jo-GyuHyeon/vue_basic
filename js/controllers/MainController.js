import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainControllers]'

export default {
  init() {
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onRestFrom())

    TabView.setup(document.querySelector('#tabs'))

    ResultView.setup(document.querySelector('#search-result'))

    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView(){
    console.log(tag, 'renderView()');
    TabView.setActiveTab(this.selectedTab);
    ResultView.hide();
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
    ResultView.hide()
  },

  onSearchResult(data){
    ResultView.render(data)
  }
}