import React from 'react';
import Comp from './components/Comp.jsx';

export default class App extends React.Component {
  
  constructor (props) {
    super(props);
  }
  
  render () {
    return <Comp {...this.props}/>
  }
}
