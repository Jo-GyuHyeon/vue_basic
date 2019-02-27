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

HistoryView.render = function(data = []) {};

export default HistoryView;
