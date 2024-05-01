import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10,
        }
        console.log(this.props.name, "Child constructor")
    }
    componentDidMount() {
        console.log(this.props.name, "Child componentDidMount")
    }
    render() {
        console.log(this.props.name, "Child render")
        const {name, location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h1>Count: {count}</h1>
                <h1>Location: {location}</h1>
                <h1>Contact: 8328138768</h1>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>Click</button>
            </div>
          )
    }
}

export default UserClass;