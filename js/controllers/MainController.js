import FormView from '../views/FormView.js';
import ResultView from '../views/ResultView.js';
import TabView from '../views/TabView.js';
import KeywordView from '../views/keywordView.js';

import SearchModel from '../models/SearchModel.js';
import KeywordModel from '../models/KeywordModel.js';

const tag = '[MainControllers]';

export default {
  init() {
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onRestForm());

    TabView.setup(document.querySelector('#tabs')).on('@change', e =>
      this.onChangeTab(e.detail.tabName)
    );

    KeywordView.setup(document.querySelector('#search-keyword')).on(
      '@click',
      e => this.onClickKeyword(e.detail.keyword)
    );
    ResultView.setup(document.querySelector('#search-result'));

    this.selectedTab = '추천 검색어';
    this.renderView();
  },

  renderView() {
    console.log(tag, 'renderView()');
    TabView.setActiveTab(this.selectedTab);

    if (this.selectedTab === '추천 검색어') {
      this.fetchSearchKeyword();
    } else {
      debugger;
    }

    ResultView.hide();
  },

  fetchSearchKeyword() {
    KeywordModel.list().then(data => {
      KeywordView.render(data);
    });
  },

  serarch(query) {
    console.log(tag, 'search()', query);
    FormView.setValue(query);
    SearchModel.list(query).then(data => {
      this.onSearchResult(data);
    });
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input);
    this.serarch(input);
  },

  onRestForm() {
    console.log(tag, 'onRest()');
    this.renderView();
  },

  onSearchResult(data) {
    TabView.hide();
    KeywordView.hide();
    ResultView.render(data);
  },

  onChangeTab(tabName) {
    debugger;
  },

  onClickKeyword(keyword) {
    this.serarch(keyword);
  }
};
