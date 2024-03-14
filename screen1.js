// Screen1.js
import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';

const Screen1 = () => {
  const [value, setValue] = React.useState(0);

  const buttonRef = useRef(null);

  const onClickButton = () => {
    setTimeout(() => {
      buttonRef?.current?.measure((fx, fy, width, height, px, py) => {
        setValue(py);
      });
    }, 100);
  };

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
      <View
        ref={buttonRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="Calculate Button Page Y (py) value"
          onPress={onClickButton}
        />
        <Text style={{}}>Button Page Y (py) value: {value}</Text>
      </View>
    </View>
  );
};

export default Screen1;
