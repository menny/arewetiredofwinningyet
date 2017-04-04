import React from 'react';
import ReactTooltip from 'react-tooltip';

import winsData from './data/wins.json';

class ScoreBox extends React.Component {
  render () {
    var winsCount=0;
    var winsToolTipElements = [];
    var failsCount=0;
    var failToolTipElements = [];
    winsData.forEach(function(element) {
      if (element.state == "fail") {
        failsCount++;
        failToolTipElements.unshift(<span key={"fail_"+failsCount}><br/>{element.title}</span>);
      }
      if (element.state == "success") {
        winsCount++;
        winsToolTipElements.unshift(<span key={"win_"+failsCount}><br/>{element.title}</span>);
      }
    });

    return (<div id="score-box">
        <div>Trump vs Humanity</div>
        <div className="score">
          <span data-tip="React-tooltip" data-for="trump-score">👱</span>
          &nbsp;{winsCount}:{failsCount}&nbsp;
          <span data-tip="React-tooltip" data-for="world-score">🌍</span>
        </div>
        <ReactTooltip id="trump-score" place="left" multiline={true} effect="solid" class='tooltip tooltipScore'>
            <u>Wins:</u>
            {winsToolTipElements}
        </ReactTooltip>
        <ReactTooltip id="world-score" place="right" multiline={true} effect="solid" class='tooltip tooltipScore'>
            <u>Fails:</u>
            {failToolTipElements}
        </ReactTooltip>
      </div>);
  }
}

module.exports = ScoreBox;