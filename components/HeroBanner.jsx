import React from 'react';
import Link from 'link-react';

var HeroBanner = React.createClass({
    render: function() {
        return (
            <p id="hero">
                <div id="hero-quote">
                    <h2>"Nobody knew health care could be so complicated"<Link className="citation" href="http://www.cnn.com/2017/02/27/politics/trump-health-care-complicated/">&nbsp;&nbsp;</Link></h2>
                    <p>- President Donald J. Trump</p>
                </div>
            </p>
        );
    }
});

module.exports = HeroBanner;