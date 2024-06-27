export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.id = data.id
    }

    get unopenedHTMLTemplate() {
        return `<div class="col-4 my-2">
                    <div class="gift d-flex align-items-center justify-content-center">
                        <button onclick="app.GiftsController.openGift('${this.id}')" class="btn btn-secondary m-3">
                            <h6>${this.tag}</h6>
                            <p>Click to open</p>
                        </button>
                    </div>
                </div>`
    }


    get openedHTMLTemplate() {
        return `
        <div class="col-4">
                <div class="text-center border rounded bg-secondary">
                    <img style=" background-position: center;
                    background-size: cover;
                    aspect-ratio: 1/1;" class="img-fluid"
                        src="${this.url}"
                        alt="">
                    <p>${this.tag}</p>
                </div>
            </div>
        </div>`
    }
}