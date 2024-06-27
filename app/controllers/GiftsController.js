import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../services/AxiosService.js";
import { giftsService } from "../services/giftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class GiftsController {
    constructor() {
        AppState.on('user', this.getGifts)
        AppState.on('gifts', this.drawGifts)
        console.log('GiftsController init');
    }

    drawGifts() {
        let gifts = AppState.gifts
        let giftsHTMLString = ''
        gifts.forEach(gift => {
            switch (gift.opened) {
                case true:
                    giftsHTMLString += gift.openedHTMLTemplate
                    console.log(gift);
                    break;
                case false:
                    giftsHTMLString += gift.unopenedHTMLTemplate
                    break
            }

        });
        setHTML('gifts', giftsHTMLString)
    }

    async getGifts() {
        try {
            await giftsService.getGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async openGift(giftId) {
        try {
            await giftsService.openGift(giftId)
            this.drawGifts()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createGift() {
        try {
            event.preventDefault()
            const form = event.target
            const formData = getFormData(form)
            await giftsService.createGift(formData)
            this.drawGifts()
        } catch (error) {
            Pop.error(error)
        }
    }
}
