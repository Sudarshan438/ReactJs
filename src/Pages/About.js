import { Component } from 'react'
import User from '../components/User'
import UserClass from '../components/UserClass'
import UserContext from '../utils/Contexts/UserContext';

// const About = () => {
  // return (
  //   <>
  //     <div>About</div>
  //     {/* <User name="sudarshan438" location="nellore" /> */}
  //     <UserClass name="sudarshan415" location="HYD" />
  //   </>
  // )
// }

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Set Interval OP")
    }, 1000);
    console.log("Parent ComponentDidMount");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>About</div>
        <UserContext.Consumer>
          {(data) => (
            <div className="font-bold">{data.loggedInUser}</div>
          )}
        </UserContext.Consumer>
        <UserClass name="sudarshan415" location="HYD" />
        <UserClass name="Elon musk" location="USA" />
      </>
    )
  }
}

export default About

/**
 * Parent Constructor
 * Parent Render
    *  -- Child1 constructor
    *  -- Child1 Render
    
    *  -- Child2 constructor
    *  -- Child2 Render
    
    *  -- child1 componentDidMount
    *  -- child2 componentDidMount
  * Parent componentDidMount
 */