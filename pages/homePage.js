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

// Clicks on each locator that is passed as an array
const clickLocators = locators => {
    locators.forEach(locator => {
        I.click(locator);
    })
}



module.exports = {
    badges,
    buttons,
    clickLocators
}

