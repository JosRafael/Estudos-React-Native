import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [cursos, setCursos] = useState(["IF sertão", "Outro"]);

  const [cursoSelecionado, setCursoSelecionado] = useState([]);
  return (
    <View style={styles.container}>
      <View>
        <Text>A instituição Selecionada foi: {cursoSelecionado}</Text>
      </View>
      <Picker
        selectedValue={cursoSelecionado}
        style={{ height:'50%', width: '50%' }}
        onValueChange={(itemValue, itemIndex) => setCursoSelecionado(itemValue)}
      >
        {cursos.map((cr) => {
          return <Picker.Item label={cr} value={cr} />;
        })}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
