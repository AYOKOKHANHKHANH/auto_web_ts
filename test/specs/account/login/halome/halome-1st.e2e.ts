import { displayName, otp, phoneNumber } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import Halome from '../../../../pageobjects/account/login/halome/halome';
import LeftSidebar from '../../../../pageobjects/left-sidebar/left-sidebar';

describe('TESS THE FIRST HALOME LOGIN FLOWS', async () => {
    before(async () => {
        await Halome.open();
        await Halome.clickLoginHalome();
    });

    it('should open input display name page', async () => {
        await Halome.enterPhoneNumber(phoneNumber.NEW_PHONE);
        await Halome.clickStartLogin();
        await Halome.enterOtp(otp.OTP);
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.DISPLAY_NAME_PAGE);
        await expect(Halome.btnContinue).not.toBeDisabled();
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
});
