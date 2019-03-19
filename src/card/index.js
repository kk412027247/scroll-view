import React from "react";
const offset = 500;


export default class Index extends React.Component{

  // 默认值
  state = {
    show:false,
  };

  componentDidMount(){
    window.addEventListener('scroll',this.scroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scroll)
  }

  scroll = () => {
    // 获取元素距离浏览器顶部的距离
    const y = this.node.getBoundingClientRect().top;

    if(y < offset && !this.state.show){
      this.setState({show: true})
    }else if(y > offset && this.state.show){
      this.setState({show: false})
    }

  };

  getNode =  node => this.node = node;


  render(){

    const {show} = this.state;
    const style = {
      opacity: show ? 1 : 0,
      transform: show ? 'translateY(-200px)' : 'translateY(0)',
      backgroundColor:'red'
    };

    return(
      <div className={'card'} ref={this.getNode} style={style}/>
    )
  }

}
