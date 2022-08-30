import Page from '../../../page';

class Halome extends Page {
    TIMEOUT = 10000;
    get inputPhoneNumber() {
        return $('input[id="phone-login-form-input-phone"]');
    }

    get btnStartLogin() {
        return $('#phone-login-form-button-ok');
    }

    get titleLoginVerify() {
        return $('#auth-wrapper-title');
    }

    get btnLoginHalome() {
        return $('button[id="platforms-halome"]');
    }

    get btnResendOtpViaSms() {
        return $('button[id="phone-verify-form-button-request-sms"]');
    }

    get btnBack() {
        return $('#auth-wrapper-go-back');
    }

    get inputOtp() {
        return $('#phone-verify-form-input-1');
    }

    get otpErrorVerify() {
        return $('#error');
    }

    get inputDisplayName() {
        return $('input[id="phone-login-form-input"]');
    }

    get btnContinue() {
        return $('button[id="phone-login-form-button-ok"]');
    }

    get displayNameVerify() {
        return $('#auth-user-content-display-name');
    }

    async clickLoginHalome() {
        return this.btnLoginHalome.click();
    }

    async enterPhoneNumber(phone: string) {
        return this.inputPhoneNumber.setValue(phone);
    }

    async clickStartLogin() {
        await this.btnStartLogin.waitForClickable({ timeout: this.TIMEOUT });
        return this.btnStartLogin.click();
    }

    async clickResendOtpViaSms() {
        return this.btnResendOtpViaSms.click();
    }

    async clickBack() {
        return this.btnBack.click();
    }

    async enterOtp(Otp) {
        await this.inputOtp.waitForDisplayed({ timeout: this.TIMEOUT });
        await this.inputOtp.setValue(Otp);
    }

    async enterDisplayName(name) {
        await this.inputDisplayName.waitForDisplayed({ timeout: this.TIMEOUT });
        return this.inputDisplayName.setValue(name);
    }

    async clickContinue() {
        return this.btnContinue.click();
    }
}
export default new Halome();
