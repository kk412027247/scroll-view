import React, { Component } from 'react';
import Index from './card';
import './App.css';


class App extends Component {
  render() {
    // 生成20个方块
    const arr = Array(20).fill(1);
    return (
      <main>
        <h1>请往下滑动⬇⬇⬇⬇⬇⬇⬇⬇</h1>
        <div className="App">
          {/*元素自适应页面宽度，自动剧中*/}
          {arr.map((item, index)=><Index key={index}/>)  }
        </div>
        <p>已经滑倒底了</p>
      </main>
    );
  }
}

export default App;
