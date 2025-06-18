import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // ou qualquer outra coleção que preferir

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha email e senha!');
      return;
    }
    // lógica de login aqui
    Alert.alert('Sucesso', `Logado com ${email}`);
  };

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png' }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <Icon name="email" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Input Senha */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.linkText, { marginTop: 10 }]}>Registrar-se</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 30,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  linkText: {
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  },
});
