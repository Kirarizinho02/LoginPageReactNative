import { Checkbox } from "@futurejj/react-native-checkbox";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import google from "../assets/Google.png";
import facebook from "../assets/Facebook.png";
import { AntDesign } from "@expo/vector-icons";

export default function CommonLogin() {
  const [senha, setSenha] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Acesse</Text>
      <Text style={styles.h2}>com Email e senha</Text>

      <Text style={styles.buttonTextOver}>Email</Text>
      <TextInput style={styles.input} placeholder="Digite seu Email" />
      <Text style={styles.buttonTextOver}>Senha</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Digite sua Senha"
          style={{ flex: 1 }}
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity>
          <AntDesign
            name={mostrarSenha ? "eye" : "eyeo"}
            size={24}
            color="black"
            onPress={toggleMostrarSenha}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={toggleCheckbox}
            color="#10eb4b"
          />
          <Text>Lembrar senha</Text>
        </View>
        <Text>Esqueci minha senha</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={styles.botaoAcesso}>
          <Text style={styles.buttonTextInside}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOutrasOpcoes}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View style={styles.hr} />
        <View>
          <Text style={{ width: 120, textAlign: "center" }}>
            Ou continue com
          </Text>
        </View>
        <View style={styles.hr} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
          gap: 20,
        }}
      >
        <TouchableOpacity style={styles.botaoGoogleFacebook}>
          <Image source={google} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoGoogleFacebook}>
          <Image source={facebook} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonTextOver: {
    fontSize: 14,
    marginBottom: 5,
  },
  buttonTextInside: {
    color: "#fff",
  },
  h1: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 5,
  },
  h2: {
    fontSize: 18,
    marginBottom: 30,
  },
  input: {
    height: 50,
    backgroundColor: "#e9e9e9ff",
    color: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  botaoAcesso: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#10eb4b",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#10eb4b",
    width: "48%",
  },
  botaoOutrasOpcoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#10eb4b",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: "48%",
  },
  botaoGoogleFacebook: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#e9e9e9ff",
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});
