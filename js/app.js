import SearchModel from '../models/SearchModel.js';

new Vue({
  el: '#app',
  data: {
    query: '', //입력 부분을 맡고 있다
    submitted: false,
    searchResult: []
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
