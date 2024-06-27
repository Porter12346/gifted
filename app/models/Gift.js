export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.id = data.id
    }

    get unopenedHTMLTemplate(){
        return('')
    }
}