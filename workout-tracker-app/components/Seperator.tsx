import { StyleSheet, View } from "react-native";

const Seperator = () => {
    return (
        <View style={styles.seperator}/>
    );
}

const styles = StyleSheet.create({
    seperator: {
        marginVertical: 10,
    }
  })

export default Seperator;