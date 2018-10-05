import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    user: {},
    isLoading: true
  }

  async componentDidMount(){
    statusbar.setHidden(true)
    try{
        const user = await WebAuthentication.currentAuthenticatedUser()
        this.setState({user, isLoading:false})
    }
    catch(err){
        this.setState({isLoading:false})
    }
  }

  async componentWillReceiveProps(nextProps){
    try{
        const user = await WebAuthentication.currentAuthenticatedUser()
        this.setState({ user })
    }
    catch(err){
        this.setState({ user: {} })
    }
  }

  render() {

    if(this.state.isLoading){
      return null
    }

    let loggedIn = false

    if(this.state.user.username){
      loggedIn = true
    }

    if(loggedIn){
      return(
        <Nav />
      )
    }

    return (
      <Tab/>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
