import { createSlice } from '@reduxjs/toolkit'
import { InitialConfigStateI } from '../../env.d'

const initialState: InitialConfigStateI = {
  settings: {
    reduxStatus: true
  },
  isLoading: false
}

const configReducer = createSlice({
  name: 'config',
  initialState,
  reducers: {}
})

export default configReducer.reducer
