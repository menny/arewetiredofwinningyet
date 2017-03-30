import React from 'react';
import Link from 'link-react';

import winsData from './data/wins.json';

function Win(props) {
  return <div id="win-container" className="card">
        <h3 id="win-title">{props.title}<span className={"win-state "+props.winState}/></h3>
        <p id="win-details">{props.details}<Link className="citation" href={props.link}>&nbsp;&nbsp;</Link></p>
    </div>;
}

class Wins extends React.Component {
  render () {
      return (
            <div id="wins">
                {
                    winsData.map(function(win, index) {
                        return <Win title={win.title} winState={win.state} details={win.text} link={win.link}/>
                    })
                }
            </div>
        )
  }
}

module.exports = Wins;
