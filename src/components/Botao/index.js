import React from "react";
import { Text, TouchableOpacity } from "react-native";

import estilosFuncao from './estilos'

export default function Botao({valor, acao, pequeno = false, invertido = false, estilos}) {
    const estilosPadrao = estilosFuncao(pequeno, invertido)

    return (
    <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}>
        <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
    )
}