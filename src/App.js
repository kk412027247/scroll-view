import React, { Component } from 'react';
import './App.css';
import Card from './card';


class App extends Component {

  render() {

    // 生成20个方块
    // const arr = Array(20).fill(1);
    const arr = [];

    for(let i =0; i< 20; i ++){
      arr.push(i)
    }

    return (
      <div className='wrap'>
        <h1>请往下滑动⬇⬇⬇⬇⬇⬇⬇⬇</h1>
        <div className="App">
          {/*元素自适应页面宽度，自动居中*/}
          {arr.map((item, index)=><Card key={index}/>)}
        </div>
        <p>已经滑倒底了</p>
      </div>
    );

  }

}


export default App;
