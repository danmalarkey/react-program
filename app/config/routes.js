/**
 * Created by danmalarkey on 6/30/16.
 */

var React = require("react"),
    ReactRouter = require("react-router"),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hasHistory = ReactRouter.hashHistory,
    Main = require("../components/Main"),
    Home = require("../components/Home"),
    PromtContainer = require("../containers/PromptContainer");

var routes = (
    <Router history={hasHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" />
        </Route>
    </Router>
);

module.exports = routes;
