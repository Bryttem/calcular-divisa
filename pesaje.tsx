import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";


export default function App() {
  const [weight, setWeight] = useState("");
  const [Size, setSize] = useState("");
  const [result, setResult] = useState("");

  const calculateIMC = () => {
    const altura = parseFloat(Size) / 100;
    const peso = parseFloat(weight);

    const imc = peso / (altura * altura);
    if (imc < 18.5) {
      return setResult(
        'Tu IMC: ' + imc +': Deberias Comer mas'
      );
    } else if (imc > 18.5 && imc < 24.9) {
      return setResult(
        'Tu IMC: ' + imc + ': Te ves bien'
      );
    } else if (imc > 25.0 && imc < 29.9) {
      return setResult(
        'Tu IMC: ' + imc + ': Come un poco más, estas bajo de peso'
      );
    } else if (imc > 30.0) {
      return setResult(
        'Tu IMC: ' + imc +  ': Realiza más ejercicio, tienes sobrepeso'
      );
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.CalcularIMC}>Calculador de IMC</Text>
      <View style={styles.container}>
        <Text style={styles.text}>Ingresa su peso</Text>
        <TextInput
          style={styles.input}
          value={weight}
          keyboardType="number-pad"
          onChangeText={(e) => setWeight(e)}
        />

        <Text style={styles.text}>
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={Size}
          onChangeText={(e) => setSize(e)}
        />
      </View>
      <Button
        title="Calcular"
        onPress={() => calculateIMC()}
      />
      <TextInput
        style={styles.resultado}
        value={result}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 6,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 40,
  },
  container: {
    width: 500,
    height: "30%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  CalcularIMC: {
    color: "blue",
    fontSize: 60

  },
  text: {
    color: "black",
    fontSize: 20,
  },
  input: {
    height: 40,
    width: "60%",
    backgroundColor: "white",
    fontSize: 17,
    borderRadius: 15,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 10,
  },

  resultado: {
    height: 120,
    width: 500,
    top:30,
    backgroundColor: "#03FFF0",
    color: "black",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});