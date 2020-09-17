import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    currentPage: "profile"
  }

  handleMenu = (id) => {
    this.setState({
      currentPage: id
    })

    
  }

  displayCard = () => {
    if (this.state.currentPage === "profile"){
      return (<Profile />)
    }
    else if (this.state.currentPage === "photo"){
      return (<Photos />)
    }
    else if (this.state.currentPage === "cocktail"){
      return (<Cocktails />)
    }
    else if (this.state.currentPage === "pokemon"){
      return (<Pokemon />)
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar handleMenu={this.handleMenu}/>
        {this.displayCard()}
      </div>
    )
  }

}

export default MainBox
