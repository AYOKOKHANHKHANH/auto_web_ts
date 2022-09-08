export default class Page {
    getUrl() {
        return 'https://sb.halome.dev/';
    }
    async open() {
        await browser.url(this.getUrl());
        await browser.setWindowSize(1000, 1000);
    }
    ramdomAlphabet() {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const randomNum = Math.round(Math.random() * 26);
        return letters.charAt(randomNum);
    }
    randomSpecialCharacter() {
        const letters = '`~!@#$%^&*()_-+={[}]:;<,>.?/`';
        const randomNum = Math.round(Math.random() * 30);
        return letters.charAt(randomNum);
    }
}
