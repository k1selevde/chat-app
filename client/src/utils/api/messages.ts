import { axios } from "../../core";
import attachments from "../../redux/reducers/attachments";

export default {
    getAllByDialogId: (id: string) => axios.get("/messages?dialog=" + id),
    removeById: (id: string) => axios.delete("/messages?id=" + id),
    send: (text: string, dialogId: string, attachments: string) =>
        axios.post("/messages", {
            text,
            dialog_id: dialogId,
            attachments
        })
};