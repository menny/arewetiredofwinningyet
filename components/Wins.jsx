import React from 'react';
import Link from 'link-react';

import winsData from './data/wins.json';

function Win(props) {
  return <div id="win-container" className="card">
        <h3 id="win-title">{props.title}<span className={"win-state "+props.winState}>&nbsp;{props.score}&nbsp;</span></h3>
        <p id="win-details">{props.details}<Link className="citation" href={props.link}>&nbsp;&nbsp;</Link></p>
    </div>;
}

class Wins extends React.Component {
    render () {
        var failsCount=0;
        var winsCount=0;

        var winsElements = [];
        winsData.reverse().map(function(win, index) {
                        if (win.state == "fail") failsCount++;
                        if (win.state == "success") winsCount++;
                        const score = winsCount+":"+failsCount;
                        winsElements.unshift(<Win key={"possible_win_"+index} title={win.title} winState={win.state} score={score} details={win.text} link={win.link}/>)
                    })

        return (
            <div id="wins">{winsElements}</div>
        )
    }
}

module.exports = Wins;
