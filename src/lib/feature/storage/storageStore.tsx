import { SaveStorage } from '@/utility/tools';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StorageState {
    data: any
}

const initialState: StorageState = {
    data: null,
}

const StorageSlice = createSlice({
    name: 'storage',
    initialState,
    reducers: {
        SaveStorageRedux: (state,action: PayloadAction<any>) => {
            state.data = action.payload;
            SaveStorage(action.payload.key, action.payload.data);
        },
        initializeStorage: (state, action: PayloadAction<any>) => {
            state.data = action.payload;
        }
    }
});

export const { SaveStorageRedux, initializeStorage } = StorageSlice.actions;
export default StorageSlice.reducer;