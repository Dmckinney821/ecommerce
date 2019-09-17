import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import  ShopPage  from './pages/shop/shop.component.jsx'

import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component.jsx'
import { auth } from './firebase/firebase.utils'

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null


componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user })
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route  exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
