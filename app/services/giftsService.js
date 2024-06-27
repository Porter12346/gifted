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
}
export const giftsService = new GiftsService()