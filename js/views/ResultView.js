import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function (el) {
    this.init(el)
}

ResultView.render = function (data = []) {
    console.log(tag, 'render()', data)

    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 경로가 없습니다.'
}

ResultView.getSearchResultsHtml = function (data) {
    console.log(tag, 'getSearchResultsHtml()', data)
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html;
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item) {
    console.log(tag, 'getSearchItemHtml()', data)
    return `<li>
    <img src=${item.image} >
    <p>${item.name}</p>
    </li>`
}

export default ResultView