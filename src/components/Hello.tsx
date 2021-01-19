import * as React from 'react';
import { observer, inject } from 'mobx-react';

interface IState {
  title: string
}

interface Iprops {
  count: number
}

@inject('Test')
@observer
class Hello extends React.PureComponent< Iprops, IState> {
  render() {
    return (
      <div>
        Hello Tsx
      </div>
    );
  }
}

export default Hello;
