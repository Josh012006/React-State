import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props){
    super(props);
    this.displayState =  (this.state.show)? 'flex': 'none';
  }

  state = {
    Person: {
      fullName: "Josué Mongan",
      bio: "As a student with a passion for computer science, I plan to study robotics at university. I'm currently learning software development at GomyCode.",
      imgSrc: "./presentation.jpg",
      profession: "Junior Software Engineer"
    },
    show: true,
    interval: null,
    elapsedTime: 0
  };

  changeShowState = () => {
    (this.state.show)? this.setState({show: false}): this.setState({show: true});
  }

  componentDidMount () {
    // Setting an interval that increment the time each second
    const interval = setInterval(() => {this.setState((prevState) => ({elapsedTime: prevState.elapsedTime + 1}))}, 1000);
    this.setState({interval});
  }

  componentWillUnmount () {
    // The interval is cleared each time the page is reloaded and a new one is started
    clearInterval(this.state.interval);
  }


  render () {
    this.displayState = (this.state.show) ? 'flex' : 'none';

    return(
    <div style = {{width: '400px'}}>
      <div className="App">
        <div style = {{display: this.displayState, flexDirection: 'column', justifyContent:'space-around'}}>
            <img src = {this.state.Person.imgSrc} alt = "presentation" style = {{borderRadius: '45%', width: '300px', height: '250px', margin: 'auto'}}></img>
            <h1 style = {{margin: '6px'}}>{this.state.Person.fullName}</h1>
            <h2 style = {{margin: '6px'}}>{this.state.Person.profession}</h2>
            <p style = {{textAlign: 'justify', textIndent: '40px', margin: '6px'}}>{this.state.Person.bio}</p>
        </div> 
        <button onClick = {this.changeShowState} style = {{borderRadius: '7px', padding: '5px', cursor: 'pointer'}}>Changer la vue</button>
      </div>
      <div className = "intervalWatcher">
        <label htmlFor = "intervalDisplay">Time elapsed since the component was last mounted:  <br/><br/> <input readOnly id = "intervalDisplay" value = {this.state.elapsedTime} type='text'></input></label>
      </div>
    </div>
    );
  }
}

export default App;
