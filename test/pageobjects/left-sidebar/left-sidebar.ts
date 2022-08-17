import Page from '../page';

class LeftSidebar extends Page {
    get btnAvatar() {
        return $('#auth-user-profile-button');
    }

    async clickAvatar() {
        return this.btnAvatar.click();
    }
}

export default new LeftSidebar();
