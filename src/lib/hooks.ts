import {
  TypedUseSelectorHook,
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from 'react-redux'

import { AppDispatch, RootState } from './store'

/**
 * The reason we expose our own dispatch and selector
 * is that we get typescript safety anywhere, which is
 * automatically updated as we add more slices to the application.
 */

export const useDispatch = () => _useDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
