import React from "react";
import { View, ScrollView } from "react-native";
import { themeColors } from "../theme";
import LessonExams from "../components/lessonExams/LessonExams";
import BannerList from "../components/bannerList/BannerList";
import MonthlyExams from "../components/monthlyExams/MonthlyExams";
import CurrentLesson from "../components/currentLesson/CurrentLesson";
import FeaturedVideos from "../components/featuredVideos/FeaturedVideos";
import Certificates from "../components/certificates/Certificates";

export default function HomeScreen() {
  return (

    <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
      <View className="flex-1 rounded-t-3xl" style={{ backgroundColor: '#F5F9FB' }}>
        <ScrollView className='mt-5'>
          <CurrentLesson />
          <MonthlyExams />
          <LessonExams />
          <BannerList />
          <FeaturedVideos />
          <Certificates />
        </ScrollView>
      </View>
    </View>
  );
}