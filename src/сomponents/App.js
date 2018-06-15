let Switch = require("react-router-dom").Switch,
    Route = require("react-router-dom").Route,
    Link = require("react-router-dom").Link,
    Home = require("./Views/Home"),
    Page = require("./Views/Page"),
    React = require("react");

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Wonder SPA</h2>
                <Link to='/'>GO HOME</Link>
                <Link to='/somePage'>VIEW SOMETHING</Link>
                <Link to='/somePage2'>VIEW NOTHING</Link>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/somePage' component={Page} />
                </Switch>
            </div>
        )
    }
}

module.exports = App;

