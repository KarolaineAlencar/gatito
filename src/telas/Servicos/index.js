import React from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Realizamos a higiene completa do seu pet"
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 179.9,
        descricao: "Imunize seu pet de várias doenças"
    },
    {
        id: 3,
        nome: "Vacina Antirrábica",
        preco: 89.9,
        descricao: "Vacina contra raiva"
    }
]

export default function Servicos(){
    return <>
            <FlatList
                data = {servicos}
                renderItem = {({item}) => <Item {...item} />}    
                keyExtractor = {({id}) => String(id)}
            />
        </>
}
