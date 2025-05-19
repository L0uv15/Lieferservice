import { signInWithPopup } from "firebase/auth";
import User from "../../../../schema/user/User";
import userSchema_import from "../../../../schema/user/userSchema_import";
import ClientApiError from "../../../utility/error/ClientApiError";
import ApiResult from "../../../utility/result/ApiResult";
import SignInWithGooglePopupProperties from "./SignInWithGooglePopupProperties";

export default async function signInWithGooglePopup(args: SignInWithGooglePopupProperties): ApiResult<User> {
    const { auth, provider } = args;

    const response = await signInWithPopup(auth, provider);
    const parsedUser = userSchema_import.safeParse(response.user);
    if (!parsedUser.success) {
        const clientError = new ClientApiError(parsedUser.error.message, "Invalid user object (96b6e279-1623-432c-b451-926e8859c8e0)");
        clientError.useDispatchErrorToast();
        return clientError.getError();
    }

    return { ...parsedUser.data };
}