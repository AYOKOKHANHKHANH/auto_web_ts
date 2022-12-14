import Page from '../page';

class Anonymous extends Page {
    get inputPhoneNumber() {
        return $('input[id="phone-login-form-input-phone"]');
    }

    get btnStartLogin() {
        return $('button[id="phone-login-form-button-ok"]');
    }

    get titleLoginVerify() {
        return $('#auth-wrapper-title');
    }

    get btnLoginAnonymous() {
        return $('button[id="platforms-halome"]');
    }

    get btnResendOtpViaSms() {
        return $('button[id="phone-verify-form-button-request-sms"]');
    }

    get btnBack() {
        return $('#auth-wrapper-go-back');
    }

    get inputOtp() {
        return $('input[id="phone-verify-form-input-1"]');
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

    get btnAvatar() {
        return $('#auth-user-profile-button');
    }

    get displayNameVerify() {
        return $('#auth-user-content-display-name');
    }

    async clickLoginAnonymous() {
        return this.btnLoginAnonymous.click();
    }

    async enterPhoneNumber(phone: string) {
        return this.inputPhoneNumber.setValue(phone);
    }

    async clickStartLogin() {
        return this.btnStartLogin.click();
    }

    async clickResendOtpViaSms() {
        return this.btnResendOtpViaSms.click();
    }

    async clickBack() {
        return this.btnBack.click();
    }

    async enterOtp(Otp) {
        return this.inputOtp.setValue(Otp);
    }

    async enterDisplayName(name) {
        return this.inputDisplayName.setValue(name);
    }

    async clickContinue() {
        return this.btnContinue.click();
    }

    async clickAvatar() {
        return this.btnAvatar.click();
    }
}

export default new Anonymous();
