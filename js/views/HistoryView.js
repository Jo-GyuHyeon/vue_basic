import View from './View.js';

const tag = '[HistoryView]';

const HistoryView = Object.create(View);

HistoryView.message = {
  NO_KEYWORDS: '최근 검색어가 없습니다.'
};

HistoryView.setup = function(el) {
  this.init(el);

  return this;
};

HistoryView.render = function(data = []) {
  this.el.innerHTML = data.length
    ? this.getKeywordHtml(data)
    : this.message.NO_KEYWORDS;
  this.show();
};

HistoryView.getKeywordHtml = function(data) {
  return (
    data.reduce((html, item, index) => {
      html += `<li data-keyword="${item.keyword}">
      ${item.keyword}
      <span class="date">${item.date}</span>
      <button class="btn-remove"></button>
      </li>`;
      return html;
    }, '<ul class="list">') + '</ul>'
  );
};

export default HistoryView;
