import React from 'react';
import { View } from 'react-native';
import Notifications from './Notifications';
import Share from './Share';

export default function HeaderRight({ onNotificationPress, onSharePress }) {
  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      <Notifications onPress={onNotificationPress} />
      <Share onPress={onSharePress} />
    </View>
  );
}