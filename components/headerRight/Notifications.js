import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Notifications({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginRight: 16 }} activeOpacity={0.8}>
      <Ionicons name="notifications" size={21} color="white" />
    </TouchableOpacity>
  )
}
