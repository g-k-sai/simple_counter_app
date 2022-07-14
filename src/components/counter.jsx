import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white'
  };

  componentDidUpdate(prevProps, prevState){
    console.log("Counter - Updated");
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
  }

  componentWillUnmount(){
    console.log("Counter - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span style={ this.styles } className={ `badge m-2  badge-${this.formatBadgeType()}` }> { this.formatValue() } </span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2"> Increment </button>
        <button className="btn btn-danger btn-sm" onClick={ () => this.props.onDelete(this.props.counter.id) }>Delete</button>
      </div>
    );
  }

  formatValue(){
    const {value} = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  formatBadgeType(){
    const {value} = this.props.counter;
    return value === 0 ? 'warning' : 'primary';
  }
}

export default Counter;
