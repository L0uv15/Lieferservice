import { z } from "zod";

//TODO: can be reworked once cloud functions are used (e.g. uid -> id)
const userSchema_base = z.object({
    displayName: z.string(),
    // metaData: userMetaDataSchema_base,
    email: z.string().email(),
    uid: z.string(),
    isAnonymous: z.boolean(),
    photoUrl: z.string().nullable(),
    providerId: z.string(),
    providerData: z.object({
        displayName: z.string().nullable(),
        email: z.string().email().nullable(),
        phoneNumber: z.string().nullable(),
        photoURL: z.string().nullable(),
        providerId: z.string(),
        uid: z.string()
    })
});

export default userSchema_base;
