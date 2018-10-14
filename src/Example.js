import React from 'react';

// functional component
// stateless component

// 效能較好

// function Example(props){
//   return(
//     <div>
//       <h1>props: {props.text}</h1>
//     </div>
//   );
// }

// class component
// stateful component

/*
class component 可以有自己的 stete (儲存狀態) 
class component 可以有自己的 method (事件綁定)，去處理和使用者的互動
class component 透過生命週期更好控制

在 class component 中要取得 props 變數需要使用 this.porps
*/

class Example extends React.Component{
  render(){
    return (
      <div>
        <h1>props: {this.props.text}</h1>
      </div>
    );
  }
}

export default Example;