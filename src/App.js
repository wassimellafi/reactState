import logo from './logo.svg';
import './App.css';
import React from "react";
import Imageprofil from "./image/profile.png"
class App extends React.Component {
  person = {
    fullName :'wassim',
    bio: 'je suis ingénieur informatique (Génie logiciel)',
    imgSrc:Imageprofil,
    profession:'ingénieur informatique',
    show :false,
    time: 0
  }
  constructor(){
    super()
    this.state=this.person
    }
    change(){
      this.setState({
        show:!this.state.show
      })
    }
    componentDidMount() {
      this.countdown = setInterval(this.time.bind(this) ,1000);
     }
    componentWillUnmount() {
      clearInterval(this.countdown);
    }
    time() {
     this.setState({ time: this.state.time+1 });
    }
  render() {
    return(
    <div className="App">
      {
        this.state.show?
        <>
          <h1>fullname: {this.state.fullName}</h1>
      <h1>bio: {this.state.bio}</h1>
        <img src={this.state.imgSrc} className="App-logo" alt="logo" />
        <h1>profession: {this.state.profession}</h1>
        </> : <h1>show égale false</h1>
      }
        <input value={this.state.time}/><br/>
        <button onClick={() => this.change()} >toggle</button>
    </div>
  );
}
}

export default App;
