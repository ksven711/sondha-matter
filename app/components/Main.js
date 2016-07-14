/**
 * Created by vshan on 7/12/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <img src="images/rangu.jpg" />
            </div>
        )
    }
});

ReactDOM.render(<Main />, document.getElementById('app'));