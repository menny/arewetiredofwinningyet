import React from 'react';

import winsData from './data/wins.json';

class ScoreBox extends React.Component {
  render () {
    var wins=0;
    var fails=0;
    winsData.forEach(function(element) {
      if (element.state == "fail") fails++;
      if (element.state == "success") wins++;
    });
    
    return (<div id="score-box">
        <div>Trump vs World</div>
        <div className="score">{wins}:{fails}</div>
      </div>);
  }
}

module.exports = ScoreBox;