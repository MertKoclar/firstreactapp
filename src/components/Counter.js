import React,{Component} from "react";

class Counter extends Component {
    state = {
        count: 0,
    }

    increase() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    decrease() {
        this.setState({
            count: this.state.count - 1,
        });
    }
    render() {
        return <>
            <p>Sayı: {this.state.count}</p>
            <button onClick={() => this.increase()}>Arttır</button>
            <button onClick={() => this.decrease()}>Azalt</button>
        </>;
    }
}

export default Counter;