import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { themeColors } from '../../theme';
import ExamAndScoreBtn from '../ExamAndScoreBtn';
import HeadingAndDescription from '../HeadingAndDescription';

export default function VideoPlayer({ route }) {
  const { videoData } = route.params;
  const [status, setStatus] = useState({});

  const handleFullscreenUpdate = (event) => {
    const { fullscreenUpdate } = event;
    if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT) {
      // Enter full-screen mode
      Video.presentFullscreenPlayer();
    }
  };

  return (
    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 pt-6 rounded-t-3xl" style={{ backgroundColor: themeColors.formBg }}>
        <View style={styles.container}>
          <Video
            style={styles.video}
            source={{
              uri: videoData?.videoData?.location,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            orientation="LANDSCAPE"
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            onFullscreenUpdate={handleFullscreenUpdate}
          />

          <View style={styles.titleAndDescription}>
            <HeadingAndDescription />
          </View>

          <View style={styles.buttonContainer}>
            <ExamAndScoreBtn videoData={videoData} status={status} />
          </View>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  titleAndDescription: {
    padding: 5,
    width: "100%"
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  buttonContainer: {
    height: 50,
    paddingHorizontal: 10,
    width: '100%'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});