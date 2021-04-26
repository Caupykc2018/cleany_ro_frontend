import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { IInitialState } from '@/store/initialState';

export const useAppSelector: TypedUseSelectorHook<IInitialState> = useSelector;
export const useAppDispatch = () => useDispatch();
