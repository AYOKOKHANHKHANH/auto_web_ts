import { password, pin, username } from '../../../../data/login';
import Page from '../../../page';

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
        return $('#phone-verify-form-input-1');
    }

    get notifyPinFalse() {
        return $('#otp-form-need-error');
    }

    get inputPin1() {
        return $('[aria-label="Character 1."]');
    }

    get inputPin2() {
        return $('[aria-label="Character 2."]');
    }

    get inputPin3() {
        return $('[aria-label="Character 3."]');
    }

    get inputPin4() {
        return $('[aria-label="Character 4."]');
    }

    get inputPin5() {
        return $('[aria-label="Character 5."]');
    }

    get inputPin6() {
        return $('[aria-label="Character 6."]');
    }

    async enterPin1(pin) {
        return this.inputPin1.setValue(pin);
    }

    async enterPin2(pin) {
        return this.inputPin2.setValue(pin);
    }

    async enterPin3(pin) {
        return this.inputPin3.setValue(pin);
    }

    async enterPin4(pin) {
        return this.inputPin4.setValue(pin);
    }

    async enterPin5(pin) {
        return this.inputPin5.setValue(pin);
    }

    async enterPin6(pin) {
        return this.inputPin6.setValue(pin);
    }

    async clickLoginHahalolo() {
        await this.btnLoginHahalolo.waitForClickable({ timeout: this.timeoutDisplay() });
        return this.btnLoginHahalolo.click();
    }

    async clickNotYou() {
        await this.btnNotYou.waitForClickable({ timeout: this.timeoutDisplay() });
        return this.btnNotYou.click();
    }

    async clickLogin() {
        await this.btnLogin.waitForClickable({ timeout: this.timeoutDisplay() });
        return this.btnLogin.click();
    }

    async enterUsername(username) {
        await this.inputUsername.waitForClickable({ timeout: this.timeoutDisplay() });
        return this.inputUsername.setValue(username);
    }

    async enterPassword(password) {
        await this.inputPassword.waitForClickable({ timeout: this.timeoutDisplay() });
        return this.inputPassword.setValue(password);
    }

    async clickBack() {
        return this.btnBack.click();
    }

    async clickContinue() {
        await this.btnContinue.waitForDisplayed({ timeout: this.timeoutDisplay() });
        return this.btnContinue.click();
    }

    async clickAccept() {
        await this.btnAccept.waitForClickable({ timeout: this.timeoutDisplay() });
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
