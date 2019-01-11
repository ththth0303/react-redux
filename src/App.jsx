import React, { Component } from 'react';
import Counters from './components/counters';
class App extends Component {
    state = {
        counts: [
            { id: 1, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 2 },
            { id: 4, value: 5 },
        ]
    }
    handleDelete = id => {
        const counts = this.state.counts.filter(count => count.id !== id);
        this.setState({ counts });
    }
    handleReset = () => {
        const counts = this.state.counts.map(count => {
            count.value = 0;
            return count;
        });
        this.setState({ counts })
    }
    handleIncrement = (count) => {
        let counts = [...this.state.counts];
        const index = counts.indexOf(count);
        counts[index].value++;
        this.setState({ counts: this.state.counts });
    }
    render() { 
        return ( 
            <React.Fragment>
                {/* <Navbar total={this.state.counts.filter(c => c.value > 0).length}/> */}
                <main className="container">
                    <Counters 
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        counters={this.state.counts}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default App;