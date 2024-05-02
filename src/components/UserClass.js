import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Dummy Location",
            }
          }
        console.log(this.props.name, "Child constructor")
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Sudarshan438");
        const user = await data.json();
        this.setState({
            userInfo: user
        })
        console.log(this.props.name, "Child componentDidMount")
    }
    render() {
        console.log(this.props.name, "Child render")
        // const {name, location} = this.props;
        const {name, location = "Nellore" } = this.state.userInfo;
        return (
            <div className="user-card">
                <h1>Name: {name}</h1>
                <h1>Location: {location}</h1>
                <h1>Contact: 8328138768</h1>
            </div>
          )
    }
}

export default UserClass;