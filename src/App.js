import Main from './components/main';
import Header from './components/header';
import './App.css';
import React from 'react';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer/>
    </div>
  );
}
}
export default App;
