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

    get btnVerifyResend() {
        return $('#phone-verify-form-button-resend');
    }

    get inputOtp1() {
        return $('#phone-verify-form-input-1[aria-label="Character 1."]');
    }

    get inputOtp2() {
        return $('#phone-verify-form-input-1[aria-label="Character 2."]');
    }

    get inputOtp3() {
        return $('#phone-verify-form-input-1[aria-label="Character 3."]');
    }

    get inputOtp4() {
        return $('#phone-verify-form-input-1[aria-label="Character 4."]');
    }

    get inputOtp5() {
        return $('#phone-verify-form-input-1[aria-label="Character 5."]');
    }

    get inputOtp6() {
        return $('#phone-verify-form-input-1[aria-label="Character 6."]');
    }

    async enterOtp1(otp) {
        return this.inputOtp1.setValue(otp);
    }

    async enterOtp2(otp) {
        return this.inputOtp2.setValue(otp);
    }

    async enterOtp3(otp) {
        return this.inputOtp3.setValue(otp);
    }

    async enterOtp4(otp) {
        return this.inputOtp4.setValue(otp);
    }

    async enterOtp5(otp) {
        return this.inputOtp5.setValue(otp);
    }

    async enterOtp6(otp) {
        return this.inputOtp6.setValue(otp);
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
