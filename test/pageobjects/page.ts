export default class Page {
    getUrl() {
        return 'https://sb.halome.dev/';
    }

    async open() {
        await browser.url(this.getUrl());
        await browser.setWindowSize(1000, 1000);
        // await browser.maximizeWindow();
    }
}
