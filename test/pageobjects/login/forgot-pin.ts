import Page from '../page';

class ForgotPin {
    get btnForgotPinCode() {
        return $('#otp-form-need-button-forgot');
    }

    get titleVerify() {
        return $('#auth-wrapper-title');
    }

    get inputOtp() {
        return $('#otp-form-input-1');
    }

    get btnCancel() {
        return $('#otp-form-otp-button-cancel');
    }

    get btnAccept() {
        return $('#otp-form-otp-button-ok');
    }

    get btnResendOtp() {
        return $('#otp-form-otp-button-resend');
    }

    get notifyOtpFalse() {
        return $('#otp-form-otp-error');
    }

    get btnBack() {
        return $('#auth-wrapper-go-back');
    }

    async clickForgotPinCode() {
        await this.btnForgotPinCode.waitForClickable({ timeout: 10000 });
        return this.btnForgotPinCode.click();
    }

    async enterOtp(otp) {
        return this.inputOtp.setValue(otp);
    }

    async clickCancel() {
        return this.btnCancel.click();
    }

    async clickAccept() {
        return this.btnAccept.click();
    }

    async clickResendOtp() {
        return this.btnResendOtp.click();
    }

    async clickBack() {
        return this.btnBack.click();
    }
}
export default new ForgotPin();
