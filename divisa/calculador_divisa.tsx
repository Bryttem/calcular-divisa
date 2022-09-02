import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Calcular from "./boton"
import Textos from "./text"
import Campos from "./datos"

const Divisa = () => {
    const [moneda1, setMoneda1] = useState<string>("");
    const [moneda2, setMoneda2] = useState<string>("");
    const [cambio, setCambio] = useState<number>(0);
    const [convertir, setConvertir] = useState<number>(0);
    const [result, setResult] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const cambioMoneda1 = (texto: string) => {
        setMoneda1(texto);
    };
    const cambioMoneda2 = (texto: string) => {
        setMoneda2(texto);
    };
    const TasaCambio = (texto: string) => {
        const number = parseFloat(texto);
        if (isNaN(number)) {
            setError(true);
        } else {
            setError(false);
        }
    }
    const dinero = (texto: string) => {
        const number = parseFloat(texto);
        if (isNaN(number)) {
            setError(true);
        } else {
            setError(false);
        }
        setConvertir(number);
    };
    const tipoCambio = () => {
        if (moneda1 === 'USD' && moneda2 === 'NIO' && cambio === 0.02752) {
            const result = convertir * 35.70 / cambio;
            setResult(result)
        }
        else if (moneda1 === 'USD' && moneda2 === 'EUR') {
            const result = convertir * 0.80
            setResult(result)
        }else if (moneda1 === 'USD' && moneda2 === 'MXN') {
            const result = convertir * 19.948
            setResult(result)

        } else if (moneda1 === 'EUR' && moneda2 === 'NIO') {
            const result = convertir * 40
            setResult(result)
        } else if (moneda1 === 'EUR' && moneda2 === 'USD') {
            const result = convertir * 1.20
            setResult(result)
        } else if (moneda1 === 'EUR' && moneda2 === 'MXN') {
            const result = convertir * 19.856
            setResult(result)
            
        } else if (moneda1 === 'MXN' && moneda2 === 'EUR') {
            const result = convertir * 0.050
            setResult(result)
        } else if (moneda1 === 'MXN' && moneda2 === 'USD') {
            const result = convertir * 0.050
            setResult(result)
        } else if (moneda1 === 'MXN' && moneda2 === 'NIO') {
            const result = convertir * 1.803
            setResult(result)

        } else if (moneda1 === 'NIO' && moneda2 === 'USD') {
            const result = convertir * 0.020
            setResult(result)
        } else if (moneda1 === 'NIO' && moneda2 === 'EUR') {
            const result = convertir * 0.025
            setResult(result)
        } else if (moneda1 === 'NIO' && moneda2 === 'MXN') {
            const result = convertir * 0.554
            setResult(result)
        } else {
            alert(
                'Parece que sucedio un error, los datos ingresados no son validos'
            )
        }
    };
    return (
        <View style={styles.header}>
            <View style={styles.contenedor}>  
                <Textos text="Ingresa tu moneda" type="normal" />
                <Campos
                    defaultValue={moneda1}
                    errorMessage="Admitido solo moneda"
                    onChangeText={setMoneda1}
                />
                <Textos text="Ingresa la moneda a convertir" type="normal" />
                <Campos
                    defaultValue={moneda2}
                    errorMessage="Solo se admite clave de la moneda"
                    onChangeText={setMoneda2}
                />
                <Textos text="Tasa de Cambio" type="normal" />
                <Campos
                    defaultValue={cambio.toString()}
                    errorMessage="Ingresa la tasa de cambio de la moneda que deseas cambiar"
                    onChangeText={TasaCambio}
                    handleError={error}
                />
                <Textos text="Cantidad" type="normal" />
                <Campos
                    defaultValue={convertir.toString()}
                    errorMessage="solo se admiten numeros"
                    onChangeText={dinero}
                    handleError={error}
                />

                <Calcular
                    color="#00FBFF"
                    text="Convertir"
                    onPress={tipoCambio}
                />
                <Textos text="El resultado de la conversion es:"   type={"normal"} />
                <Text style={styles.result}>{result.toString()}</Text>
            </View>
        </View>
    );
};

export default Divisa;

const styles = StyleSheet.create({
    result: {
        fontSize: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        flex: 6,
        backgroundColor: "black",
        alignItems: "center",
        paddingTop: 40,
      },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contenedor: {
        width: 500,
        height: "95%",
        borderRadius: 60,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
    },
});