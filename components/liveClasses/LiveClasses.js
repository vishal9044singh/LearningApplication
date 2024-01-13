import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';
import { themeColors } from '../../theme';

export default function LiveClasses  ()  {
  // Set the live class time (replace with your specific time)
  const liveClassTime = new Date();
  liveClassTime.setHours(17, 30, 0); // 5:30 PM

  // State to hold the remaining time
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  // Calculate the time remaining until the live class
  function getTimeRemaining() {
    const now = new Date();
    const difference = liveClassTime - now;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  // Update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://pixabay.com/get/gca25f5616d3fcd7e4a36e7d3fc0ac58130808047affc7f9c0118fb6ad766676f08415d0ac56e2e78fa9085b12b49c740_1280.jpg' }}
          style={styles.backgroundImage}
          blurRadius={8}
          borderRadius={5}
        >
          <Text>Class Will be Starting Soon</Text>
          <Text>Tomorrow 5:30 PM</Text>
          <View style={styles.button} className="rounded-full">
            <Text style={styles.remainingTime}>
              Time Remaining: {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
            </Text>
          </View>
        </ImageBackground>
        <Text>This is heading of the video</Text>
        <Text>This will be subheading of the video</Text>
        <View style={{}}>
          <TouchableOpacity>
            <Text>Go to Exam</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>View Score</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding:20,
      alignItems: 'center',
    },
    backgroundImage: {
      width: '100%',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: themeColors.liveButton,
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    }
  });