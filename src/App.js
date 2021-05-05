import React from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import * as Constants from './Constants';
import Server from './Component/Server/Server';
import Settings from './Component/Settings/Settings';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentMenu:"Home"
    }
    this.currentMenuHandler = this.currentMenuHandler.bind(this);
  }

  currentMenuHandler(event){
      this.setState({currentMenu:event.target.value});
  }
  render(){
    
    let Content;
    if(this.state.currentMenu===Constants.MENU_HOME){
      Content = <Home/>;
    }else if(this.state.currentMenu===Constants.MENU_SERVER){
      Content = <Server />;
    }else if(this.state.currentMenu===Constants.MENU_SETTINGS){
      Content = <Settings/>;
    }
    let customStyle = {
      'min-height': '100vh'
    }
    return (
      <div className="d-flex flex-column" style={customStyle}>
        <Header currentMenu={this.state.currentMenu} menuClickHandler={this.currentMenuHandler}/>
        <div className="container flex-grow-1">
            {Content}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
