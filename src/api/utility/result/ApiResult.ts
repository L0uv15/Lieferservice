import ApiError from "../error/ApiError";

type ApiResult<TExpected> = Promise<ApiError | TExpected>

export default ApiResult;