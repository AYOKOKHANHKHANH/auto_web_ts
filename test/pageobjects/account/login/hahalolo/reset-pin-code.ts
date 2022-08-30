import Page from '../../../page';

class ResetPinCode extends Page {
    TIMEOUT = 10000;
    get inputNewPin() {
        return $('#otp-form-set-pin-input-1-1');
    }

    get inputNewPinAgain() {
        return $('#otp-form-set-pin-input-2-1');
    }

    get btnSave() {
        return $('#otp-form-set-button-ok');
    }

    get errorNotify() {
        return $('#otp-form-set-error');
    }

    async enterNewPin(pin) {
        await this.inputNewPin.waitForDisplayed({ timeout: this.TIMEOUT });
        await this.inputNewPin.setValue(pin);
    }

    async enterNewPinAgain(pin) {
        await this.inputNewPinAgain.waitForDisplayed({ timeout: this.TIMEOUT });
        await this.inputNewPinAgain.setValue(pin);
    }

    async clickSave() {
        return this.btnSave.click();
    }
}
export default new ResetPinCode();
