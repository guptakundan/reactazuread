import { useMsal } from '@azure/msal-react';

const LoginButton = () => {
    const loginRequest = {
        // scopes: ["api://5e1bdcae-3aa8-4926-b9d4-6ef83d389dd2/.default"], //This is for API token from rest API
        scopes: ["User.Read"] //this is for self web app token.
    };
    //const { accounts } = useMsal();
    //console.log(accounts);
    const { instance } = useMsal();
    
    const handleLogin = () => {
        instance.loginPopup(loginRequest)
            .then(response => {
                console.log("Login successful:", response.accessToken);
                localStorage.setItem("jwtToekn", response.accessToken);
            })
            .catch(error => {
                console.error("Login failed:", error);
            });
    };

    return (
        <button onClick={handleLogin}>
            Login with Azure AD
        </button>
    );
};

export default LoginButton;
