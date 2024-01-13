import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode, VideoFullscreenUpdate } from 'expo-av';
import Orientation from 'react-native-orientation';

export default function VideoPlayer({ route }) {
  const { videoData } = route.params;
  console.log('value of videoData in VideoPlayer is', videoData);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  React.useEffect(() => {
    const handleOrientationChange = orientation => {
      if (orientation === 'LANDSCAPE') {
        video.current.presentFullscreenPlayer();
      } else {
        video.current.dismissFullscreenPlayer();
      }
    };

    Orientation.addOrientationListener(handleOrientationChange);

    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, []);

  const handleFullscreenUpdate = event => {
    const { fullscreenUpdate } = event;
    if (fullscreenUpdate === VideoFullscreenUpdate.ENTERED_FULLSCREEN) {
      Orientation.lockToLandscape();
    } else if (fullscreenUpdate === VideoFullscreenUpdate.EXITED_FULLSCREEN) {
      Orientation.unlockAllOrientations();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        onFullscreenUpdate={handleFullscreenUpdate}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
