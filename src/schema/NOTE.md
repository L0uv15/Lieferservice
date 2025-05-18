## NOTE
This section is to be used for schema definition (mostly for api use) and their derived types.
Do not use this section to define types that aren't based on schemas.

It is recommended to implement the following schemas for each api-entity: 
1. base     (lcd between api and client)
2. api      (to be received and sent)
3. client   (to be used on the client-side)
4. import   (to convert api to client)
5. export   (to convert client to api)

'Optional' properties need to be avoided and set to 'nullable' whenever possible.