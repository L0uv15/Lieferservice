import userMetaDataSchema_export from "./meta/userMetaDataSchema_export";
import userSchema_api from "./userSchema_api";
import userSchema_client from "./userSchema_client";

const userSchema_export = userSchema_client.transform<typeof userSchema_api._type>((clientSchema) => {
    const parsed = userMetaDataSchema_export.safeParse(clientSchema.metaData);
    if (parsed.success) {
        return {
            ...clientSchema,
            metaData: parsed.data,
        }
    }
    throw new Error("Invalid user object (7004f446-b940-424a-b2b5-8e00edf5fe62)")
});

export default userSchema_export;