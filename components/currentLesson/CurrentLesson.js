import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { themeColors } from '../../theme';
import ExamAndScoreBtn from '../ExamAndScoreBtn';

export default function CurrentLesson() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://pixabay.com/get/g3c93be143be8d3c07bb4f6815a61ad67cdacb3c4cf4f0f4c2d677dd87db886d0e04dfbae2fed2e37a709ddbadbc596df.jpg' }}
        style={styles.backgroundImage}
        blurRadius={1}
        borderRadius={5}
      >
        <Image style={styles.doubtsText} source={require('../../assets/icons/videoComment.png')} />
        <Image source={require('../../assets/icons/playButton.png')}
          // onPress={() => playVideo(item.videoUrl)}
          style={styles.playButton}
        />
        <Text style={styles.lessonNo}>Lesson No 1</Text>
      </ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>This is heading of the video</Text>
        <Text style={styles.content}>This will be subheading of the video This will be subheading of the video.</Text>
      </View>

      <View style={styles.examAndScore}>
        <ExamAndScoreBtn/>
        {/* <TouchableOpacity style={[styles.examBtn, { backgroundColor: themeColors.bg }]} activeOpacity={0.9} >
          <Text style={styles.btnText}>Go to Exam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.examBtn, { backgroundColor: themeColors.bgBold }]} activeOpacity={0.9}>
          <Text style={styles.btnText}>View Score</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    padding: 5
  },
  title: {
    color: themeColors.bgBold,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2
  },
  content: {
    fontSize: 12,
    color: themeColors.formHeading
  },
  doubtsText: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 30,
    width: 30,
  },
  playButton: {
    height: 40,
    width: 40,
  },
  btnText: {
    color: 'white'
  },
  lessonNo: {
    backgroundColor: 'white',
    position: 'absolute',
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    bottom: 10,
    right: 10,
    color: themeColors.bgBold,
    borderRadius: 50,
    fontSize: 10,
    fontWeight: 'bold',
  },
  examAndScore: {
    width: "100%",
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  examBtn: {
    width: '48%',
    alignItems: 'center',
    borderRadius: 50,
    padding: 10
  },
  backgroundImage: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subheadingText: {
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
});