let actionTypes = require("actionTypes");

let initialState = {

}

module.exports = {
    mainReducer: (state = initialState,action) => {

        let tempState = Object.assign({},state);

        switch (action.type) {
            case actionTypes.DEFAULT_ACTION:
                console.log("default action dispatched");
                break
            default:
                break
        }

        return tempState;
    }
}