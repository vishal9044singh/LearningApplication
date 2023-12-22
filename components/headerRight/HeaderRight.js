import React from 'react';
import { View } from 'react-native';
import Notifications from './Notifications';
import Share from './Share';

const HeaderRight = ({ onNotificationPress, onSharePress }) => (
  <View style={{ flexDirection: 'row', marginRight: 10}}>
    <Notifications onPress={onNotificationPress} />
    <Share onPress={onSharePress} />
  </View>
);

export default HeaderRight;