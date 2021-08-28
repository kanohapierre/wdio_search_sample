const Page = require('./page');

class SearchPage extends Page {

    get searchBar() { return $('#search_form_input_homepage') }

    async search(searchText) {
        await this.searchBar.setValue(searchText);
        await this.searchBar.keys('Enter');
    }

    open() {
        return super.open("");
    }
}

module.exports = new SearchPage();
