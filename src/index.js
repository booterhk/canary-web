import { render } from 'react-dom';
import Router from './router';
import React from 'react';

init(Router);

if (module.hot) {
  module.hot.accept('./router.js', ()=> {
    console.log('有更新')
  })
}

function init(Router) {
  render(<Router />,document.getElementById('root'));
}
