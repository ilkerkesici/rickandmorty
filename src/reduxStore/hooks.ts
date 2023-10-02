import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {TypedDispatch, VirtualRootState} from './store';

export const useAppDispatch: () => TypedDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<VirtualRootState> =
  useSelector;
