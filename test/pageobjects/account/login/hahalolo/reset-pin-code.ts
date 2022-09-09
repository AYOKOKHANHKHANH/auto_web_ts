import Page from '../../../page';

class ResetPinCode extends Page {
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

    get inputPin1() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 1."]');
    }

    get inputPin2() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 2."]');
    }

    get inputPin3() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 3."]');
    }

    get inputPin4() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 4."]');
    }

    get inputPin5() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 5."]');
    }

    get inputPin6() {
        return $('#otp-form-set-pin-input-1-1[aria-label="Character 6."]');
    }

    get inputConformPin1() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 1."]');
    }

    get inputConFormPin2() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 2."]');
    }

    get inputConformPin3() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 3."]');
    }

    get inputConformPin4() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 4."]');
    }

    get inputConformPin5() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 5."]');
    }

    get inputConformPin6() {
        return $('#otp-form-set-pin-input-2-1[aria-label="Character 6."]');
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

    async enterConformPin1(pin) {
        return this.inputConformPin1.setValue(pin);
    }

    async enterConformPin2(pin) {
        return this.inputConFormPin2.setValue(pin);
    }

    async enterConformPin3(pin) {
        return this.inputConformPin3.setValue(pin);
    }

    async enterConformPin4(pin) {
        return this.inputConformPin4.setValue(pin);
    }

    async enterConformPin5(pin) {
        return this.inputConformPin5.setValue(pin);
    }

    async enterConformPin6(pin) {
        return this.inputConformPin6.setValue(pin);
    }

    async enterNewPin(pin) {
        await this.inputNewPin.waitForDisplayed({ timeout: this.timeoutDisplay() });
        await this.inputNewPin.setValue(pin);
    }

    async enterNewPinAgain(pin) {
        await this.inputNewPinAgain.waitForDisplayed({ timeout: this.timeoutDisplay() });
        await this.inputNewPinAgain.setValue(pin);
    }

    async clickSave() {
        return this.btnSave.click();
    }
}
export default new ResetPinCode();
