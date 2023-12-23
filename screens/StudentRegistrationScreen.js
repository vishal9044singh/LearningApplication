import { View} from 'react-native';
import React, { useState } from 'react'
import { themeColors } from '../theme'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import TermsAndConditions from '../components/TermsAndConditions';

// subscribe for more videos like this :)
export default function StudentRegistrationScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const { mobileNumber, name, action } = route.params;

    // fist step
    // const NameAndMobile = () => {
    //     return (
    //         <>
    //             <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Sign Up</Text>
    //             <View className="flex-row justify-center">
    //                 <Image source={require('../assets/student.png')}
    //                     style={{ width: 250, height: 250 }}
    //                 />
    //             </View>
    //             <View className="form space-y-2 ">
    //                 <Text className="text-gray-700 mb-1">Enter your name and mobile number</Text>
    //                 <TextInput
    //                     className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3 "
    //                     style={styles.inputBox}
    //                     placeholder='Enter Name'
    //                 />
    //                 <TextInput
    //                     className="p-2 bg-gray-100 text-gray-700 rounded-md mb-3"
    //                     style={styles.inputBox}
    //                     placeholder='Enter Mobile Number'
    //                 />
    //                 <TouchableOpacity activeOpacity={0.9}
    //                     className="py-3 mt-6 rounded-full"
    //                     style={{ backgroundColor: themeColors.bg }}
    //                 >
    //                     <Text className="font-xl text-center text-white">
    //                         Next
    //                     </Text>
    //                 </TouchableOpacity>
    //             </View>
    //             <View className="flex-row justify-center py-12">
    //                 <Text className="text-gray-500 font-bold mb-5" style={{ color: themeColors.bgBold }}>Already have a account?</Text>
    //                 <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    //                     <Text className="font-bold" style={{ color: themeColors.bg }}> Login</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </>
    //     )
    // }

    //second step
    // const OtpVerification = () => {
    //     return (
    //         <>
    //             <Text className='text-center text-2xl font-bold' style={{ color: themeColors.bgBold }}>Verification</Text>
    //             <View className='p-2 mt-12'>
    //                 <Text className="text-gray-700 mb-3">Enter the OTP you recived</Text>
    //                 <OtpInput otp={otp} setOtp={setOtp} />
    //                 <View style={otpStyle.otpText}>
    //                     <Text className="text-gray-700">You should receive the otp in</Text>
    //                     <Text style={{ color: themeColors.bg }}> 30 Second</Text>
    //                 </View>
    //                 <TouchableOpacity activeOpacity={0.9} className="py-3 mt-6 rounded-full" style={{ backgroundColor: themeColors.bg }}
    //                     onPress={handleContinue}>
    //                     <Text className="font-xl text-center text-white">Continue</Text>
    //                 </TouchableOpacity>
    //             </View>
    //         </>

    //     )
    // }

    //third step
    // const Email = () => {
    //     return (
    //         <View>
    //             <Text>Email Screen</Text>
    //         </View>
    //     )

    // }

    // fourth step
    // const Address = () => {
    //     return (
    //         <View>
    //             <Text>Address Details</Text>
    //         </View>
    //     )

    // }

    //fifth step
    // const Mpin = () => {
    //     return (
    //         <View>
    //             <Text>Mpin Screen</Text>
    //         </View>
    //     )
    // }

    //sixth step
    // const ConfirmMpin = () => {
    //     return (
    //         <View>
    //             <Text>Confirm Mpin</Text>
    //         </View>
    //     )

    // }

    //seventh step
    // const StudentDetails = () => {
    //     return (
    //         <View>
    //             <Text>Student Details</Text>
    //         </View>
    //     )

    // }

    //eighth step
    // const TermsAndConditions = () => {
    //     return (
    //         <View>
    //             <Text>Terma and Conditions</Text>
    //         </View>
    //     )
    // }

    // const handleNext = () => {
    //     setStep(step + 1);
    // };

    // const renderStep = () => {
    //     switch (step) {
    //         case 1:
    //             return <NameAndMobile />;
    //         case 2:
    //             return <OtpVerification />;
    //         case 3:
    //             return <Email />;
    //         case 4:
    //             return <Address />;
    //         case 5:
    //             return <Mpin />;
    //         case 6:
    //             return <ConfirmMpin />;
    //         case 7:
    //             return <StudentDetails />;
    //         case 8:
    //             return <TermsAndConditions />;
    //         default:
    //             return null;
    //     }
    // };



    return (
        // <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
        //     <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
        //         {renderStep()}
        //         {/* <TouchableOpacity onPress={handleNext}>
        //             <Text>Next</Text>
        //         </TouchableOpacity> */}
        //     </View>
        // </View>
        <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.bg }}>
            <View className="flex-1 px-8 pt-8 rounded-t-3xl bg-white">
                <TermsAndConditions/>
            </View>
        </View>
    );
}
