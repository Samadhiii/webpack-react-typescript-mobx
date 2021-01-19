// import { observable } from 'mobx';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('Test')
@observer
class App extends Component {
  componentDidMount() {

  }

  render() {
    const { Test } = this.props;
    return (
      <div>
        <h1>
          <p>{Test.num}</p>
          Hello DATATOM.CLOUD Micro Frontend
          <p onClick={() => Test.addNum()} style={{ cursor: 'pointer' }}>Click to Add</p>
        </h1>
      </div>
    );
  }
}

export default App;
