import React, { Component } from 'react';
import { connect } from 'react-redux';
import { windowResize } from '../actions';

const Fragment = React.Fragment;

class Home extends Component {
 
  componentWillMount(){
    window.addEventListener('resize', this.resizeHandler.bind(this));
    this.resizeHandler();
  }

  componentDidMount(){
  
  }


  resizeHandler(e){
    this.props.dispatch(windowResize({
      width: window.innerWidth,
      height: window.innerHeight
    }));
    
  }

  render() {


    return (
      <Fragment>
        Columbus
      </Fragment>
    );
  }
}

let mapStateToProps = state => {
  return {
    windowHeight: state.windowHeight
  }
}

export default connect(mapStateToProps)(Home);