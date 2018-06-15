let Redux = require("redux"),
    reducers = require("src/redux-app-libs/reducers");

module.exports = {
    store: Redux.createStore(reducers.mainReducer)
}