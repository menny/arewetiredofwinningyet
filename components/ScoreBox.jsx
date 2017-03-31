import React from 'react';

import winsData from './data/wins.json';

class ScoreBox extends React.Component {
  render () {
    var winsCount=0;
    var failsCount=0;
    winsData.forEach(function(element) {
      if (element.state == "fail") failsCount++;
      if (element.state == "success") winsCount++;
    });
    
    return (<div id="score-box">
        <div>Trump vs World</div>
        <div className="score">{winsCount}:{failsCount}</div>
      </div>);
  }
}

module.exports = ScoreBox;