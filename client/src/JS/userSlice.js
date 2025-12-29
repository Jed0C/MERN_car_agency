import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userlogin = createAsyncThunk("user/login", async (user,thunkAPI) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.message || "Login failed");
    console.log(error);
  }
});


export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
// _, { rejectWithValue }
//get all users
export const getusers = createAsyncThunk("car/get", async () => {
  try {
    let result = await axios.get("http://localhost:5000/user/");
    return result.data
  } catch (error) {
    console.log(error)
  }
})


export const edituser= createAsyncThunk("user/edit", async ({id, edited})=>{
  try {
    let result=await  axios.put(`http://localhost:5000/user/${id}`, edited);
    return result
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
  user: null,
  userList: [],
  status:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },

   extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status = "success";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      })
         .addCase(userlogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
    state.status = "success";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userlogin.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
     state.status = "success";
      state.user = action.payload?.data.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      })
      // update data
      .addCase(edituser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(edituser.fulfilled, (state, action) => {
        state.status = "success";

      })
      .addCase(edituser.rejected, (state, action) => {
        state.status = "fail";
        state.error = action.payload;
      })
      //get all user
      .addCase(getusers.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getusers.fulfilled, (state, action) => {
    
        state.status = 'success';
        state.userList = action.payload.users // store all users here
      })
      .addCase(getusers.rejected, (state) => {
        state.status = 'fail';
      });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
