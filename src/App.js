import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     };
    
    constructor(){
        super();
        console.log("App - Constructor");
    }

    componentDidMount(){
        console.log("App - Mounted");
    }
    
    handleIncrement = (counter) => {
        const counters = [...this.state.counters], index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    
    handleDelete = id => {
        const counters = this.state.counters.filter((c) => c.id !== id);
        this.setState({ counters });
    };

    render() { 
        console.log("App - Rendered");

        return (
            <>
                <NavBar numItems={ this.state.counters.filter((c) => c.value > 0).length }/>
                <main className="container">
                    <Counters 
                        onReset={ this.handleReset }
                        onDelete={ this.handleDelete }
                        onIncrement={ this.handleIncrement }
                        counters={ this.state.counters }
                    />
                </main>
            </>
        );
    }
}
 
export default App;