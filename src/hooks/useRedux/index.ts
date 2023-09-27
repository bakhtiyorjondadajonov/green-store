// import type { RootStore, DispatchType } from "../../redux";
// import type { TypedUseSelectorHook } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const useReduxDispatch = () => useDispatch<DispatchType>();
// export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;

import type { DispatchType, RootStore } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useReduxSelector: TypedUseSelectorHook<RootStore> = useSelector;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useReduxDispatch = () => useDispatch<DispatchType>();
