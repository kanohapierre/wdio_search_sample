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

Then(/^I should see a text containing (\w+)$/, async (message) => {
        // await expect(browser).toHaveTitleContaining(message);
        // await expect(SearchResultsPage.popinNotif).toBeExisting();
        // await SearchResultsPage.dismissNotif();

        const snippet = await SearchResultsPage.checkSnippet();
        console.log(await snippet);
        await expect(snippet).toHaveLinkContaining(message);
});

