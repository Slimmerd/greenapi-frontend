import axios from 'axios';
import {SendMessageT} from "../types/SendMessageT";

export const GreenAPI = {
    async sendMessage(messageObject: SendMessageT, idInstance: string, apiTokenInstance: string) {
        const res = await axios.post(`https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            ...messageObject
        }, {})
            .catch((err) => {
                console.log("err", err);
                return {data: false};
            });
        return res.data;
    },

    async getNotification(idInstance: string, apiTokenInstance: string) {
        const res = await axios.get(`https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}
`, {})
            .catch((err) => {
                console.log("err", err);
                return {data: false};
            });

        if (res.data.receiptId !== null) {
            await this.deleteNotification(res.data.receiptId, idInstance, apiTokenInstance)
        }

        return res.data;
    },

    async deleteNotification(receiptId: string, idInstance: string, apiTokenInstance: string) {
        const res = await axios.delete(`https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}
`, {})
            .catch((err) => {
                console.log("err", err);
                return {data: false};
            });

        return res.data;
    },


}