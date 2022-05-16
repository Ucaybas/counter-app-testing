const { I } = inject();
const expect = require("chai").expect;

const badges = {
    itemsCount: locate(".navbar").find(".badge"),
    individualItemCount: locate(".badge.m-2")
}

const buttons = {
    addItem: locate(".btn.btn-secondary"),
    subtractItem: locate(".btn.btn-info.m-2"),
    deleteItem: locate(".btn.btn-danger"),
    refreshItems: locate(".btn.btn-success.m-2")
}

// Clicks on each item locator that is passed as an array
const addItems = locators => {
    locators.forEach(locator => {
        I.click(locator);
    });
}

const addItem = locator => {
    I.click(locator);
}

const subtractItem = locator => {
    I.click(locator);
}

const deleteItem = locator => {
    I.click(locator);
}

const refreshItems = () => {
    I.click(buttons.refreshItems)
}

// Validates the total item count is equal to the param
const validateTotalItemCount = async (expectedCount, successMessage) => {
    const count = await I.grabTextFrom(badges.itemsCount)
    expect(count).to.equal(expectedCount, `Expected ${expectedCount} items in total but there was ${count}`);
    // Only added this log as the criteria expects particular print in certain scenarios
    if (successMessage) {
        console.log(successMessage);
    }
}

module.exports = {
    badges,
    buttons,
    addItems,
    addItem,
    subtractItem,
    refreshItems,
    deleteItem,
    validateTotalItemCount
}

