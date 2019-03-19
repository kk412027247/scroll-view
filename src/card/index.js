import React from "react";

export default class Index extends React.Component{

  // 默认值
  state = {y:1000};

  componentDidMount(){
    window.addEventListener('scroll',this.scroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scroll)
  }

  scroll = () => {
    // 获取元素距离浏览器顶部的距离
    const y = this.node.getBoundingClientRect().y;
    // 同步到state
    this.setState({y});
  };

  getNode =  node => this.node = node;

  render(){
    const {y} = this.state;
    const offset = 500;
    const style = {
      opacity: y < offset ? 1 : 0,
      transform: y < offset ? 'translateY(-200px)' : 'translateY(0)',
    };
    return(
      <div className={'card'} ref={this.getNode} style={style}/>
    )
  }
}
