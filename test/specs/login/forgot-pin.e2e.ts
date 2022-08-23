import { ForgotPinDt } from '../../data/login/forgot-pin-dt';
import { HahaloloDt } from '../../data/login/hahalolo-dt';
import ForgotPin from '../../pageobjects/login/forgot-pin';
import Hahalolo from '../../pageobjects/login/hahalolo';

describe('TEST FORGOT PIN FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
    });

    it('should into input OTP page', async () => {
        await ForgotPin.clickForgotPinCode();
        await expect(ForgotPin.titleVerify).toHaveText(ForgotPinDt.TITLE_INPUT_OTP);
    });

    it('should existing forgot pin code button when click cancel', async () => {
        await ForgotPin.clickCancel();
        await expect(ForgotPin.btnForgotPinCode).toBeExisting();
    });

    it('should disable accept button when not enter otp', async () => {
        await ForgotPin.clickForgotPinCode();
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input otp less more than 6', async () => {
        await ForgotPin.enterOtp('0000');
        await expect(ForgotPin.btnAccept).toBeDisabled();
    });

    it('should show error notification when input otp is false', async () => {
        await ForgotPin.enterOtp('212233');
        await ForgotPin.clickAccept();
        await expect(ForgotPin.notifyOtpFalse).toBeExisting();
    });

    // it('should enable button resend when not enter otp after 1 minute', async () => {
    //     await ForgotPin.btnResendOtp.waitForEnabled({ timeout: 60000 });
    //     await expect(ForgotPin.btnResendOtp).not.toBeDisabled();
    // });

    it('should into reset pin page', async () => {
        await ForgotPin.enterOtp(ForgotPinDt.OTP);
        await ForgotPin.clickAccept();
        await expect(ForgotPin.titleVerify).toHaveText(ForgotPinDt.TITLE_RESET_PIN);
    });

    // it('should back to forgot pin code when click back button', async () => {
    // })

    // it('should show error notification when click forgot pin code more than 3 times', async () => {
    // });
});
