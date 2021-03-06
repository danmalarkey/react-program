/**
 * Created by danmalarkey on 7/1/16.
 */

var React = require("react");
var transparentBg = require("../styles").transparentBg;

var PromptContainer = React.createClass({
    getInitialState() {
        return {
            username: ""
        }
    },
    onUpdateUser(e) {
        this.setState({
            username: e.target.value
        });
    },
    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Github Username"
                            onchange={this.onUpdateUser}
                            value={this.state.username}/>
                        </div>
                    </form>
                </div>
                <div className="form-group col-sm-4 col-sm-offset-4">
                    <button className="btn btn-block btn-success" type="submit">Continue</button>
                </div>
            </div>
        )
    }
});

module.exports = PromptContainer;
