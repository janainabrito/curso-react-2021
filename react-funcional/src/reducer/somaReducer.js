import {useReducer} from 'react'

//action vai atualizar o state e quem estiver subescrevendo o state vai receber as atualizações dele
//toda action tem uma propriedade type
const STATE_INICIAL = {
    resultado: ''
}

const somaReducer = (state = STATE_INICIAL, action) => {
    console.log('action executada  :>> ', JSON.stringify(action));
    switch(action.type) {
        case 'SOMA':
        case 'SUBTRACAO':
            return {...state, resultado: action.payload} //a variável resultado vai receber o payload da action que foi executada
        default:
            return state
    }
}

const useStore = () => useReducer(somaReducer, STATE_INICIAL)
export default useStore