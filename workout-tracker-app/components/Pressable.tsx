import { Pressable as _Pressable, PressableProps, View } from "react-native";

const Pressable = ({
    children,
    style,
    onPress,
    ...props
}: PressableProps) => {
    return (
        <View style={{
                alignItems: 'center',
                width: '100%',
                borderRadius: 10,
                padding: 15,
                backgroundColor: '#486966'
            }}
        >
            <_Pressable
                onPress={onPress}
                {...props}
            >
                {children}
            </_Pressable>
        </View>
    )
}

export default Pressable;