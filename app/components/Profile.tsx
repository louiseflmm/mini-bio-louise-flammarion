import { Image, ImageSourcePropType, Text, View } from "react-native";

type Props = {
    url : ImageSourcePropType,
    texto1 : string,
    texto2 : string
}

export default function Profile({url, texto1, texto2}: Props){
    return(
        <View style={{
            width: 300,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Image style={{
                width:200,
                height:200
            }} source={url}/>
            <View style={{
                paddingHorizontal: 20
            }}>
                <Text>
                    {texto1}
                </Text>
                <Text>
                    {texto2}

                </Text>
            </View>
        </View>
    )
}