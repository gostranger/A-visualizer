import React from 'react';
import Button from './Component/Button/Button';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Homecard from './Component/HomeCards/Homecard';
import * as Constants from './Constants';

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
      Content = <Button/>;
    }else if(this.state.currentMenu===Constants.MENU_SERVER){
      Content = <Homecard />;
    }else if(this.state.currentMenu===Constants.MENU_SETTINGS){
      Content = <Footer/>;
    }
    return (
      <div>
        <Header currentMenu={this.state.currentMenu} menuClickHandler={this.currentMenuHandler}/>
        {Content}
      </div>
    );
  }
}

export default App;
