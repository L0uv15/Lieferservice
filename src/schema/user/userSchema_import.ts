import userMetaDataSchema_import from "./meta/userMetaDataSchema_import";
import userSchema_api from "./userSchema_api";
import userSchema_client from "./userSchema_client";

const userSchema_import = userSchema_api.transform<typeof userSchema_client._type>((apiSchema) => {
    const parsed = userMetaDataSchema_import.parse(apiSchema.metaData);
    return {
        ...apiSchema,
        metaData: parsed,
    }
})

export default userSchema_import;