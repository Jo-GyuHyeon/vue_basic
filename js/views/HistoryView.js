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
  return this;
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

HistoryView.bindRemoveBtn = function() {
  Array.from(this.el.querySelectorAll('button.btn-remove')).forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      this.onRemove(btn.parentElement.dataset.keyword);
    });
  });
};

HistoryView.onRemove = function(keyword) {
  this.emit('@remove', { keyword });
};

export default HistoryView;
