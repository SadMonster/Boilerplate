let React = require("react"),
    ReactDOM = require("react-dom"),
    BrowserRouter = require("react-router-dom").BrowserRouter,
    Main = require("./сomponents/App");

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, document.getElementById("index") );