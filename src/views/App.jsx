// import { observable } from 'mobx';
import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import Test from 'components/Test';
import Hello from 'components/Hello';

@observer
class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider {...this.props}>
        <Test />
        <Hello />
      </Provider>
    );
  }
}

export default App;
