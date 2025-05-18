import userMetaDataSchema_api from "./meta/userMetaDataSchema_api";
import userSchema_base from "./userSchema_base";

const userSchema_api = userSchema_base.extend({
    metaData: userMetaDataSchema_api
})

export default userSchema_api;