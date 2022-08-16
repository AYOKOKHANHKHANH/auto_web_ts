import Page from '../page';

class Hahalolo extends Page {
    get btnLoginHahalolo() {
        return $('button[id="platforms-halo"]');
    }

    get btnNotYou() {
        return $('#halo-login-form-button-logout');
    }

    get inputUsername() {
        return $('#accountId');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('.MuiButton-label');
    }

    async clickLoginHahalolo() {
        return this.btnLoginHahalolo.click();
    }

    async clickNotYou() {
        return this.btnNotYou.click();
    }

    async clickLogin() {
        return this.btnLogin.click();
    }
}

export default new Hahalolo();
