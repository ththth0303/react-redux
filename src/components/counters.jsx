import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        return <React.Fragment>
            <button className="btn btn-primary m-2" onClick={this.props.onReset}>
              Reset
            </button>
            {this.props.counters.map(count => (
              <Counter
                key={count.id}
                value={count}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
              />
            ))}
          </React.Fragment>;
    }
}
 
export default Counters;