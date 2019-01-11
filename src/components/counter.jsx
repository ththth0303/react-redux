import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return <div>
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>
            <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.value)}>
                Increment
            </button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.value.id)}>
                Delelte
            </button>
          </div>;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.value.value === 0 ? "warning" : "primary";
        
        return classes;
    }

    formatCount() {
        const  count  = this.props.value.value;
        
        return count ? count : "Zero";
    }
}
 
export default Counter;