import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';

export default function BannerList() {

    const banners = [
        { id: 1, image: "https://pixabay.com/get/ge0cedbe6f426d04536c9e9fddf55cf0dd404b4bba897287251c7a9e79354c3c99fa50b7afd52e0506c0014a7ce68e0e4.jpg" },
        { id: 2, image: "https://pixabay.com/get/g6ed1030f2c063e80551a6df6bcf7054764b3a1be9a0185974a8012a36b18e675423f5286af99a77e82278a31f581de3a.jpg" },
        { id: 3, image: "https://pixabay.com/get/ge0cedbe6f426d04536c9e9fddf55cf0dd404b4bba897287251c7a9e79354c3c99fa50b7afd52e0506c0014a7ce68e0e4.jpg" },
    ];

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            {banners.map(banner => (
                <View key={banner.id} style={styles.bannerContainer}>
                    <Image source={{ uri: banner.image }} style={styles.bannerImage} />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#F5F9FB',
    },
    bannerContainer: {
        marginRight: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    bannerImage: {
        width: 280,
        height: 120,
        resizeMode: 'cover',
    },
});