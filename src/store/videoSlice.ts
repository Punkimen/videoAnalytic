import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {IAnalyticItem} from "../types/main.types.ts";
import {handleError} from "@/utils/handleError.ts";
import {IEvent} from "@/components/EventItem/EventItem.tsx";

interface InitState {
  analyticsData: IAnalyticItem[];
  events: IEvent[];
  squares: IAnalyticItem[];
}
const initialState: InitState = {
  analyticsData: [],
  events: [],
  squares: [],
};

// createAsyncThunk для получения данных по ссылке
export const fetchData = createAsyncThunk("data/fetchData", async function (_, {rejectWithValue}) {
  try {
    const res = await fetch(`${import.meta.env.VITE_MOCKY_URL}`);
    if (!res.ok) {
      throw new Error("fetch failed, server error");
    }
    const jsonData: IAnalyticItem[] = await res.json();
    const modifyData = jsonData.sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1));
    return modifyData;
  } catch (err: unknown) {
    handleError(err);
    return rejectWithValue(err);
  }
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    // Добавляем событие для отображения в Analytics
    addEventAction(state, action: {payload: IEvent[]; type: string}) {
      state.events = [...state.events, ...action.payload];
    },
    // Добавляем событие для отображения в Square
    addSquareAction(state, action) {
      state.squares = action.payload;
    },
  },

  // extraReducers для асинхронного получения данных
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.analyticsData = action.payload;
    });
  },
});

// export акшенов во внешний мир
export const {addEventAction, addSquareAction} = videoSlice.actions;
export default videoSlice.reducer;
