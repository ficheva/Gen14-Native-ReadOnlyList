'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Home View",
    "modulePath": "components/homeView/homeView",
    "icon": ""
}, {
    "title": "Data List",
    "modulePath": "components/dataListView/dataListView",
    "icon": ""
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;