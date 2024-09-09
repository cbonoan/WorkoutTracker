import axios from "axios";
import { router } from "expo-router";
import { createContext, useContext, useState, type PropsWithChildren } from "react";
import { useStorageState } from "./hooks/useStorageState";
import { TUser } from "./models/User";

const AuthContext = createContext<{
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    session?: string | null;
    user: TUser | null;
    isLoading: boolean;
    errorMsg: string;
}>({
    signIn: (email: string, password: string) => null,
    signOut: () => null,
    session: null,
    user: null,
    isLoading: false,
    errorMsg: '',
});

const handleSignIn = async (email: string, password: string) => {
    try {
        const res = await axios.post<TUser>(`${process.env.EXPO_PUBLIC_API_URL}/users/login`, {
            email,
            password,
        });
        const user = res.data;

        return user;
    } catch (error: any) {
        return error.response.data;
    }
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
    const [user, setUser] = useState<TUser | null>(null);
    const [errorMsg, setErrorMsg] = useState('');

    return (
        <AuthContext.Provider
            value={{
                signIn: async (email: string, password: string) => {
                    const response = await handleSignIn(email, password);
                    if (typeof response === 'string') {
                        setErrorMsg(response);
                    } else {
                        setUser(response);
                        router.replace('/')
                    }
                },
                signOut: () => {
                    // setSession(null);
                },
                session,
                user,
                isLoading,
                errorMsg
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}