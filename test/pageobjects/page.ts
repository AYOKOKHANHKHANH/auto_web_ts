export default class Page {
    getUrl() {
        return 'https://sb.halome.dev/';
    }

    open() {
        return browser.url(this.getUrl());
    }
}
