import { StateCreator } from "zustand";

export interface UserSlice {
    loggedIn: boolean;
    setLoggedIn: (state: boolean) => void;
    uid: string;
    setUID: (uid: string) => void;
    user: UserDetail;
    setUser: (user: UserDetail) => void;
    logout: () => void;
    signInResponse: string;
    setSignInResponse: (response: string) => void;
    firstTimeUser: boolean;
    setFirstTimeUser: (state: boolean) => void;
}

export interface UserDetail {
    username: string;
    bio: string;
    phoneNumber: string;
    email: string;
    bannerPicture: string;
    profilePicture: string;
}

const userInitialState: UserDetail = {
    username: '',
    bio: '',
    phoneNumber: '',
    email: '',
    bannerPicture: '',
    profilePicture: '',
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    loggedIn: false,
    setLoggedIn: (_state) => set((state) => ({ loggedIn: _state })),
    uid: "",
    setUID: (uid) => set((state) => ({ uid })),
    user: userInitialState,
    setUser: (user) => set((state) => ({
        loggedIn: true,
        user,
    })),
    logout: () => set((state) => ({ ...userInitialState, loggedIn: false })),
    signInResponse: '',
    setSignInResponse: (response) => set((state) => ({ signInResponse: response })),
    firstTimeUser: false,
    setFirstTimeUser: (userState) => set((state) => ({ firstTimeUser: userState })) 
})