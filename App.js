import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Alert } from 'react-native';
//import { Alert } from 'react-native-web';

export default function App() {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState("");
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleCalc = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

    if (genero) {
      if (imc < 20.7)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está Abaixo do peso`
        );
      if (imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado Normal`
        );
      if (imc > 26.4 && imc <= 27.8)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um Pouco acima do peso`
        );
      if (imc > 27.8 && imc <= 31.1)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está Acima do peso`
        );
      if (imc > 31.1)
        return Alert.alert(
          "Obeso!",
          `Seu IMC é de ${imc.toFixed(2)} e está Obeso`
        );
    } else {
      if (imc < 19.1)
        return Alert.alert(
          "Abaixo do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está Abaixo do peso`
        );
      if (imc >= 19.1 && imc <= 25.8)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)} e é considerado Normal`
        );
      if (imc > 25.8 && imc <= 27.3)
        return Alert.alert(
          "Pouco acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está um Pouco acima do peso`
        );
      if (imc > 27.3 && imc <= 32.3)
        return Alert.alert(
          "Acima do peso!",
          `Seu IMC é de ${imc.toFixed(2)} e está Acima do peso`
        );
      if (imc > 32.3)
        return Alert.alert(
          "Obesa!",
          `Seu IMC é de ${imc.toFixed(2)} e está Obesa`
        );
    }
  };


  return ( 
    <View style={styles.container}>
      <View>
        <Text  style= {styles.nameapp}>Cálculo de IMC</Text>
      </View>
      <View style={styles.mascfem}>
        <Text style={styles.textFem}>Feminino</Text>
          <Switch
            trackColor={{false: '#A8229B', true: '#2B926B'}}
            thumbColor={genero ? 'black' : '#F230DF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={genero}
          />
        <Text style={styles.textMasc}>Masculino</Text>
      </View>

      <Text>Digite sua altura (em centímetros, sem vírgula)</Text>
      <TextInput 
        inputMode="number-pad"
        style={styles.input}
        value={altura} 
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}/>
      <Text>Digite seu peso (em kilogramas, sem vírgula)</Text>
      <TextInput 
        inputMode="number-pad"
        style={styles.input}
        value={peso} 
        onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}/>
      <TouchableOpacity 
        onPress={handleCalc}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}



// criar outra pasta pro css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9DAB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameapp:{
    fontFamily: "Arial",
    color: "Black",
    fontSize: 30,
    marginBottom: 70,
    marginTop: 0,
  },
  mascfem:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  input: {
    height: 54,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#000",
  },
  button: {
    backgroundColor: "#143618",
    width: "80%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    borderRadius: 8,
    marginTop: 16,
    borderWidth: 2, 
    borderColor: '#031906', 
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    color: "white",
    fontSize: 20,
  },
  textMasc: {
    marginLeft: 20,
    fontFamily: "arial-black",  
    fontSize: 15,
  },
  textFem: {
    marginRight: 20,
    fontFamily: "arial-black",  
    fontSize: 15,
  },
});


