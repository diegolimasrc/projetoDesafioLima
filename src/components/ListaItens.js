import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity,} from 'react-native'
import Itens from './Itens'
import axios from 'axios'
import ItensDetalhe from './ItensDetalhe'

class ListaItens extends Component{

 

    constructor(props){
        super(props)

        this.state = {itens:[]}
    }

    //https://rickandmortyapi.com/api/character/
    //http://faus.com.br/recursos/c/dmairr/api/itens.html
    
    componentWillMount(){
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(response =>{this.setState({itens:response.data.results})})
            .catch(()=>{console.log('Deu erro')})

            
           
    }

    //item.name
    renderItem = ({item})=>{
        <View>
            <Text>{item.name}</Text>
            <TouchableOpacity onPress={() =>{}}>
                <Text>Acessar</Text>

            </TouchableOpacity>

        </View>
            
           
        
    }
    
    render(){
        return(
           
            <ScrollView>
                {this.state.itens.map(item => (<Itens key={item.name} item={item}></Itens>))}
               

            </ScrollView>
        )
    }

}

export default ListaItens;