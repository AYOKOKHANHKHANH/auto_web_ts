// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AnonymousDt } = require('../../data/login/anonymous-dt');
import Anonymous from '../../pageobjects/login/anonymous';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Anonymous.open();
        await browser.setWindowSize(1920, 1080);
    });

    it('should disable login button', async () => {
        await Anonymous.clickLoginAnonymous();
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should back login page', async () => {
        await Anonymous.clickBack();
        await expect(Anonymous.titleLoginVerify).toHaveText(AnonymousDt.TITLE_LOGIN_PAGE);
    });

    it('should disable login button when input special character', async () => {
        await Anonymous.clickLoginAnonymous();
        await Anonymous.enterPhoneNumber('%$#@$^&(');
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should disable login button when input alphabet', async () => {
        await Anonymous.enterPhoneNumber('jsdhflslfhk');
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should disable login button when input < 5 number', async () => {
        await Anonymous.enterPhoneNumber(AnonymousDt.INVALID_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(AnonymousDt.VALID_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.clickStartLogin();
        await expect(Anonymous.titleLoginVerify).toHaveText(AnonymousDt.TITLE_OTP_PAGE);
        await expect(Anonymous.btnResendOtpViaSms).not.toBeDisabled();
    });

    it('should not back previous page', async () => {
        await Anonymous.clickBack();
        await browser.dismissAlert();
        await expect(Anonymous.titleLoginVerify).toHaveText(AnonymousDt.TITLE_OTP_PAGE);
    });

    it('should back previous page', async () => {
        await Anonymous.clickBack();
        await browser.acceptAlert();
        await expect(Anonymous.titleLoginVerify).toHaveText(AnonymousDt.TITlE_PHONE_NUMBER_PAGE);
    });

    it('should show error notify', async () => {
        await Anonymous.enterPhoneNumber(AnonymousDt.VALID_PHONE_NUMBER);
        await Anonymous.clickStartLogin();
        await Anonymous.enterOtp(AnonymousDt.OTP_FALSE);
        await expect(Anonymous.otpErrorVerify).toBeExisting();
    });

    it('should open home page', async () => {
        await Anonymous.clickResendOtpViaSms();
        await Anonymous.enterOtp(AnonymousDt.OTP);
        await expect(browser).toHaveUrl(Anonymous.getUrl());
    });
});
