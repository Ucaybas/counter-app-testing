const expect = require("chai").expect;

Feature('Counter App');

xScenario('First scenario - Add 2 of each item and verify total item count is 8', async ({ I, homePage }) => {
    await I.amOnPage("/");
    const itemsToAdd = [
        homePage.buttons.addItem,
        homePage.buttons.addItem.at(2),
        homePage.buttons.addItem.at(3),
        homePage.buttons.addItem.at(4)
    ]
    await homePage.addItems(itemsToAdd);
    await homePage.addItems(itemsToAdd);

    const itemCount = await I.grabTextFrom(homePage.badges.itemsCount);
    expect(itemCount).to.equal("8", `Expected 8 items in total but there was ${itemCount}`);
    console.log("all the items are added successfully")
});

Scenario('Second scenario - Validate refreshing the cart will reset item count', async ({ I, homePage }) => {
    await I.amOnPage("/");
    homePage.validateTotalItemCount("0");
    homePage.addItems(homePage.buttons.addItem);
    homePage.validateTotalItemCount("1");
    homePage.refreshItems();
    homePage.validateTotalItemCount("0");
});

Scenario('Third scenario - Delete item and verify total item count correctly updates', async ({ I, homePage }) => {
    await I.amOnPage("/");
    homePage.validateTotalItemCount("0");
    homePage.addItems(homePage.buttons.addItem);
    homePage.validateTotalItemCount("1");
    homePage.deleteItems(homePage.buttons.deleteItem)
    homePage.validateTotalItemCount("0");
    console.log("item is deleted successfully");
})
