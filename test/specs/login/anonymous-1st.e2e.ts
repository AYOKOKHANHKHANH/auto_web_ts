import Anonymous from '../../pageobjects/login/anonymous';

const URL = 'https://sb.halome.dev/';
const PHONE = Math.floor(Math.random() * 1000000000).toString();
const OTP = '000000';
const NAME = 'Horse';

describe('TESS THE FIRST ANONYMOUS LOGIN FLOWS', async () => {
    beforeEach(async () => {
        await Anonymous.open(URL);
        await browser.setWindowSize(1920, 1080);
        await Anonymous.clickLoginAnonymous();
        await Anonymous.enterPhoneNumber(PHONE);
        await Anonymous.clickStartLogin();
        await Anonymous.enterOtp(OTP);
    });

    it('should have the same display name', async () => {
        await Anonymous.enterDisplayName(NAME);
        await Anonymous.clickContinue();
        await Anonymous.clickAvatar();
        await expect(Anonymous.displayNameVerify).toHaveText(NAME);
    });
});
