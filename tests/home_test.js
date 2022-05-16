const expect = require("chai").expect;

Feature('home');

Scenario('First scenario - Add 2 of each item and verify item count of 8', async ({ I, homePage }) => {
    await I.amOnPage("/");
    // I.click(homePage.buttons.addItem)
    // I.click(homePage.buttons.addItem)
    // I.click(homePage.buttons.addItem.at(2))
    // I.click(homePage.buttons.addItem.at(2))
    // I.click(homePage.buttons.addItem.at(3))
    // I.click(homePage.buttons.addItem.at(3))
    // I.click(homePage.buttons.addItem.at(4))
    // I.click(homePage.buttons.addItem.at(4))
    const itemsToAdd = [
        homePage.buttons.addItem,
        homePage.buttons.addItem.at(2),
        homePage.buttons.addItem.at(3),
        homePage.buttons.addItem.at(4)
    ]
    await homePage.clickLocators(itemsToAdd);
    await homePage.clickLocators(itemsToAdd);


    const itemCount = await I.grabTextFrom(homePage.badges.itemsCount);
    console.log(itemCount)
    expect(itemCount).to.equal(8)

    I.wait(5);
});
