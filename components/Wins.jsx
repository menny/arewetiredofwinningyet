import React from 'react';
import Link from 'link-react';
import ReactTooltip from 'react-tooltip';

import winsData from './data/wins.json';

function Win(props) {
    const tooltipId = "tooltip_"+Math.abs(Math.random());

    return <div id="win-container" className={"card "+props.winState}>
            <h3 id="win-title">{props.title}
                <span data-tip="React-tooltip" data-for={tooltipId} className={"win-state "+props.winState}>
                    &nbsp;{props.score}&nbsp;
                </span>
                <ReactTooltip id={tooltipId} place="left" multiline="true" effect="solid" class='rationale-tooltip'>
                    <u>Why?</u><br/>
                    { props.rationale }
                </ReactTooltip>
            </h3>
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
                        winsElements.unshift(<Win key={"possible_win_"+index} title={win.title} winState={win.state} score={score} details={win.text} link={win.link} rationale={win.rationale}/>)
                    })

        return (
            <div id="wins">{winsElements}</div>
        )
    }
}

module.exports = Wins;
