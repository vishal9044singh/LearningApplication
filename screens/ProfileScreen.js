import { View, Text, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { themeColors } from "../theme";
import { axiosWithoutToken } from "../config/axiosConfig";
import { useEffect, useState } from "react";
import { profileStyle } from "../assets/css/profileStyle";
import DropdownElement from "../components/DropdownElement";
import SwitchClass from "../components/SwitchClass";
import { MaterialIcons } from '@expo/vector-icons';
import SubscriptionPlans from "../components/subscription/SubscriptionPlans";

export default function ProfileScreen() {

    const [cbmsData, setCbmsData] = useState({
        boards: [],
        mediums: [],
        classList: [],
        subjects: []
    })

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

    const fetchcCBMS = async () => {
        try {
            let res = await axiosWithoutToken.get('/teacher/getService');
            if (res?.data?.success) {
                const createOptions = (type) => {
                    const services = res.data.allServices.filter(service => service.type === type);
                    return services.map(item => ({ label: item.name, value: item.name }));
                };
                const optionsB = createOptions('board');
                const optionsM = createOptions('medium');
                const optionsC = createOptions('class');
                const optionsS = createOptions('subject');
                setCbmsData((prevState) => ({
                    ...prevState,
                    boards: optionsB,
                    mediums: optionsM,
                    classList: optionsC,
                    subjects: optionsS,
                }));
            }
        }
        catch (error) {
            console.log('got error in fetching data at line 53 is', error)
        }
    }

    useEffect(() => {
        fetchcCBMS();
        fetchUserData()
    }, [])

    return (
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 pt-8 rounded-t-3xl" style={{ backgroundColor: themeColors.formBg }}>
                <ScrollView>

                    <View style={{ height: 130, alignItems: "center" }}>
                        <View style={{ position: 'relative', alignItems: 'center' }}>
                            <Image source={{ uri: 'https' }} style={profileStyle.profileImage} />
                            <View style={profileStyle.cameraIconContainer}>
                                <Image source={require('../assets/icons/cameraIcon.png')} style={profileStyle.cameraIcon} />
                            </View>
                        </View>
                        <Text style={profileStyle.userName}>Vishal Singh</Text>
                        <Text style={profileStyle.userId}>#12345678</Text>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <SwitchClass data={availableClasses} dataType='medium' />
                    </View>

                    <SubscriptionPlans />

                    <View style={profileStyle.changeMpinContainer}>
                        <TouchableOpacity style={profileStyle.changeMpinButton} activeOpacity={0.9}>
                            <Image source={require('../assets/icons/keyIcon.png')} style={profileStyle.keyIcon} />
                            <Text style={profileStyle.changeMpinText}>Change MPIN</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../assets/icons/keyIcon.png')} style={profileStyle.keyIcon} />

                    <View style={profileStyle.userInputContainer}>
                        <View className="form space-y-2" style={{ width: '85%' }}>

                            <Text style={profileStyle.labels}>Name</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, state: text } }))}
                                placeholder='Enter Name...'
                            />

                            <Text style={profileStyle.labels}>Mobile Number</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, state: text } }))}
                                placeholder='Enter Mobile Number...'
                            />

                            <Text style={profileStyle.labels}>Email Id</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, state: text } }))}
                                placeholder='Enter Email Id...'
                            />

                            <Text style={styles.dropdownHeading}>Class</Text>
                            <DropdownElement data={cbmsData.classList} dataType='class' />

                            <Text style={styles.dropdownHeading} >Board</Text>
                            <DropdownElement data={cbmsData.boards} dataType='board' />

                            <Text style={styles.dropdownHeading} >Medium</Text>
                            <DropdownElement data={cbmsData.mediums} dataType='medium' />

                            <Text style={styles.dropdownHeading}>Subject</Text>
                            <DropdownElement data={cbmsData.subjects} dataType='subject' />

                            <View style={profileStyle.location}>
                                <MaterialIcons name="my-location" size={24} color={themeColors.bg} />
                                <Text> Use Your Current Location Location</Text>
                            </View>
                            <Text style={profileStyle.labels}>Line 1</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => console.log('value got is')}
                                placeholder='Line 1'
                            />
                            <Text style={profileStyle.labels}>Line 2</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, line2: text } }))}
                                placeholder='Line 2'
                            />
                            <Text style={profileStyle.labels}>City</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, city: text } }))}
                                placeholder='City'
                            />
                            <Text style={profileStyle.labels}>District</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, district: text } }))}
                                placeholder='District'
                            />
                            <Text style={profileStyle.labels}>State</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, state: text } }))}
                                placeholder='State'
                            />
                            <Text style={profileStyle.labels}>Country</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
                                style={profileStyle.inputBox}
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, country: text } }))}
                                placeholder='Country'
                            />
                            <Text style={profileStyle.labels}>Pincode</Text>
                            <TextInput
                                className="p-2 bg-gray-100 text-gray-700 rounded-md mb-4"
                                style={profileStyle.inputBox}
                                keyboardType="numeric"
                                // onChangeText={(text) => setSignUpData((prevData) => ({ ...prevData, address: { ...prevData.address, pincode: text } }))}
                                placeholder='Pincode'
                            />
                            <TouchableOpacity activeOpacity={0.9}
                                // onPress={handleNext}
                                className="py-3 mb-20 rounded-full"
                                style={{ backgroundColor: themeColors.bg }}>
                                <Text className="font-xl text-center text-white">
                                    Update Now
                                </Text>
                            </TouchableOpacity>
                        </View>
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