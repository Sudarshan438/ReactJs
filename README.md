Namaste React

github is a place where we can host git repositories
our application itself is not ready for production because we need to remove the console, comments and if you are application having huge image files you need to compress them(Image optimizations) / code splitting and also if application having 1000's of file you need to minify them

React can't itself make fast and production ready app
to an extent react makes our app fast but lot of packages / libraries / code / Js that makes our application fast / scalable and production ready

Parcel/Bundler (Zero configuration tool)
**Dev build
** Local server
** image optimization
** minification
** HMR
** file watcher algorithm
** Caching --> Faster builds
** Bundling
** Error Diagnostics
** compressing
** Tree shaking
** code splitting
** differential Bundling
** Consistent Hashing
** different dev and prod bundles



npm is basically manages the packages but it's not stands for node package manager
npm is standard repository for all the packages
All the libraries or code you need comes from npm

How can you make your app to use npm?
initialize the npm using npm init command

// react needs a root element to in order to take control on the application

// JSX => Babel transpiles it into React.createElement => JS Object => HTML Element(render);


/**
 * JSX is HTML like or XML like syntax
 * To Write multiple lines in JSX you need to wrap it in () so that babel understands where jsx is starting and where it ends
 * Attributes in JSX are of camelCase ex: className , tanIndex
 * When you are using multiple tags you should maintain a root element
 * using {} you can write Any JS code inside JSX
 * **** JSX prevents cross site attacks by sanitizing the data yiu placed inside {}
 */

 // React functional component
// FUNCTION which return some piece of jxs/React elements is called as a functional component


// NAMAMSTE FOOD APP
/**
 * Header
*     - LOGO
*     - Nav Items
 * Body
 *    - Search
 *    - Restaurant Container
 *      - Restaurant card
 *        - img
 *        - Name of Res, Start Rating, cuisines etc.
 */

 // React Hooks
 *** Normal JS functions(Utility functions) written by facebook developers
 1) useState()
 2) useEffect()


How react works under the hood 
*** React uses Reconcilliation Algorithm (React Fiber --> React 16 version)
  *** UI (Virtual DOM --> Representaion of the Actual DOM)
  React basically creates an Object(JS object) out of a component when you invoke it which is basically a React Virtual DOM object
    ***container
        *** 15 cards
        After filtering 15 cards to 10 cards
            *** 

**** DIff algorithm (React Fiber --> Reacts core algorithm -->  New way of finding the Diff and updating the UI)
    ** It basically finds the difference between the new/updated Virtual DOM and old Virtual DOM
    ** Based on the differences UI will be updated in the browser


*** MonoLith Architecture vs MicroService Architecture
  ** In monolith whole application can be built with same language
  ** All teams (UI/BACKEND/DATABASE) should work on the same repositary
  ** even for small change whole app needs to compiled and deployed too see the changes

  --------Microservice
  ** Here we can separate the Application into different services (UI/BACKEND/DATABASE/AUTH/SMS)
  ** We can use any language on each service depending on the use case
  ** Each team can have a dedicated service(UI/Backend) and they have their own deployment cycle
  ** Basically microservice we can use multiple technologies
  ** Each services can be run on a dedicated port and map each service with the domain
  ** Services can be talked to each other with API calls


  // ROUTING
  *** When you want define routes you should have a router config
  *** after router config you should provide the router config using RouterProvider component
  1) Client side Routing
  2) Server side Routing

// Class based components
  ** old way of creating components in react js
  ** We basically use componentDidmount for making api calls the reason is
    we first render the UI with basic details and then we make the api call once we have the api data we can fill in the data adter that in our component
    **such that react should not have to have wait for render till api is successfule
    ** same scenario applies for functional components too

  ** Basically in constructor we call super(props) this is becuase in the current component in order to access this.props or this we should call the super() for sure because till you invoke super() this keyword value is not fully ready

  ** some properties which are accessed from React Component(Parent) in our class components are 
    ** props
    ** state
    ** setState
    ** life cycle hooks etc

  Basic Life cycle Flow for class based components
    **Constructor
    ** Render
    ** ComponentDidMount


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

** Two phase for any component
  1) Render Phase (Constructor and Render)
  2) Commit phase (Updating dom, side effects and schedule updates)

 *** When there are multiple child instances what react does is first it batches up the render phase for all child components and then as commit phase takes time for doing dom manipulation it batches up the commit phase for all child components later after the render phase is done


 *** Life cycle hooks with diagram
 /// Mounting

    Constructor
    Render
      <Html>Dummy data</Html>
    ComponentDidMount
      API call
      State Updates

/// Updating
    Render
      <Html>with New State/Props data or force Update</Html>
    ComponentDidUpdate

//// Unmounting
    componentWillUnmount


/**
 * Code splitting
 * Dynamic bundling
 * chunking
 * lazy loading
 * on demand loading
 */
  

