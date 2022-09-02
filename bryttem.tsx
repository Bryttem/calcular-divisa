/* import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { string } from "yup";

export default function apepe() {
  const Convert = () => {
    const [form, setForm] = useState({
      national: 100,
      foreing: 0,
      results: 0,
      exchangeRate: 35,
    });

    const handleForm = (text: string, input: string) => {
      setForm({
        ...form,
        [input]: text,
      });

      const calculate = () => {
        const results = form.national / form.exchangeRate;
        setForm({
          ...form,
          results
        });
      }
    }

    return (
      <View>
        <Text>Calcular córdobas a dólares</Text>
        <View>
          <Text>Córdobas</Text>
          <TextInput
            onChangeText={(text) => handleForm(text, "national")}
            value={String(form.national)}
          />

          <Text>Dólares</Text>
          <TextInput
            onChangeText={(text) => handleForm(text, "exchangeRate")}
            value={String(form.exchangeRate)}
          />


          <Text>Resultados</Text>
          <TextInput
            value={String(form.results)}
          />

        </View>
      </View>
    );
  }
}
 */