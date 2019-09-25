import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: '#fff',
  },
});

export default class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleChangeText = newLocation => {
    this.setState({search: newLocation});
  };

  handleSubmitEditing = () => {
    const {onSubmit} = this.props;
    const {search} = this.state;

    if (!search) return;

    onSubmit(search);
    this.setState({search: ''});
  };

  render() {
    const {placeholder} = this.props;
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          value={search}
          returnKeyType="send"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
