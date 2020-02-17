import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default class Itens extends Component{
    render(){
        return(
            
            <View style={styles.conteiner}>
                
                   
                <View style={styles.imagem}>
                  <Image style={{height:100, width:100}} source={{uri:this.props.item.image}}/>
                </View>
                <View style={styles.detalheItens}>
                  <Text style={styles.txtTitulo}>Nome: {this.props.item.name}</Text>
                  <Text style={styles.txtDetalhe}>Status de vida: {this.props.item.status}</Text>
                  <Text style={styles.txtDetalhe}>Especie: {this.props.item.species}</Text>
                  <Text style={styles.txtDetalhe}>Genero: {this.props.item.gender}</Text>
                
                </View>
                
                
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    barraTitulo:{
        backgroundColor:'#ccc',
        padding:10,
        height:40
    },
    conteiner:{
        borderWidth:0.5,
        borderColor: '#999',
        margin:10,
        padding:10,
        flexDirection:'row'
    },
    imagem:{
        width:102,
        height:102
    },
    detalheItens:{
        marginLeft:20,
        flex:1
    },
    txtTitulo:{
        fontSize:18,
        color:'red'
    },
    txtDetalhe:{
        fontSize:14

    }
})