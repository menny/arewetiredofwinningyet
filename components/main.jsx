import React from 'react';
import {render} from 'react-dom';

import TopBanner from './TopBanner.jsx';
import HeroBanner from './HeroBanner.jsx';
import Wins from './Wins.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
            <TopBanner/>
            <HeroBanner/>
            <Wins/>
        </div>);
  }
}

render(<App/>, document.getElementById('container'));