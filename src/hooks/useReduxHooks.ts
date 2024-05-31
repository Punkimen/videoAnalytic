import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store.ts";

// Хуки для типизации useDispatch и useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
