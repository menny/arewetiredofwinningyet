import React from 'react';
import {render} from 'react-dom';

import TopBanner from './TopBanner.jsx';
import HeroBanner from './HeroBanner.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
            <TopBanner/>
            <HeroBanner/>
        </div>);
  }
}

render(<App/>, document.getElementById('container'));