import React,{ Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
// import { Provider } from 'mobx-react';
// import { syncHistoryWithStore } from 'mobx-react-router';
// import createHashHistory from 'history/createHashHistory';

// import * as stores from './stores';

// const hashHistory = createHashHistory();
// const { app, routing } = stores;
// const history = syncHistoryWithStore(hashHistory, routing);

export default class extends Component {
  
  
  render () {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }
    return (
      <div>
        <h2>程序出错了</h2>
      </div>
    );
  }
}
