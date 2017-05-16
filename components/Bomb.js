import React from 'react' // import react

class Bomb extends React.Component{
  constructor(props) {
    super()
    this.state = { secondsLeft: props.initialCount }
  }

  render() {
    // let timerLeft = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    // return(
    //   <p>{timerLeft}</p>
    // );
    if (this.state.secondsLeft === 0){
      return ( <div>Boom!</div> )
    } else {
      return ( <div>{this.state.secondsLeft} seconds left before I go boom!</div> )
    }
  }
}

export default Bomb;


// export default () => {
//   return <div></div>
// }  // export a function that returns a JSX element
