import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";

class GiftsService {

    constructor() {
        console.log('GiftsService init');
    }

    async getGifts() {
        const response = await api.get('api/gifts')
        console.log(response.data);
        let gifts = response.data.map((gift) => new Gift(gift))
        AppState.gifts = gifts
        console.log(AppState.gifts);
    }
    async openGift(giftId) {
        const opened = { opened: true }
        // @ts-ignore
        const response = await api.put(`api/gifts/${giftId}`, opened)
        console.log(response.data);
        const GiftIndex = AppState.gifts.findIndex((gift) => gift.id == giftId)
        let newGift = new Gift(response.data)
        AppState.gifts[GiftIndex] = newGift

    }

    async createGift(data) {
        let newGift = new Gift(data)
        let response = await api.post('api/gifts', newGift)
        console.log(response)
        AppState.gifts.push(newGift)
    }
}
export const giftsService = new GiftsService()