import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import Block from '../Block';

interface Props extends TextInputProps {}

export default function TextInput({...rest}: Props) {
  return (
    <Block padding={10} borderWidth={1} borderColor="neutral.400" fill>
      <RNTextInput style={styles.textInput} {...rest} />
    </Block>
  );
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
  },
});
