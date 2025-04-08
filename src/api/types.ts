import { UseServiceCallStatusProps } from "../useServiceCall";

export type MethodProps = 'get' | 'post' | 'put' | 'delete';

export type ApiConfig = {
    [key: string]: {
        url: string;
        method: MethodProps;
        authenticated: boolean;
        ARGS_PROPS?: unknown;
        DATA_PROPS?: unknown;
    };
};

export interface ApiClientResourcesProps<T = any, K = any> {
    makeRequest: (props?: K) => void,
    status: UseServiceCallStatusProps
    data: T,
    args: K,
}

export type ServerApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: T[K]['ARGS_PROPS']) => Promise<T[K]['DATA_PROPS']>;
};

export type ClientApiMethods<T extends ApiConfig> = {
    [K in keyof T]: (params?: any) => ApiClientResourcesProps<T[K]["DATA_PROPS"], T[K]["ARGS_PROPS"]>;
};