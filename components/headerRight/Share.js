import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export default function Share({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ marginRight: 5 }} activeOpacity={0.8}>
            <Image
                style={{ width: 20, height: 20, tintColor: 'white' }}
                source={require('../../assets/icons/shareIcon.png')}
            />
        </TouchableOpacity>
    );
};