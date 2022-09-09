import { invalidValue, otp, password, pin, username } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import ForgotPin from '../../../../pageobjects/account/login/hahalolo/forgot-pin';
import Hahalolo from '../../../../pageobjects/account/login/hahalolo/hahalolo';
import ResetPinCode from '../../../../pageobjects/account/login/hahalolo/reset-pin-code';

describe('TEST RESET PIN CODE FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(username.USERNAME);
        await Hahalolo.enterPassword(password.PASSWORD);
        await Hahalolo.clickLogin();
        await browser.pause(1000);
        await Hahalolo.clickContinue();
        await ForgotPin.clickForgotPinCode();
        await ForgotPin.enterOtp(otp.OTP);
    });

    it('should disable save button when both input pin is empty', async () => {
        await ForgotPin.clickAccept();
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should focus at Character 1', async () => {
        await expect(ResetPinCode.inputPin1).toBeFocused();
    });

    it('should not enter alphabet', async () => {
        await ResetPinCode.enterPin1(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin1).toHaveValue('');

        await ResetPinCode.enterPin2(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin2).toHaveValue('');

        await ResetPinCode.enterPin3(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin3).toHaveValue('');

        await ResetPinCode.enterPin4(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin4).toHaveValue('');

        await ResetPinCode.enterPin5(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin5).toHaveValue('');

        await ResetPinCode.enterPin6(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputPin6).toHaveValue('');

        await ResetPinCode.enterConformPin1(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConformPin1).toHaveValue('');

        await ResetPinCode.enterConformPin2(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConFormPin2).toHaveValue('');

        await ResetPinCode.enterConformPin3(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConformPin3).toHaveValue('');

        await ResetPinCode.enterConformPin4(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConformPin4).toHaveValue('');

        await ResetPinCode.enterConformPin5(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConformPin5).toHaveValue('');

        await ResetPinCode.enterConformPin6(ResetPinCode.randomAlphabet());
        await expect(ResetPinCode.inputConformPin6).toHaveValue('');
    });

    it('should not enter special characters', async () => {
        await ResetPinCode.enterPin1(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin1).toHaveValue('');

        await ResetPinCode.enterPin2(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin2).toHaveValue('');

        await ResetPinCode.enterPin3(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin3).toHaveValue('');

        await ResetPinCode.enterPin4(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin4).toHaveValue('');

        await ResetPinCode.enterPin5(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin5).toHaveValue('');

        await ResetPinCode.enterPin6(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputPin6).toHaveValue('');

        await ResetPinCode.enterConformPin1(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConformPin1).toHaveValue('');

        await ResetPinCode.enterConformPin2(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConFormPin2).toHaveValue('');

        await ResetPinCode.enterConformPin3(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConformPin3).toHaveValue('');

        await ResetPinCode.enterConformPin4(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConformPin4).toHaveValue('');

        await ResetPinCode.enterConformPin5(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConformPin5).toHaveValue('');

        await ResetPinCode.enterConformPin6(ResetPinCode.randomSpecialCharacter());
        await expect(ResetPinCode.inputConformPin6).toHaveValue('');
    });

    it('should disable save button when input confirm Pin is empty', async () => {
        await ResetPinCode.enterNewPin(pin.PIN);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when both input Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(invalidValue.LESS_THAN_6);
        await ResetPinCode.enterNewPinAgain(invalidValue.LESS_THAN_6);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input Pin is empty', async () => {
        await ResetPinCode.enterNewPinAgain(pin.PIN);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(invalidValue.LESS_THAN_6);
        await ResetPinCode.enterNewPinAgain(pin.PIN);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input confirm Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(pin.PIN);
        await ResetPinCode.enterNewPinAgain(invalidValue.LESS_THAN_6);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should show error notify when pin codes do not match', async () => {
        await ResetPinCode.enterNewPin(pin.PIN);
        await ResetPinCode.enterNewPinAgain(pin.PIN_FALSE);
        await expect(ResetPinCode.errorNotify).toBeExisting();
    });

    it('should into enter Pin code page', async () => {
        await ResetPinCode.enterNewPin(pin.PIN);
        await ResetPinCode.enterNewPinAgain(pin.PIN);
        await ResetPinCode.clickSave();
        await expect(Hahalolo.titleLogin).toHaveText(verifyTitle.ENTER_PIN_PAGE);
    });

    it('should into home page', async () => {
        await Hahalolo.enterPinCode(pin.PIN);
        await Hahalolo.clickAccept();
    });
});
