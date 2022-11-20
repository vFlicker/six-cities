import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, State } from '~/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
