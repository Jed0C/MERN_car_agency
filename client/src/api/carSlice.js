import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from "axios";

// for vercel
const API_URL = process.env.REACT_APP_API_URL;

export const getcar = createAsyncThunk("car/get", async () => {
  try {
    let result = await axios.get(`${API_URL}/car`);
    return result.data
  } catch (error) {
    console.log(error)
  }
})
//add car
export const addcar = createAsyncThunk("car/add", async (newcar) => {
  try {
    let result = await  axios.post(`${API_URL}/car/add`, newcar);
    return result
  } catch (error) {
    console.log(error)
  }
})

//delete
export const deletecar = createAsyncThunk("car/delete", async (id) => {
  try {
    let result = await  axios.delete(`${API_URL}/car/${id}` );
    return result
  } catch (error) {
    console.log(error)
  }
})
//edit or update

export const editcar= createAsyncThunk("car/edit", async ({id, edited})=>{
  try {
    let result=await  axios.put(`${API_URL}/car/${id}`, edited);
    return result
  } catch (error) {
    console.log(error)
  }
})


//////////////////////////////////////////////////////////////////////////////////


const initialState = {
  carlist :[],
  status:null
}

export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    //getcar
    .addCase(getcar.pending, (state) => {
      state.status = "pending";
      })
    .addCase(getcar.fulfilled, (state, action) => {
      state.status = "success";
      state.carlist = action.payload.cars; ////users here in database variable
      })
    .addCase(getcar.rejected, (state) => {
      state.status = "fail";
      })
    //addcar
    .addCase(addcar.pending, (state) => {
      state.status = "pending";
      })
    .addCase(addcar.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(addcar.rejected, (state) => {
      state.status = "fail";
      })
      //delete
      .addCase(deletecar.pending, (state) => {
      state.status = "pending";
      })
    .addCase(deletecar.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(deletecar.rejected, (state) => {
      state.status = "fail";
      })
      //edit
      .addCase(editcar.pending, (state) => {
      state.status = "pending";
      })
    .addCase(editcar.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(editcar.rejected, (state) => {
      state.status = "fail";
      })
},
})

// Action creators are generated for each case reducer function
export const {} = carSlice.actions

export default carSlice.reducer