import React from "react";
import menus from '../Conigurations/Configure';
import Menus from './Menus'
class Header extends React.Component {

  render() {
    const listitem = menus.map((i) => {
      return <Menus key={i.key} item={i} current={this.props.currentMenu} menuClickHandler={this.props.menuClickHandler}/>
    });

    return (
      <div className="navbar navbar-expand-lg responsive navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className=" container navbar-nav mr-auto">
            {listitem}
          </ul>
        </div>
      </div>
    );
  }
}


export default Header;
