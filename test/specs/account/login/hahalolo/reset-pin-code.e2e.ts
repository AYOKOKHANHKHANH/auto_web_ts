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
        await Hahalolo.clickContinue();
        await ForgotPin.clickForgotPinCode();
        await ForgotPin.enterOtp(otp.OTP);
    });

    it('should disable save button when both input pin is empty', async () => {
        await ForgotPin.clickAccept();
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input alphabet', async () => {
        await ResetPinCode.enterNewPin(invalidValue.ALPHABET);
        await ResetPinCode.enterNewPinAgain(invalidValue.ALPHABET);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input special characters', async () => {
        await ResetPinCode.enterNewPin(invalidValue.SPECIAL_CHARACTERS);
        await ResetPinCode.enterNewPinAgain(invalidValue.SPECIAL_CHARACTERS);
        await expect(ResetPinCode.btnSave).toBeDisabled();
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
