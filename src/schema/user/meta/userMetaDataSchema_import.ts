import userMetaDataSchema_api from "./userMetaDataSchema_api";
import userMetaDataSchema_client from "./userMetaDataSchema_client";

const userMetaDataSchema_import = userMetaDataSchema_api.transform<typeof userMetaDataSchema_client._type>((apiSchema) => {
    const creationTime = apiSchema.creationTime ? new Date(apiSchema.creationTime) : null;
    const lastSignInTime = apiSchema.lastSignInTime ? new Date(apiSchema.lastSignInTime) : null;

    return {
        creationTime,
        lastSignInTime
    };
})

export default userMetaDataSchema_import;

