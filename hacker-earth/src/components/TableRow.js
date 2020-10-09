import React from 'react';
import { connect } from 'react-redux';

class TableRow extends React.Component {
  constructor(props){
    super(props);
    this.state={
      counter: 1,
    }
  }

handleClick = (e) => {
  console.log(e.target.id)
  if(e.target.id === 'increment'){
  this.setState({
    counter : this.state.counter +1
  })
}
else if (e.target.id === 'decrement') {
  this.setState({
    counter : this.state.counter -1
  })
}
}

render() {
return (
  <tr className='grid'>
    <td className='itemName'>{this.props.data.name}</td>
    <td className='quantity'><button id='increment' onClick={(e)=>this.handleClick(e)}>+</button><span className='details'>{this.state.counter}</span><button id='decrement' onClick={(e)=>this.handleClick(e)}>-</button></td>
    <td>${this.state.counter * this.props.data.price}</td>
  </tr>
);
}
}

  export default TableRow;
