import { useCallback, useReducer, useRef } from "react";
import useSafeDispatch from "./useSafeDispatch";

export default function useAsync(initialState) {
    const initialStateRef = useRef({
        status: "idle",
        data: null,
        error: null,
        ...initialState,
    });

    const [{ data, status, error }, setState] = useReducer((state, action) => {
        return { ...state, ...action };
    }, initialStateRef.current);

    const safeSetState = useSafeDispatch(setState);

    const run = useCallback(
        (promise) => {
            if (!promise || !promise.then)
                throw new Error("Please pass a promise to run");
            safeSetState({ status: "pending" });
            return promise
                .then((data) => {
                    safeSetState({ data, error: null, status: "resolved" });
                })
                .catch((error) => {
                    safeSetState({ error: JSON.parse(error.message), status: "rejected" });
                });
        },
        [safeSetState]
    );

    const setData = useCallback(
        (data) => safeSetState({ data }),
        [safeSetState]
    );

    const setError = useCallback(
        (error) => safeSetState({ error }),
        [safeSetState]
    );

    const reset = useCallback(
        () => safeSetState(initialStateRef),
        [safeSetState]
    );

    return {
        error,
        status,
        data,
        run,
        setData,
        setError,
        reset,
        isIdle: status === "idle",
        isLoading: status === "pending",
        isError: status === "rejected",
        isSuccess: status === "resolved",
    };
}
