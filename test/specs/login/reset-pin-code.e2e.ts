import { ForgotPinDt } from '../../data/login/forgot-pin';
import { HahaloloDt } from '../../data/login/hahalolo';
import { ResetPinCodeDt } from '../../data/login/reset-pin-code';
import ForgotPin from '../../pageobjects/login/forgot-pin';
import Hahalolo from '../../pageobjects/login/hahalolo';
import ResetPinCode from '../../pageobjects/login/reset-pin-code';

describe('TEST RESET PIN CODE FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
        await ForgotPin.clickForgotPinCode();
        await ForgotPin.enterOtp(ForgotPinDt.OTP);
    });

    it('should disable save button when both input pin is empty', async () => {
        await ForgotPin.clickAccept();
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input alphabet', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.APHABET);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.APHABET);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input special characters', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.SPECIAL_CHARACTERS);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.SPECIAL_CHARACTERS);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input new Pin again is empty', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_TRUE);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when both input Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_LESS_6);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_LESS_6);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input Pin is empty', async () => {
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_TRUE);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should show error notify when pin codes do not match', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_TRUE);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_FALSE);
        await expect(ResetPinCode.errorNotify).toBeExisting();
    });

    it('should disable save button when input Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_LESS_6);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_TRUE);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should disable save button when input confirm Pin is less than 6', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_TRUE);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_LESS_6);
        await expect(ResetPinCode.btnSave).toBeDisabled();
    });

    it('should into enter Pin code page', async () => {
        await ResetPinCode.enterNewPin(ResetPinCodeDt.PIN_TRUE);
        await ResetPinCode.enterNewPinAgain(ResetPinCodeDt.PIN_TRUE);
        await ResetPinCode.clickSave();
        await expect(Hahalolo.titleLogin).toHaveText(HahaloloDt.TITLE_ENTER_PIN_CODE_PAGE);
    });
});
