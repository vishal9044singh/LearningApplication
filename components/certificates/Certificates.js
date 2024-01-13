import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { themeColors } from '../../theme';

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        { id: 1, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 2, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 3, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
        { id: 4, image: "https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg" },
    ];

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.chooseCert}>Choose Your Certificate</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                {certificates.map(certificate => (
                    <TouchableOpacity
                        activeOpacity={0.9}
                        key={certificate.id}
                        style={styles.certificateContainer}
                        onPress={() => setSelectedCertificate(certificate.id)}
                    >
                        <Image source={{ uri: certificate.image }} style={styles.certificateImage} />
                        {selectedCertificate === certificate.id && (
                            <Image
                                source={require('../../assets/icons/greenTick.png')}
                                style={styles.tickMark}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.certContainer}>
                <TouchableOpacity disabled={!selectedCertificate} onPress={() => console.log('download is pressed')} style={[styles.downloadCert,!selectedCertificate? styles.defaultDownloadCert:styles.selectedDownloadCert]} >
                    <Text style={styles.downloadCertText}>Download Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 80,
        marginTop: 20
    },
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#F5F9FB',
    },
    certContainer: {
        alignItems: 'center',
    },
    defaultDownloadCert: {
        backgroundColor: 'lightgrey',
    },
    
    selectedDownloadCert: {
        backgroundColor: themeColors.bg,
    },
    tickMark: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 20,
        height: 20,
        zIndex: 100,
        resizeMode: 'contain',
    },
    chooseCert: {
        color: themeColors.bgBold,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20,
        marginRight: 20
    },
    certificateContainer: {
        marginRight: 10,
        borderRadius: 5,
        position: 'relative',
        backgroundColor: 'cyan',
        overflow: 'hidden',
    },
    downloadCert: {
        height: 50,
        width: '85%',
        // backgroundColor: themeColors.bg,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    downloadCertText: {
        fontSize: 16,
        color: 'white'
    },
    certificateImage: {
        width: 180,
        height: 120,
        resizeMode: 'cover',
    },
});