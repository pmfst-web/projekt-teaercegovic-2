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

    favoritNakit:(state,action)=>{
      console.log(action.payload,'jaa')
      console.log('h,',state.favoritNakiti)
      const odabran = state.favoritNakiti.findIndex(
        (n) => {
          console.log(n,action.payload)
          return n?.id == action.payload;
        }
      )
      console.log(odabran)
      if(odabran>=0){
        const noviFav =[...state.favoritNakiti]
        noviFav.splice(odabran,1)
        return {...state,favoritNakiti:noviFav}
      }else{
        const n=state.nakit.find((n)=>n.id==action.payload)
        return {...state,favoritNakiti:state.favoritNakiti.concat(n)}
      }
    }
  }
})

export const {filterNakiti,favoritNakit} = nakitSlice.actions;

export default nakitSlice.reducer;

