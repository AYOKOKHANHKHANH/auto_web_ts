import { AnonymousDt } from '../../data/login/anonymous';
import LeftSidebar from '../../pageobjects/left-sidebar/left-sidebar';
import Anonymous from '../../pageobjects/login/anonymous';

describe('TESS THE FIRST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Anonymous.open();
        await browser.setWindowSize(1920, 1080);
        await Anonymous.clickLoginAnonymous();
    });

    it('should open input display name page', async () => {
        await Anonymous.enterPhoneNumber(AnonymousDt.NEW_PHONE);
        await Anonymous.clickStartLogin();
        await Anonymous.enterOtp(AnonymousDt.OTP);
        await expect(Anonymous.titleLoginVerify).toHaveText(AnonymousDt.TITLE_INPUT_DISPLAY_NAME_PAGE);
        await expect(Anonymous.btnContinue).not.toBeDisabled();
    });

    it('should enable continue button', async () => {
        await Anonymous.enterDisplayName(AnonymousDt.DISPLAY_NAME);
        await expect(Anonymous.btnContinue).not.toBeDisabled();
    });

    it('should have the same display name', async () => {
        await Anonymous.clickContinue();
        await LeftSidebar.clickAvatar();
        await expect(Anonymous.displayNameVerify).toHaveText(AnonymousDt.DISPLAY_NAME);
    });
});
