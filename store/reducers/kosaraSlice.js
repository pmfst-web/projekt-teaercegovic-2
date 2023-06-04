import { createSlice} from '@reduxjs/toolkit'

const pocetnoStanje={
    items:[],
    count:[],
}

const basketSlice=createSlice({
  name:'kosara',
  initialState:pocetnoStanje,
  reducers:{
    dodajNakit:(state,action)=>{
      state.items=[...state.items,action.payload]
      return{
        ...state,
        kosarica:order
      }
    }
  }
})

export const {dodajNakit}=basketSlice.actions;

export default basketSlice.reducer;