import React, { Component } from 'react';
import Navi from './Navi/Navi';
import router from '../router';
import Footer from './Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navi />
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
