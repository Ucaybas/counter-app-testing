const expect = require("chai").expect;

Feature('Counter App');

Scenario('First scenario - Add 2 of each item and verify total item count is 8', async ({ I, HomePage }) => {
    await I.amOnPage("/");
    const itemsToAdd = [
        HomePage.buttons.addItem,
        HomePage.buttons.addItem.at(2),
        HomePage.buttons.addItem.at(3),
        HomePage.buttons.addItem.at(4)
    ];
    await HomePage.addItems(itemsToAdd);
    await HomePage.addItems(itemsToAdd);
    await HomePage.validateTotalItemCount("8", "all the items are added successfully");
});

Scenario('Second scenario - Validate refreshing the cart will reset item count', async ({ I, HomePage }) => {
    await I.amOnPage("/");
    await HomePage.validateTotalItemCount("0");
    await HomePage.addItem(HomePage.buttons.addItem);
    await HomePage.validateTotalItemCount("1");
    await HomePage.refreshItems();
    await HomePage.validateTotalItemCount("0");
});

Scenario('Third scenario - Delete item and verify total item count correctly updates', async ({ I, HomePage }) => {
    await I.amOnPage("/");
    await HomePage.validateTotalItemCount("0");
    await HomePage.addItem(HomePage.buttons.addItem);
    await HomePage.validateTotalItemCount("1");
    await HomePage.deleteItem(HomePage.buttons.deleteItem);
    await HomePage.validateTotalItemCount("0", "item is deleted successfully");
})

Scenario('Forth scenario - Subtract item from cart and verify the total item count updates', async ({ I, HomePage }) => {
    await I.amOnPage("/");
    await HomePage.validateTotalItemCount("0");
    await HomePage.addItems([HomePage.buttons.addItem]);
    await HomePage.validateTotalItemCount("1");
    await HomePage.subtractItem(HomePage.buttons.subtractItem);
    await HomePage.validateTotalItemCount("0");
})
