import { createSlice } from '@reduxjs/toolkit';

const recordingsSlice = createSlice({
  name: 'recordingsList',
  initialState: [],
  reducers: {
    addRecording: (state, action) => {
      state.push(action.payload);
    },
    deleteRecording: (state, action) => {
      state.splice(action.payload.position, 1);
    },
    editRecording: (state, action) => {
      state[action.payload.position].name = action.payload.newName;
    },
    
  },
});

export const { addRecording, deleteRecording, editRecording } = recordingsSlice.actions;
export const recordingsList = (state) => state.recordingsList;
export default recordingsSlice.reducer;