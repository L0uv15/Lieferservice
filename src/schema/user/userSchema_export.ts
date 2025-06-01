import userMetaDataSchema_export from "./meta/userMetaDataSchema_export";
import userSchema_api from "./userSchema_api";
import userSchema_client from "./userSchema_client";

//use UserMutation rather than this whenever possible
const userSchema_export = userSchema_client.transform<typeof userSchema_api._type>((clientSchema) => {
    const parsed = userMetaDataSchema_export.parse(clientSchema.metaData);
    return {
        ...clientSchema,
        metaData: parsed,
    }
});

export default userSchema_export;