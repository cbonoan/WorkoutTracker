import { Button as _Button, ButtonProps } from "react-native";

const Button = ({
    color = '#486966',
    ...props
}: ButtonProps) => {
    return (
        <_Button
            color={color}
            {...props}
        />
    );
}

export default Button;