// Screen1.js
import React from 'react';
import {View} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const Screen1 = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 800,
      }}>
      <ModalDropdown options={['option 1', 'option 2']} />
    </View>
  );
};

export default Screen1;
