import userMetaDataSchema_client from "./meta/userMetaDataSchema_client";
import userSchema_base from "./userSchema_base";

const userSchema_client = userSchema_base.extend({
    metaData: userMetaDataSchema_client
})

export default userSchema_client;