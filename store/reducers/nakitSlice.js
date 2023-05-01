import { NAKITI } from '../../data/NakitData';
import {createSlice} from '@reduxjs/toolkit'

const pocetnoStanje = {
  nakit: NAKITI,
  filterNakiti: NAKITI,
  favoritNakiti: [],
  kosarica: [],
};

const nakitSlice = createSlice({
  name:'nakit',
  initialState:pocetnoStanje,

  reducers:{
    deleteNakit: (state,action)=>{
      const deleteNakit = state.nakit.filter(
        (n)=>n.id !== action.payload
      )
      return{...state, nakit:deleteNakit}
    },
    
    filterNakiti:(state,action)=>{
      console.log('aa')
      const filterNakiti=state.nakit.filter(
        (n)=>n.vrsta.toUpperCase() === action.payload.toUpperCase()
      )
      return{...state,filterNakiti}
    },

    favoritNakiti:(state,action)=>{
      const odabran = state.favoritNakiti.findIndex(
        (n) => n.id === action.idNakita
      )
      if(odabran>=0){
        const noviFav =[...state.favoritNakiti]
        noviFav.splice(odabran,1)
        return {...state,favoritNakiti:noviFav}
      }else{
        const n=state.nakit.find((n)=>n.id===action.idNakita)
        return {...state,favoritNakiti:state.favoritNakiti.concat(n)}
      }
    }
  }
})

export const {filterNakiti,favoritNakiti} = nakitSlice.actions;

export default nakitSlice.reducer;

