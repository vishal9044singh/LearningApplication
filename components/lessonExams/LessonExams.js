import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { themeColors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { axiosWithoutToken } from '../../config/axiosConfig';
import { showAlert } from '../UsefulAlerts';
import { getDateAndTime } from '../../utils/usefulFunctions';

export default function LessonExams() {
    const navigation = useNavigation();
    const dummyData = [
        {
            id: 1,
            subject: 'Hindi',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 2,
            subject: 'English',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 3,
            subject: 'Hindi',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 4,
            subject: 'Maths',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 5,
            subject: 'Hindi',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 6,
            subject: 'English',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 7,
            subject: 'Hindi',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        },
        {
            id: 8,
            subject: 'Science',
            title: 'Introduction to React Native',
            thumbnailUrl: 'https://pixabay.com/get/g6646a34f3660139f7ab4aab2a48ff4b0e1df996eade0b463bdacf9c7b205af529089837bac823c8ae1995d8336fdd5e7.jpg',
            videoUrl: 'https://example.com/video1.mp4',
            date: '2024-01-13',
        }
    ];
    const [videoList, setVideoList] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('');
    const [filterOptions, setFilterOptions] = useState([
        { label: 'All', value: 'All' },
        { label: 'Hindi', value: 'Hindi' },
        { label: 'English', value: 'English' },
        { label: 'Maths', value: 'Maths' },
        { label: 'Science', value: 'Science' }
    ]);

    const filterLessons = (selectedSubject) => {
        if (selectedSubject === 'All') {
            setVideoList(dummyData);
        } else {
            const filteredData = dummyData.filter(item => item.subject === selectedSubject);
            setVideoList(filteredData);
        }
    };

    const playVideo = (videoData) => {
        console.log('Playing video:', videoData);
        navigation.navigate('VideoPlayer', { videoData })
    };

    const fetchLessonVideos = async () => {
        try {
            console.log('Going to fetch video list')
            let response = await axiosWithoutToken.get('/admin/getAllVideos');
            if (response?.data?.success) {
                console.log('value of response at line 103 is', response.data.allVideos)
                setVideoList(response?.data?.allVideos)
            }
        }
        catch (error) {
          
        }
    }

    useEffect(() => {
        fetchLessonVideos()
    }, []);

    const renderVideoCard = ({ item }) => {
        console.log('value of itema at line 119 is',item)
        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.imageContainer} activeOpacity={0.9} onPress={() => playVideo(item)}>
                    <Image source={{ uri: item?.thumbnailData?.location }} style={styles.thumbnail} />
                    <Image source={require('../../assets/icons/playButton.png')}
                        // onPress={() => playVideo(item.videoUrl)}
                        style={styles.playButton}
                    />
                </TouchableOpacity>
                <View style={styles.contentContainer}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                    {
                        (item?.isCompleted) ?
                        <Text style={styles.isCompleted}>Completed</Text>
                        :
                        <Text style={styles.date}>{getDateAndTime(item?.inAppAppearanceTime)}</Text>
                    }
                </View>
            </View>
        )

        }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Lesson</Text>
                <View>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        iconColor={themeColors.bg}
                        data={filterOptions}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Filter by Subject"
                        onChange={(selectedItem) => {
                            setSelectedFilter(selectedItem.value);
                            filterLessons(selectedItem.value);
                        }}
                    />
                </View>
            </View>
            <FlatList
                data={videoList}
                horizontal
                renderItem={renderVideoCard}
                keyExtractor={(item) => item.videoId.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    //for dropdown
    dropdown: {
        backgroundColor: 'white',
        elevation: 5,
        height: 50,
        width: 200,
        marginBottom: 20,
        padding: 5,
        borderRadius: 5
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    //till here===>>>

    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    filterText: {
        fontSize: 16,
        color: 'white',
    },
    listContainer: {
        flexDirection: 'row',
        marginLeft: 20
    },
    cardContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
    thumbnail: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderRadius: 5,
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
    playButtonText: {
        color: 'white',
    },
    contentContainer:{
        width: 180,
        paddingHorizontal:5,
    },
    isCompleted:{
        textAlign:'center',
        borderWidth:1,
        borderColor:'green',
        borderRadius:10,
        fontSize:12,
        color:'green',
        width:'45%',
        fontWeight:500,
        padding:2,
        marginBottom:2
    },
    title: {
        fontSize: 14,
        fontWeight:'bold',
        color:themeColors.bgBold,
        marginBottom: 4,
    },
    date: {
        fontSize: 10,
        color: 'gray',
    },
    imageContainer: {
        position: 'relative',
        width: 180,
        height: 120,
    },
});