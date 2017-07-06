'use strict';

import Button from './components/Button'
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');

if (!headers) {
  headers = ['Title', 'Year', 'Rating', 'Comments'];
  data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
  <div style={ {padding: '20px' }}>
    <h1>コンポーネント一覧</h1>

    <h2>Logo</h2>
    <div style={{ display: 'inline:block', background: 'purple'}}>
      <Logo/>
    </div>
    <h2>Button</h2>
    <div>onClickが指定されたButton: <Button onClick={() => alert('クリックされました')}>クリック</Button></div>
    <div>hrefが指定されたButton: <Button href="http://reactjs.com">フォローする</Button></div>
    <div>クラス名が指定されたButton: <Button className="custom">何もしません</Button></div>
  </div>
  ,
  document.getElementById('pad')
);
