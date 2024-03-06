import { View } from "react-native";
import Welcome from "./Auth/welcome";
import VerifyOTP from "./Auth/verifyOtp";

export default function Page() {

  return (
    <View>
      <Welcome />
      {/* <VerifyOTP /> */}
    </View>
  );
}