const authConfig = {
    auth: {
        clientId: "5e1bdcae-3aa8-4926-b9d4-6ef83d389dd2",
        authority: `https://login.microsoftonline.com/5337e661-9904-4c3b-afbf-cca767cf5c5d`,
        redirectUri: "http://localhost:3000", // Your redirect URI
    },
    //scopes: ["api://7243b58f-3928-4e60-b0ad-10ca1ac2d5bc/.default"],
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set to true for IE 11 or Edge
    }
};

export default authConfig;