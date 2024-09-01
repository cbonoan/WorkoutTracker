import { TextInput as _TextInput, StyleSheet, TextInputProps } from "react-native";

type TTextInput = Omit<TextInputProps, 'style'> & {
    type?: 'default' | 'title' | 'subtitle';
    styles?: {}
}

const TextInput = ({ 
    type = 'default',
    styles,
    ...props 
}: TTextInput) => {
    let style;
    switch(type) {
        case "default":
            style = textInputStyles.default;
            break;
        case "title":
            style = textInputStyles.title;
            break;
        case "subtitle":
            style = textInputStyles.subtitle;
            break;
    }

    return (
        <_TextInput
            style={[
                { color: 'white' },
                { textDecorationLine: 'underline' },
                style,
                styles,
            ]}
            {...props}
        />
    );
}

const textInputStyles = StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default TextInput;