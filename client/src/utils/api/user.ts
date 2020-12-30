import { axios } from "../../core"

type SignInData = {
    login: string,
    password: string
}

type SignUpData = {
    email: string,
    password: string,
    login: string
}

export default {
    signIn: (postData: SignInData) => axios.post("/user/signin", postData),
    signUp: (postData: SignUpData)  => axios.post("/user/signup", postData),
    verifyHash: (hash: string) => axios.get("/user/verify?hash=" + hash),
    getMe: () => axios.get("/user/me"),
    findUsers: (query: string) => axios.get("/user/find?query=" + query)
}