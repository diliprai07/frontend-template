import { QueryKeysType } from "./QueryKeyType";
import { RestApiError } from "./RestApiError";

type QueryMutationStatus = 'idle'| 'loading' | 'success' |'error';

export interface QueryMutationResBase<TResData=null, TParams=null> {
    data?: TResData,
    error?: RestApiError |null,
    refetch?:() => void,
    invalidateQueries?: (queryKey?: QueryKeysType<TParams>) => void;
    status?: QueryMutationStatus,
    isError?: boolean,
    isSuccess?: boolean,
    isFetching?: boolean,
    isLoading: boolean,

}


export interface QueryOptions<TData> {
    onSuccess?: (data: TData) => void;
    onError?: (error: RestApiError) => void;
    onSettled?: () => void;
    enabled?: boolean;
}

export interface QueryResult<TResData=null, TParams=null> extends QueryMutationResBase<TResData, TParams> {

}

export interface MutationOptions <TResData =null> {
    onSuccess?: (data: TResData) => void;
    onError?: (error: RestApiError) => void;
    onSettled?: (data?: TResData) => void;
}

export interface MutationResult<TReqData=null, TResData=null,TParams=null> extends QueryMutationResBase<
TResData,TParams> {
    mutate: (variables: TReqData,options?: MutationOptions) => void;
    mutateAsync?: (variables: TReqData,options?: MutationOptions) => Promise<TResData | void>
}