import './App.css';
import React from 'react';



class App extends React.Component {
  render() {

    return (
      <div className='App-header'>
        <p>hellow</p>
        {this.paragraph()}
      </div>

    )
  }


  paragraph() {
  return <p>paragraph</p>;
};
}
export default App;
