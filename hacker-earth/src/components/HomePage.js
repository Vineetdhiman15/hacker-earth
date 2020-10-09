import React from 'react';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { getDataOnLoad } from '../redux/action/index';

class HomePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {
      this.props.getDataOnLoad()
    }

    handleClick=()=>{
      this.setState({
        listCount : this.props.data,
        buttonVisible : false
      })
    }

    render() {

      return (
        this.props.data == null ? 'Loading' :
        <div>
        <h3>Order Description</h3>
        <div className='columnContainer'>
        <table>
          <thead>
            <tr>
              <th>Items({this.props.data.length-1})</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((items, i) => (
              <TableRow key={i} data={items} />
            ))}
          </tbody>
        </table>
        <table className='totalTable'>
          <thead>
          <tr>Total</tr>
          </thead>
          <tbody>
            <tr>Items({this.props.data.length-1}): </tr>
            <tr>Discount:{this.props.data.discount}</tr>
            <tr>Type Discount:</tr>
            <tr>Order Total:</tr>
            </tbody>
        </table>
        </div>
        </div>
        );
      }
    }



    const mapStateToProps = state => ({
        data : state.dataResponse
    })

    const mapDispatchToProps = dispatch => ({
      getDataOnLoad: () => dispatch(getDataOnLoad()),
    })

    export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
