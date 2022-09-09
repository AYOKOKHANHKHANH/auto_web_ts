import Page from '../../../page';

class ForgotPin extends Page {
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

    get inputOtp1() {
        return $('#otp-form-input-1[aria-label="Character 1."]');
    }

    get inputOtp2() {
        return $('#otp-form-input-1[aria-label="Character 2."]');
    }

    get inputOtp3() {
        return $('#otp-form-input-1[aria-label="Character 3."]');
    }

    get inputOtp4() {
        return $('#otp-form-input-1[aria-label="Character 4."]');
    }

    get inputOtp5() {
        return $('#otp-form-input-1[aria-label="Character 5."]');
    }

    get inputOtp6() {
        return $('#otp-form-input-1[aria-label="Character 6."]');
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

    async clickForgotPinCode() {
        await this.btnForgotPinCode.waitForClickable({ timeout: this.timeoutDisplay() });
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
