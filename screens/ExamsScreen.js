import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme";
import examsStyle from "../assets/css/examsStyle";
import FilterExams from "../components/dropdownExams/FilterExams";
import ExamsCard from "../components/examsCard/ExamsCard";

export default function ExamsScreen() {

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-6 pt-6 rounded-t-3xl" style={{ backgroundColor: themeColors.formBg }}>

                <View style={examsStyle.marksheetCard}>
                    <Image source={require('../assets/icons/fileIcon.png')} style={examsStyle.fileIcon} />
                    <View style={examsStyle.rightBox}>
                        <Text style={examsStyle.downloadTitle}>Download Your Marksheet</Text>
                        <TouchableOpacity style={examsStyle.downloadBtn} activeOpacity={0.8}>
                            <Text style={examsStyle.downloadText}>Download Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FilterExams/>
                <ExamsCard/>

            </View>
        </View>
    )
}