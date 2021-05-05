import React from 'react';
class Menus extends React.Component {
    clickButton(event){
        
    }
    render(){
      return (
        <li key={this.props.item.key} className="nav-item">
          <button className={this.props.current===this.props.item.key?"nav-link btn active":"nav-link btn" } value={this.props.item.key} onClick={this.props.menuClickHandler}>
            {this.props.item.key}
          </button>
        </li>
      );
    }
}

export default Menus;