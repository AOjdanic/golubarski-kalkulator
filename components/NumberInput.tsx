import { StyleSheet, TextInput } from "react-native";

type NumberInputProps = {
  value: string;
  placeholder: string;
  setter: (value: string) => void;
};

export function NumberInput({ value, setter, placeholder }: NumberInputProps) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      keyboardType="numeric"
      maxLength={2}
      onChangeText={(text) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setter(numeric);
      }}
      placeholderTextColor={"#444"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    width: "100%",
    borderWidth: 1,
    display: "flex",
    borderColor: "#444",
    paddingHorizontal: 10,
  },
});
