import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

interface Props {
  defaultValue: string;
  errorMessage?: string;
  handleError?: boolean;
  onChangeText: (text: string) => void;
}

const caja = ({
  defaultValue,
  errorMessage = "Error",
  handleError = false,
  onChangeText,
}: Props) => {
  return (
    <View>
      <TextInput
        defaultValue={defaultValue}
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
      />
      {handleError ? <Text style={styles.label}>{errorMessage}</Text> : null}
    </View>
  );
};

export default caja;

const styles = StyleSheet.create({
  label: {
    color: "red",
  },
  input: {
    borderColor: "white",
    borderWidth: 4,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center",
  },

});
