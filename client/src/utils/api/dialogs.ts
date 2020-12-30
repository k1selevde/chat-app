import { axios } from "../../core";



export default {
    getAll: () => axios.get("/dialogs"),
    create: ( partner: string, text: string) => axios.post("/dialogs", {partner, text})
}