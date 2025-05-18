import userMetaDataSchema_import from "./meta/userMetaDataSchema_import";
import userSchema_api from "./userSchema_api";
import userSchema_client from "./userSchema_client";

const userSchema_import = userSchema_api.transform<typeof userSchema_client._type>((apiSchema) => {
    const parsed = userMetaDataSchema_import.safeParse(apiSchema.metaData);
    if (parsed.success) {
        return {
            ...apiSchema,
            metaData: parsed.data,
        }
    }
    throw new Error("Invalid user object (44dd316b-88c6-4f55-8a33-7a018cf4c032)")
})

export default userSchema_import;