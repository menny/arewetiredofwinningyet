var React = require('react');

var HeroBanner = React.createClass({
    render: function() {
        return (
            <p id="hero">
                <div id="hero-quote">
                    <h2>"Nobody knew health care could be so complicated"</h2>
                    <p>- President Donald J. Trump</p>
                </div>
            </p>
        );
    }
});

module.exports = HeroBanner;