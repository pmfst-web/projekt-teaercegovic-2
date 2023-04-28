import { NAKITI } from '../../data/NakitData';
import {createSlice} from '@reduxjs/toolkit'

const pocetnoStanje = {
  nakit: NAKITI,
  filterNakiti: [],
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
    }
  }
})

export const {filterNakiti} =nakitSlice.actions;

export default nakitSlice.reducer;

