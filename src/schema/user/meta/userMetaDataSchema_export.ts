import userMetaDataSchema_api from "./userMetaDataSchema_api";
import userMetaDataSchema_client from "./userMetaDataSchema_client";

const userMetaDataSchema_export = userMetaDataSchema_client.transform<typeof userMetaDataSchema_api._type>((clientSchema) => {
    const creationTime = clientSchema.creationTime ? clientSchema.creationTime.toISOString() : null;
    const lastSignInTime = clientSchema.lastSignInTime ? clientSchema.lastSignInTime.toISOString() : null;

    return {
        creationTime,
        lastSignInTime
    }
});

export default userMetaDataSchema_export;