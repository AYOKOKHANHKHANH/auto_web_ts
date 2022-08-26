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

    get titleHalome() {
        return $('#halome-logo-slogan');
    }

    get titleLogin() {
        return $('#auth-wrapper-title');
    }

    get btnBack() {
        return $('#auth-wrapper-go-back');
    }

    get btnContinue() {
        return $('#halo-login-form-button-ok');
    }

    get btnAccept() {
        return $('#otp-form-need-button-ok');
    }

    get inputPinCode() {
        return $('input[id="phone-verify-form-input-1"]');
    }

    get notifyPinFalse() {
        return $('#otp-form-need-error');
    }

    async clickLoginHahalolo() {
        await this.btnLoginHahalolo.waitForClickable({ timeout: 10000 });
        return this.btnLoginHahalolo.click();
    }

    async clickNotYou() {
        await this.btnNotYou.waitForClickable({ timeout: 10000 });
        return this.btnNotYou.click();
    }

    async clickLogin() {
        return this.btnLogin.click();
    }

    async enterUsername(username) {
        await this.inputUsername.waitForClickable({ timeout: 20000 });
        return this.inputUsername.setValue(username);
    }

    async enterPassword(password) {
        await this.inputPassword.waitForClickable({ timeout: 20000 });
        return this.inputPassword.setValue(password);
    }

    async clickBack() {
        return this.btnBack.click();
    }

    async clickContinue() {
        await this.btnContinue.waitForClickable({ timeout: 20000 });
        return this.btnContinue.click();
    }

    async clickAccept() {
        await this.btnAccept.waitForClickable({ timeout: 20000 });
        return this.btnAccept.click();
    }

    async enterPinCode(pin) {
        await this.inputPinCode.clearValue();
        return await this.inputPinCode.setValue(pin);
    }
}

export default new Hahalolo();
