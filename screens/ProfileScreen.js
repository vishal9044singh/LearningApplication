import { View, Text, ScrollView,Image } from "react-native";
import { themeColors } from "../theme";
import { useEffect, useState } from "react";
import { profileStyle } from "../assets/css/profileStyle";
import SwitchClass from "../components/SwitchClass";

export default function ProfileScreen() {
    const [userdata, setUserData] = useState({
        profilePic: '',
        name: '',
        mobileNumber: '',
        emailId: '',
        selectedClass: '',
        board: '',
        medium: '',
        address: {
            line1: '',
            line2: '',
            city: '',
            district: '',
            state: '',
            country: '',
            pincode: '',
        }
    })

    const [availableClasses, setAvailableClasses] = useState([])

    const handleButtonClick = () => {
        // Trigger file input click programmatically
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

    const [selectedFile, setSelectedFile] = useState("http://bootdey.com/img/Content/avatar/avatar1.png");

    const fetchUserData = async () => {
        console.log('going to fetch userdata')
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 pt-8 rounded-t-3xl bg-white">
                <ScrollView>

                    <View style={{ height: 130, alignItems: "center" }}>
                        <View style={{  position: 'relative', alignItems: 'center' }}>
                            <Image source={{ uri: 'https' }} style={profileStyle.profileImage} />
                            <View style={profileStyle.cameraIconContainer}>
                                <Image source={require('../assets/icons/cameraIcon.png')} style={profileStyle.cameraIcon} />
                            </View>
                        </View>
                        <Text style={profileStyle.userName}>Vishal Singh</Text>
                        <Text style={profileStyle.userId}>#12345678</Text> 
                    </View>

                    <View style={{alignItems:'center'}}>
                        <SwitchClass data={availableClasses} dataType='medium'/>
                    </View>

                    
                </ScrollView>
            </View>
        </View>
    )
}

{/* <div style={{ position: 'relative', display: 'inline-block' }}>
<img
  className="img-account-profile rounded-circle mb-2"
  src={selectedFile}
  alt="Profile"
  style={{ maxWidth: '100px' }}
/>
<CIcon
  width={26}
  icon={cilPen}
  size="xl"
  onClick={handleButtonClick}
  style={{
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    cursor: 'pointer',
    background: 'white',
    borderRadius: '100%',
    padding: '4px',
    border: '1px solid darkgrey'
  }}
/>
</div>
<div className="small font-italic text-muted mb-2">
JPG or PNG no larger than 50 KB
</div>
<input
type="file"
accept="image/*"
ref={fileInputRef}
style={{ display: 'none' }}
onChange={handleFileChangeNew}
/> */}