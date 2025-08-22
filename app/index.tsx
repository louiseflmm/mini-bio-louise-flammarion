import { Text, View } from "react-native";
import Profile from "./components/Profile";
import Foto from "@/assets/Foto.jpeg"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile texto1="Louise Flammarion" texto2="Graduanda de Engenharia Civil-UPE e Sistemas para Internet - UNICAP" url={Foto}/>
    </View>
  );
}
