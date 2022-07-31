import Main from './components/main';
import Header from './components/header';
import './App.css';
import React from 'react';



class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}
}
export default App;
