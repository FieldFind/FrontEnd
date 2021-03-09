import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export default class MyComponent extends React.Component {
  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <Searchbar
        style={{borderRadius:25}}
        placeholder="Search"
        onChangeText={query => { this.setState({ firstQuery: query })}}
        value={firstQuery}
      />
    );
  }
}