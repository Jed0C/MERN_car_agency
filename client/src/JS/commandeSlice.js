import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'
import axios from "axios";


//getcommande
export const getcommande = createAsyncThunk("commande/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/commande/");
    return await result.data
  } catch (error) {
    console.log(error)
  }
})
//add commande
export const addcommande = createAsyncThunk("commande/add", async (commande) => {
  try {
    let result = await axios.post("http://127.0.0.1:5000/commande/add", commande);
    return await result.data
  } catch (error) {
    console.log(error)
  }
})

//delete
export const deletecommande = createAsyncThunk("commande/delete", async (id) => {
  try {
    let result = await axios.delete(`http://127.0.0.1:5000/commande/${id}` );
    return await result.data
  } catch (error) {
    console.log(error)
  }
})
//edit or update

export const editcommande= createAsyncThunk("commande/edit", async ({id, edited})=>{
  try {
    let result= await axios.put(`http://localhost:5000/commande/${id}`, edited);
    return result.data
  } catch (error) {
    console.log(error)
  }
})


//commandes by userID

export const getcommandeByUserId = createAsyncThunk("commande/getByUserId",async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/commande/user/${userId}`);
      return response.data.commandes;
    } catch (error) {
      console.error("Failed to fetch commandes:", error);
      throw error;
    }
  }
);

//////////////////////////////////////////////////////////////////////////////////


const initialState = {
  commandelist :[],
  status:null
}

export const commandeSlice = createSlice({
  name: 'commande',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    //getcommande
    .addCase(getcommande.pending, (state) => {
      state.status = "pending";
      })
    .addCase(getcommande.fulfilled, (state, action) => {
      state.status = "success";
      state.commandelist = action.payload.commandes; ////users here in database variable
      })
    .addCase(getcommande.rejected, (state) => {
      state.status = "fail";
      })
    //addcommande
    .addCase(addcommande.pending, (state) => {
      state.status = "pending";
      })
    .addCase(addcommande.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(addcommande.rejected, (state) => {
      state.status = "fail";
      })
      //delete
      .addCase(deletecommande.pending, (state) => {
      state.status = "pending";
      })
    .addCase(deletecommande.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(deletecommande.rejected, (state) => {
      state.status = "fail";
      })
      //edit
      .addCase(editcommande.pending, (state) => {
      state.status = "pending";
      })
    .addCase(editcommande.fulfilled, (state, action) => {
      state.status = "success";
      
      })
    .addCase(editcommande.rejected, (state) => {
      state.status = "fail";
      })
      //get by userID
      .addCase(getcommandeByUserId.pending, (state) => {
      state.status = "pending";
      })
    .addCase(getcommandeByUserId.fulfilled, (state, action) => {
      state.commandelist = action.payload;
      state.status = "success"; //
      })
    .addCase(getcommandeByUserId.rejected, (state) => {
      state.status = "fail";
      })
},
})

// Action creators are generated for each case reducer function
export const {} = commandeSlice.actions

export default commandeSlice.reducer