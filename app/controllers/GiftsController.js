import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../services/AxiosService.js";
import { giftsService } from "../services/giftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
    constructor() {
        AppState.on('user', this.getGifts)
        AppState.on('gifts', this.drawGifts)
        console.log('GiftsController init');
    }

    drawGifts() {
        let gifts = AppState.gifts
        // let giftsHTMLString = ''
        // gifts.forEach(gift => {

        // });
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
        }

    }
}
