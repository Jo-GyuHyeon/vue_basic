new Vue({
  el: '#app',
  data: {
    query: '' //입력 부분을 맡고 있다
  },
  methods: {
    onSubmit(e) {
      e.preventDefault;
    },
    onkeyup() {
      if (!this.query.length) this.onReset();
    },
    onReset() {
      this.query = '';
      debugger;
    }
  }
});
