const Page = require('./page');

class SearchResultsPage extends Page {

    get popinNotif() { return $('#links_wrapper > div.results--main > div.ia-modules.js-ia-modules > div > div > div > div.user-loc-tooltip.js-user-loc-tooltip.user-loc-tooltip--below.user-loc-tooltip--animation > div.user-loc-tooltip__inner.js-user-loc-tooltip-inner > span') }
    get resultSnippet() {return $('#r1-0 > div > h2 > a.result__a.js-result-title-link')}

    async dismissNotif() {
        await this.popinNotif.click();
    }

    async checkSnippet() {
        await this.resultSnippet.scrollIntoView();
        return this.resultSnippet.getText();
    }

}

module.exports = new SearchResultsPage();