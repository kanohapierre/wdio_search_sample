const { Given, When, Then } = require('@cucumber/cucumber');

const SearchPage = require('../pageobjects/search.page');
const SearchResultsPage = require('../pageobjects/searchResults.page');


Given(/^I am on the (\w+) page$/, async (page) => {
    await SearchPage.open();
});

When(/^I search the word (\w+)$/, async (searchText) => {
    await SearchPage.search(searchText);
});

Then(/^I should see a browser title containing (\w+)$/, async (title) => {
    await expect(browser).toHaveTitleContaining(title);
    await expect(SearchResultsPage.popinNotif).toBeExisting();
    await SearchResultsPage.dismissNotif();
});

Then(/^I should see a Sonepar displayed in (\w+)$/, async (message) => {
        await SearchResultsPage.checkSnippet(message);
});

