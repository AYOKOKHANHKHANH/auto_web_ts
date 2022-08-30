import { invalidValue, otp, password, username } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import ForgotPin from '../../../../pageobjects/account/login/hahalolo/forgot-pin';
import Hahalolo from '../../../../pageobjects/account/login/hahalolo/hahalolo';

describe('TEST FORGOT PIN FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(username.USERNAME);
        await Hahalolo.enterPassword(password.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
    });

    it('should into input OTP page', async () => {
        await ForgotPin.clickForgotPinCode();
        await expect(ForgotPin.titleVerify).toHaveText(verifyTitle.OTP_HAHALOLO);
    });

    it('should existing forgot pin code button when click cancel', async () => {
        await ForgotPin.clickCancel();
        await expect(ForgotPin.btnForgotPinCode).toBeExisting();
    });

    it('should disable accept button when not enter otp', async () => {
        await ForgotPin.clickForgotPinCode();
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input special charactor', async () => {
        await ForgotPin.enterOtp(invalidValue.SPECIAL_CHARACTERS);
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input alphabet', async () => {
        await ForgotPin.enterOtp(invalidValue.ALPHABET);
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input otp less more than 6', async () => {
        await ForgotPin.enterOtp(invalidValue.LESS_THAN_6);
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should show error notification when input otp is false', async () => {
        await ForgotPin.enterOtp(otp.OTP_FALSE);
        await ForgotPin.clickAccept();
        await expect(ForgotPin.notifyOtpFalse).toBeExisting();
    });

    it('should enable button resend when not enter otp after 1 minute', async () => {
        await ForgotPin.btnResendOtp.waitForEnabled({ timeout: 60000 });
        await expect(ForgotPin.btnResendOtp).not.toBeDisabled();
    });

    it('should into reset pin page', async () => {
        await ForgotPin.enterOtp(otp.OTP);
        await ForgotPin.clickAccept();
        await expect(ForgotPin.titleVerify).toHaveText(verifyTitle.RESET_PIN);
    });
});
