import React, {Component} from 'react'

class Estados extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }

        setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    render() {
        return <span>
            Contador: {this.state.count}
        </span>
    }
}

export default Estados