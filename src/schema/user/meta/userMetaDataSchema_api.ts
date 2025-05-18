import { z } from "zod";
import userMetaDataSchema_base from "./userMetaDataSchema_base";

const userMetaDataSchema_api = userMetaDataSchema_base.extend({
    creationTime: z.string().nullable(),
    lastSignInTime: z.string().nullable()
})

export default userMetaDataSchema_api;