import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { themeColors } from '../theme';
import { StyleSheet } from 'react-native';
import { InternetContextProvider } from '../context/internextContext';

const notifications = [
    {
        id: '1',
        name: 'Vishal Singh',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '2',
        name: 'Utkarsh Saxena',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '3',
        name: 'Vishal Singh',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '4',
        name: 'Utkarsh Saxena',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '5',
        name: 'Utkarsh Saxena',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '6',
        name: 'Vishal Singh',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
    {
        id: '7',
        name: 'Utkarsh Saxena',
        date: '9:30 PM',
        picture: 'url',
        action: 'Commented on your post',
        comment: '“I am interested in taking your property on rent. Contact me at +44-9879879870”',
    },
];

export default function NotificationsScreen() {
    const [notificationData, setNotificationData] = useState([]);

    useEffect(() => {
        setNotificationData(notifications);
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.notificationContainer}>
            <Image source={{ uri: item.picture }} style={styles.profileImage} />
            <View style={styles.notificationContent}>
                <View style={styles.contentTop}>
                    <Text style={styles.notificationName}>{item.name}</Text>
                    <Text style={styles.notificationDate}>{item.date}</Text>
                </View>
                <Text style={styles.action}>{item.action}</Text>
                <Text style={styles.notificationComment}>{item.comment}</Text>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 rounded-t-3xl bg-white">
                <InternetContextProvider>
                <Text style={styles.heading}>Notifications</Text>
                <FlatList
                    data={notificationData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
                </InternetContextProvider>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        padding: 20,
        color: themeColors.bgBold,
        fontWeight: 'bold',
    },
    notificationContainer: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        marginLeft: 10,
        marginRight: 10,
        borderTopWidth: 1,
        borderTopColor: '#96B6C7',
    },
    profileImage: {
        width: 50,
        height: 50,
        backgroundColor: 'cyan',
        borderRadius: 25,
        marginRight: 10,
        marginBottom: 25
    },
    notificationContent: {
        flex: 1,
        alignItems: 'flex-start',
    },
    contentTop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    action: {
        fontSize: 14,
        marginBottom: 5,
        color: themeColors.bg
    },
    notificationName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: themeColors.bgBold
    },
    notificationComment: {
        fontSize: 12,
        color: themeColors.formHeading
    },
    notificationDate: {
        fontSize: 12,
        color: '#888',
    },
});