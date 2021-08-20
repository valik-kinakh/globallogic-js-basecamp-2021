import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CREATE_USER_SUCCESS, DELETE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  FETCH_USER_SUCCESS,
  FETCH_USERS_SUCCESS
} from '../../../Users/UsersTable/types';
import api from '../../../../api/userApi';

const initialState = {
  list: [],
  user:{},
  isFetched: false,
  loading:'fin'
};

export const getUsers = createAsyncThunk(FETCH_USERS_SUCCESS, async () => {
  try {
    const result=await api.getUsers()
    return result;
  } catch (error) {
    window.alert(`Failed to fetch users: ${error.message}`);
  }

});
export const getUser = createAsyncThunk(FETCH_USER_SUCCESS, async (id) => {
  try {
    const result=await api.getUser(id);
    return result;
  } catch (error) {
    window.alert(`Failed to fetch users: ${error.message}`);
  }
});
export const createUser = createAsyncThunk(CREATE_USER_SUCCESS, async (user) => {
  try {
    const result=await api.createUser(user);
    return result;
  } catch (error) {
    window.alert(`Failed to fetch users: ${error.message}`);
  }
});
export const editUser=  createAsyncThunk(EDIT_USER_SUCCESS,async (user)=>{
  try{
    const result=await api.editUser(user)
    return result;
  }catch (error)
  {
    window.alert(`Failed to fetch users: ${error.message}`);
  }
})
export const deleteUser=  createAsyncThunk(DELETE_USER_SUCCESS, async (user)=>{
  try{
    const result=await api.deleteUser(user);
    return result;
  }catch (error)
  {
    window.alert(`Failed to fetch users: ${error.message}`);
  }
})

const userReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]:(state,action)=>{
      state.isFetched=false;
      state.loading='pending';
    },
    [getUsers.fulfilled]:(state,action)=>{
      state.list=action.payload;
      state.isFetched=true;
      state.loading='fin';
    },
    [getUser.pending]:(state,action)=>{
      state.isFetched=false;
      state.loading='pending';
    },
    [getUser.fulfilled]:(state,action)=>{
      state.user=action.payload;
      state.isFetched=true;
      state.loading='fin';
    },
    [createUser.pending]:(state,action)=>{
      state.isFetched=false;
      state.loading='pending';
    },
    [createUser.fulfilled]:(state,action)=>{
      state.list=action.payload;
      state.isFetched=true;
      state.loading='fin';
    },
    [editUser.pending]:(state,action)=>{
      state.isFetched=false;
      state.loading='pending';
    },
    [editUser.fulfilled]:(state,action)=>{
      state.user=action.payload;
      state.isFetched=true;
      state.loading='fin';
    },
    [deleteUser.pending]:(state,action)=>{
      state.isFetched=false;
      state.loading='pending';
    },
    [deleteUser.fulfilled]:(state,action)=>{
      state.list=action.payload;
      state.isFetched=true;
      state.loading='fin';
    }

  }
});

export default userReducer;