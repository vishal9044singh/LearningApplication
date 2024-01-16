import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { themeColors } from '../../theme';

export default function SubscriptionPlans() {
    const [selectedSubsciption, setSelectedSubsctiption] = useState(1);

    const certificates = [
        { id: 1, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 2, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 3, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 4, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
    ];

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {certificates.map(certificate => (
                <TouchableOpacity
                    activeOpacity={0.9}
                    key={certificate.id}
                    style={styles.certificateContainer}
                    onPress={() => setSelectedSubsctiption(certificate.id)}>
                    <View style={styles.certificateContainer}>
                        <View style={{ flexDirection: 'row', width: '85%', height: '60%', justifyContent: 'space-around', alignItems: 'center' }}>
                            <Image source={{ uri: certificate.image }} style={styles.certificateImage} />
                            <View>
                                <Text style={styles.planType}>Basic Plan</Text>
                                <Text style={styles.amount}>&#8377; 1500</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.expiresOn}>Expires On: </Text>
                            <Text style={styles.valadity}>12 Feb 2024</Text>
                        </View>
                        {selectedSubsciption === certificate.id && (
                            <View style={styles.active} ><Text style={styles.activeText} >Active</Text></View>
                        )}
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: '#F5F9FB',
    },
    subContainerL: {
        flexDirection: 'row',
        width: '85%',
        height: '60%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    activeText: {
        color: 'white',
        fontSize: 10
    },
    planType:{
        fontWeight:'bold',
        color:themeColors.bgBold,
        fontSize:15
    },
    amount:{
        fontWeight:'bold',
        fontSize:18,
        color:themeColors.liveButton
    },
    valadity:{
        color:themeColors.bgBold,
        fontWeight:'bold'
    },
    expiresOn:{
        color:themeColors.formHeading,
    },
    active: {
        position: 'absolute',
        top: 2,
        right: 0,
        paddingHorizontal: 5,
        paddingVertical: 2,
        backgroundColor: 'green',
        borderRadius: 10,
        zIndex: 100,
        resizeMode: 'contain',
    },
    certificateContainer: {
        marginRight: 20,
        borderRadius: 5,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        position: 'relative',
        backgroundColor: 'white',
        overflow: 'hidden',
    },
    certificateImage: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
});