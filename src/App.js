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
    show: true
  };

  changeShowState = () => {
    (this.state.show)? this.setState({show: false}): this.setState({show: true});
  }

  render () {
    this.displayState = (this.state.show) ? 'flex' : 'none';

    return(
    <div className="App">
      <div style = {{display: this.displayState, flexDirection: 'column', justifyContent:'space-around'}}>
          <img src = {this.state.Person.imgSrc} alt = "presentation" style = {{borderRadius: '45%', width: '300px', height: '250px', margin: 'auto'}}></img>
          <h1 style = {{margin: '6px'}}>{this.state.Person.fullName}</h1>
          <h2 style = {{margin: '6px'}}>{this.state.Person.profession}</h2>
          <p style = {{textAlign: 'justify', textIndent: '40px', margin: '6px'}}>{this.state.Person.bio}</p>
      </div> 
      <button onClick = {this.changeShowState} style = {{borderRadius: '7px', padding: '5px', cursor: 'pointer'}}>Changer la vue</button>
    </div>
    );
  }
}

export default App;
