import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { themeColors } from '../../theme';

export default function FeaturedVideos() {
    const [videoList, setVideoList] = useState([]);

    const dummyData = [
        {
            id: 1,
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/gc39280232cb19bb9734da1a93756b830fd4fd1df2823d3b19239a783f55165076a111aa90a6016854a51e233a56a4fc3.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 2,
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/gc39280232cb19bb9734da1a93756b830fd4fd1df2823d3b19239a783f55165076a111aa90a6016854a51e233a56a4fc3.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 3,
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/gc39280232cb19bb9734da1a93756b830fd4fd1df2823d3b19239a783f55165076a111aa90a6016854a51e233a56a4fc3.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 4,
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/gc39280232cb19bb9734da1a93756b830fd4fd1df2823d3b19239a783f55165076a111aa90a6016854a51e233a56a4fc3.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        }
    ];

    useEffect(() => {
        setVideoList(dummyData);
    }, []);

    const renderVideoCard = ({ item }) => (
        <View style={styles.cardContainer}>
                <ImageBackground
                    source={{ uri: 'https://pixabay.com/get/g2ca1628d473b8285a414553b628c7307b2f95ab863e9bb407ec46ac9e4e7e1626722f20f53245370e5f545abf3aa9fbe_1280.jpg' }}
                    style={styles.backgroundImage}
                    blurRadius={0}
                    borderRadius={5}
                >
                    <Image source={require('../../assets/icons/playButton.png')}
                        // onPress={() => playVideo(item.videoUrl)}
                        style={styles.playButton}
                    />
                </ImageBackground>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
        </View>
    );

    const playVideo = (videoUrl) => {
        // Implement video playback logic here
        console.log('Playing video:', videoUrl);
        // You can use libraries like Expo Video to handle video playback
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Featured Videos</Text>
            <FlatList
                data={videoList}
                horizontal
                renderItem={renderVideoCard}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom:20
    },
    backgroundImage: {
        width: 180,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    heading: {
        fontSize: 20,
        marginLeft:20,
        marginBottom:10,
        marginRight:20,
        fontWeight: 'bold',
        color: themeColors.bgBold
    },

    listContainer: {
        flexDirection: 'row',
        marginLeft: 20
    },
    cardContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    playButton: {
        height: 30,
        width: 30,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -15,
        marginTop: -15,
    },
    title: {
        fontSize: 10,
        marginBottom: 4,
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
});