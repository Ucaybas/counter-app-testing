const expect = require("chai").expect;

Feature('Counter App');

Scenario('First scenario - Add 2 of each item and verify total item count is 8', async ({ I, homePage }) => {
    await I.amOnPage("/");
    const itemsToAdd = [
        homePage.buttons.addItem,
        homePage.buttons.addItem.at(2),
        homePage.buttons.addItem.at(3),
        homePage.buttons.addItem.at(4)
    ];
    await homePage.addItems(itemsToAdd);
    await homePage.addItems(itemsToAdd);
    await homePage.validateTotalItemCount("8", "all the items are added successfully");
});

Scenario('Second scenario - Validate refreshing the cart will reset item count', async ({ I, homePage }) => {
    await I.amOnPage("/");
    await homePage.validateTotalItemCount("0");
    await homePage.addItem(homePage.buttons.addItem);
    await homePage.validateTotalItemCount("1");
    await homePage.refreshItems();
    await homePage.validateTotalItemCount("0");
});

Scenario('Third scenario - Delete item and verify total item count correctly updates', async ({ I, homePage }) => {
    await I.amOnPage("/");
    await homePage.validateTotalItemCount("0");
    await homePage.addItem(homePage.buttons.addItem);
    await homePage.validateTotalItemCount("1");
    await homePage.deleteItem(homePage.buttons.deleteItem);
    await homePage.validateTotalItemCount("0", "item is deleted successfully");
})

Scenario('Forth scenario - Subtract item from cart and verify the total item count updates', async ({ I, homePage }) => {
    await I.amOnPage("/");
    await homePage.validateTotalItemCount("0");
    await homePage.addItems([homePage.buttons.addItem]);
    await homePage.validateTotalItemCount("1");
    await homePage.subtractItem(homePage.buttons.subtractItem);
    await homePage.validateTotalItemCount("0");
})
