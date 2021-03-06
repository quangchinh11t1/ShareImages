import React from 'react'
import {Dimensions} from 'react-native'
import { SearchBar } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => deviceWidth * percent / 100;

export default class Searchbar extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar 
        platform= "android"
        lightTheme = {true}
        placeholder="Tìm kiếm ý tưởng"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

