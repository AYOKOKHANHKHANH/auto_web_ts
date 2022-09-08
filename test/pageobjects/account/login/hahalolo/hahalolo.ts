import { username, password, pin } from '../../../../data/login';
import Page from '../../../page';

class Hahalolo extends Page {
    TIMEOUT = 20000;
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
        await this.btnLoginHahalolo.waitForClickable({ timeout: this.TIMEOUT });
        return this.btnLoginHahalolo.click();
    }

    async clickNotYou() {
        await this.btnNotYou.waitForClickable({ timeout: this.TIMEOUT });
        return this.btnNotYou.click();
    }

    async clickLogin() {
        await this.btnLogin.waitForClickable({ timeout: this.TIMEOUT });
        return this.btnLogin.click();
    }

    async enterUsername(username) {
        await this.inputUsername.waitForClickable({ timeout: this.TIMEOUT });
        return this.inputUsername.setValue(username);
    }

    async enterPassword(password) {
        await this.inputPassword.waitForClickable({ timeout: this.TIMEOUT });
        return this.inputPassword.setValue(password);
    }

    async clickBack() {
        return this.btnBack.click();
    }

    async clickContinue() {
        await this.btnContinue.waitForDisplayed({ timeout: this.TIMEOUT });
        return this.btnContinue.click();
    }

    async clickAccept() {
        await this.btnAccept.waitForClickable({ timeout: this.TIMEOUT });
        return this.btnAccept.click();
    }

    async enterPinCode(pin) {
        await this.inputPinCode.clearValue();
        return await this.inputPinCode.setValue(pin);
    }

    async loginSuccess() {
        await this.open();
        await this.clickLoginHahalolo();
        await this.enterUsername(username.USERNAME);
        await this.enterPassword(password.PASSWORD);
        await this.clickLogin();
        await this.clickContinue();
        await this.enterPinCode(pin.PIN);
        await this.clickAccept();
    }
}

export default new Hahalolo();
