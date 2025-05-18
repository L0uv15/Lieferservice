import { z } from "zod";
import userMetaDataSchema_base from "./userMetaDataSchema_base";

const userMetaDataSchema_client = userMetaDataSchema_base.extend({
    creationTime: z.date().nullable(),
    lastSignInTime: z.date().nullable()
})

export default userMetaDataSchema_client;