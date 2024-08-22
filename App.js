import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Alert, TouchableOpacity } from 'react-native';

export default function App() {

  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [genero, setGenero] = useState(false);
  const toggleSwitch = () => setGenero(previousState => !previousState);
  const handleCalc = () => {
    Alert.alert("Opa", "Mensagem");
  }

  return ( 
    <View style={styles.container}>
      <View style={styles.mascfem}>
        <Text>Feminino</Text>
          <Switch
            trackColor={{false: '#A8229B', true: '#1F7F41'}}
            thumbColor={genero ? '' : '#F230DF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={genero}
          />
        <Text>Masculino</Text>
      </View>

      <Text>Altura</Text>
      <TextInput 
        inputMode="number-pad"
        style={styles.input}
        value={altura} 
        onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}/>
      <Text>Peso</Text>
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
      <StatusBar style="auto" />
    </View>
  );
}
// criar outra pasta pro css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#335B38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascfem:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});