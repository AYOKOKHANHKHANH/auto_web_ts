// eslint-disable-next-line @typescript-eslint/no-var-requires
const { DataLogin } = require('../../data/login/login-anonymous-dt');
import Anonymous from '../../pageobjects/login/anonymous';

describe('TESS THE FIRST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        Anonymous.open(DataLogin.URL);
        await browser.setWindowSize(1920, 1080);
        await Anonymous.clickLoginAnonymous();
    });

    it('should open input display name page', async () => {
        await Anonymous.enterPhoneNumber(DataLogin.NEW_PHONE);
        await Anonymous.clickStartLogin();
        await Anonymous.enterOtp(DataLogin.OTP);
        await expect(Anonymous.titleLoginVerify).toHaveText(DataLogin.TITLE_INPUT_DISPLAY_NAME_PAGE);
        await expect(Anonymous.btnContinue).not.toBeDisabled();
    });

    it('should enable continue button', async () => {
        await Anonymous.enterDisplayName(DataLogin.DISPLAY_NAME);
        await expect(Anonymous.btnContinue).not.toBeDisabled();
    });

    it('should have the same display name', async () => {
        await Anonymous.clickContinue();
        await Anonymous.clickAvatar();
        await expect(Anonymous.displayNameVerify).toHaveText(DataLogin.DISPLAY_NAME);
    });
});
