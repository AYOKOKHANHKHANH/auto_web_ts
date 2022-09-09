import { displayName, otp, phoneNumber } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import Halome from '../../../../pageobjects/account/login/halome/halome';
import Logout from '../../../../pageobjects/account/logout/logout';
import LeftSidebar from '../../../../pageobjects/left-sidebar/left-sidebar';

describe('TESS THE FIRST HALOME LOGIN FLOWS', async () => {
    before(async () => {
        await Halome.open();
        await Halome.clickLoginHalome();
    });

    it('should disable Resend button', async () => {
        await Halome.enterPhoneNumber(Halome.randomPhoneNumber());
        await expect(Halome.inputPhoneNumber).toBeExisting();
        // await browser.pause(2000);
        await Halome.clickStartLogin();
        await expect(Halome.btnResendOtpViaSms).not.toBeExisting();
        await expect(Halome.btnVerifyResend).toBeDisabled();
    });

    it('should enable Resend button after 60s', async () => {
        await Halome.btnVerifyResend.waitForEnabled({ timeout: Halome.timeoutResendCode() });
        await expect(Halome.btnVerifyResend).not.toBeDisabled();
    });

    it('should open input display name page', async () => {
        await Halome.enterOtp(otp.OTP);
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.DISPLAY_NAME_PAGE);
        await expect(Halome.btnContinue).not.toBeDisabled();
    });

    it('should focus text input display name', async () => {
        await expect(Halome.inputDisplayName).toBeFocused();
    });

    it('should enable continue button', async () => {
        await Halome.enterDisplayName(displayName.DISPLAY_NAME);
        await expect(Halome.btnContinue).not.toBeDisabled();
    });

    it('should have the same display name', async () => {
        await Halome.clickContinue();
        await LeftSidebar.clickAvatar();
        await expect(Halome.displayNameVerify).toHaveText(displayName.DISPLAY_NAME);
    });

    it('should log in successful when display name is empty', async () => {
        await Logout.logoutSuccess();
        await Halome.clickLoginHalome();
        await Halome.enterPhoneNumber(Halome.randomPhoneNumber());
        await Halome.clickStartLogin();
        await Halome.enterOtp(otp.OTP);
        await Halome.clickContinue();
    });
});
