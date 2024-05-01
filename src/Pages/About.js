import { Component } from 'react'
import User from '../components/User'
import UserClass from '../components/UserClass'

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
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>About</div>
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