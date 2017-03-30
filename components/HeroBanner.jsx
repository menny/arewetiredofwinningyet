import React from 'react';
import Link from 'link-react';

import ScoreBox from './ScoreBox.jsx';

import quotesData from './data/quotes.json';

class HeroBanner extends React.Component {
    render() {
        return (
            <p id="hero">
                <ScoreBox/>
                <div id="hero-quote">
                    <p className="quote-text">{"\""+quotesData[0].quote+"\""}<Link className="citation" href={quotesData[0].link}>&nbsp;&nbsp;</Link></p>
                    <p>- President Donald J. Trump</p>
                </div>
            </p>
        );
    }
}

module.exports = HeroBanner;