import axios, { AxiosError } from "axios";
import { createContext, useContext, type PropsWithChildren } from "react";
import { useStorageState } from "./hooks/useStorageState";

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

const handleSignIn = async () => {
    const email = "johndo@example.com";
    const password = "password123";

    await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/users/login`, {
        email,
        password,
    })
    .then(response => console.log(response.data))
    .catch((error: AxiosError) => console.error(error.response?.data));

    return;
}

const handleSignOut = () => {
    return;
}

export const useSession = () => {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== "production") {
        if (!value) {
            throw new Error("useSession must be wrapped in a <SessionProvider />");
        }
    }

    return value;
}

export const SessionProvider = ({ children }: PropsWithChildren) => {
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext.Provider
            value={{
                signIn: () => {
                    handleSignIn();
                    // setSession();
                },
                signOut: () => {
                    handleSignOut();
                    // setSession(null);
                },
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}