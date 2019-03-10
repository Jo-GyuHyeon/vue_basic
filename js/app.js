import SearchModel from '../models/SearchModel.js';
import KeywordModel from '../models/KeywordModel.js';
import HistoryModel from '../models/HistoryModel.js';
new Vue({
  el: '#app',
  data: {
    query: '', //입력 부분을 맡고 있다
    submitted: false,
    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',
    keywords: [],
    history: [],
    searchResult: []
  },
  created() {
    this.selectedTab = this.tabs[0];
    this.fetchKeyword();
    this.fetchHistory();
  },
  methods: {
    onSubmit(e) {
      this.search();
    },
    onkeyup() {
      if (!this.query.length) this.onReset();
    },
    onReset() {
      this.resetForm();
    },
    onClick(tab) {
      this.selectedTab = tab;
    },
    onClickKeyword(keyword) {
      this.query = keyword;
      this.search();
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data;
      });
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data;
      });
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true;
        this.searchResult = data;
      });
    },
    resetForm() {
      this.query = '';
      this.submitted = false;
      this.searchResult = [];
    }
  }
});
