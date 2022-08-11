import Anonymous from '../../pageobjects/login/anonymous';

const VALID_PHONE_NUMBER = '84338061946';
const NOT_VALID_PHONE_NUMBER = '1234';
const OTP = '000000';
const OTP_FLASE = '123456';
const URL = 'https://sb.halome.dev/';
const TITLE_PAGE_OTP = 'Nhập mã OTP để hoàn tất đăng nhập';
const TITlE_PAGE_PHONE_NUMBER = 'Xin chào!';
const TITLE_PAGE_LOGIN = 'Đăng nhập';

describe('TEST ANONYMOUS LOGIN FLOWS', async () => {
    before(async () => {
        await Anonymous.open(URL);
        await browser.setWindowSize(1920, 1080);
    });

    it('should disable login button', async () => {
        await Anonymous.clickLoginAnonymous();
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should back login page', async () => {
        await Anonymous.clickBack();
        await expect(Anonymous.titleLoginVerify).toHaveText(TITLE_PAGE_LOGIN);
    });

    it('should disble login button', async () => {
        await Anonymous.clickLoginAnonymous();
        await Anonymous.enterPhoneNumber(NOT_VALID_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await expect(Anonymous.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Anonymous.clickStartLogin();
        await expect(Anonymous.titleLoginVerify).toHaveText(TITLE_PAGE_OTP);
        await expect(Anonymous.btnResendOtpViaSms).not.toBeDisabled();
    });

    it('should not back previous page', async () => {
        await Anonymous.clickBack();
        await browser.dismissAlert();
        await expect(Anonymous.titleLoginVerify).toHaveText(TITLE_PAGE_OTP);
    });

    it('should back previous page', async () => {
        await Anonymous.clickBack();
        await browser.acceptAlert();
        await expect(Anonymous.titleLoginVerify).toHaveText(TITlE_PAGE_PHONE_NUMBER);
    });

    it('should process to verification step', async () => {
        await Anonymous.enterPhoneNumber(VALID_PHONE_NUMBER);
        await Anonymous.clickStartLogin();
        await Anonymous.clickResendOtpViaSms();
        await expect(Anonymous.btnResendOtpViaSms).not.toBeExisting();
    });

    it('should show error notify', async () => {
        await Anonymous.enterOtp(OTP_FLASE);
        await expect(Anonymous.otpErrorVerify).toBeExisting();
    });

    it('should open home page', async () => {
        await Anonymous.enterOtp(OTP);
        await expect(browser).toHaveUrl(URL);
    });
});
