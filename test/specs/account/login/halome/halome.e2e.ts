import { invalidValue, otp, phoneNumber } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import Halome from '../../../../pageobjects/account/login/halome/halome';

describe('TEST Halome LOGIN FLOWS', async () => {
    before(async () => {
        await Halome.open();
    });

    it('should disable login button', async () => {
        await Halome.clickLoginHalome();
        await expect(Halome.btnStartLogin).toBeDisabled();
    });

    it('should back login page', async () => {
        await Halome.clickBack();
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.WELCOME_PAGE);
    });

    it('should disable login button when input is empty', async () => {
        await Halome.clickLoginHalome();
        await expect(Halome.btnStartLogin).toBeDisabled();
    });

    it('should disable login button when input special character', async () => {
        await Halome.enterPhoneNumber(invalidValue.SPECIAL_CHARACTERS);
        await expect(Halome.btnStartLogin).toBeDisabled();
    });

    it('should disable login button when input alphabet', async () => {
        await Halome.enterPhoneNumber(invalidValue.ALPHABET);
        await expect(Halome.btnStartLogin).toBeDisabled();
    });

    it('should disable login button when input less more than 6', async () => {
        await Halome.enterPhoneNumber(invalidValue.LESS_THAN_6);
        await expect(Halome.btnStartLogin).toBeDisabled();
    });

    it('should enable login button after enter phone number', async () => {
        await Halome.enterPhoneNumber(phoneNumber.PHONE);
        await expect(Halome.btnStartLogin).not.toBeDisabled();
    });

    it('should process to verification step', async () => {
        await Halome.clickStartLogin();
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.OTP_HALOME);
        await expect(Halome.btnResendOtpViaSms).not.toBeDisabled();
        await expect(Halome.btnVerifyResend).toBeDisabled();
    });

    it('should focus at Character 1', async () => {
        await expect(Halome.inputOtp1).toBeFocused();
    });

    it('should not back previous page', async () => {
        await Halome.clickBack();
        await browser.dismissAlert();
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.OTP_HALOME);
    });

    it('should back previous page', async () => {
        await Halome.clickBack();
        await browser.acceptAlert();
        await expect(Halome.titleLoginVerify).toHaveText(verifyTitle.PHONE_NUMBER_PAGE);
    });

    it('should not input special character', async () => {
        await Halome.enterPhoneNumber(phoneNumber.PHONE);
        await Halome.clickStartLogin();

        await Halome.enterOtp1(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp1).toHaveValue('');

        await Halome.enterOtp2(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp2).toHaveValue('');

        await Halome.enterOtp3(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp3).toHaveValue('');

        await Halome.enterOtp4(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp4).toHaveValue('');

        await Halome.enterOtp5(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp5).toHaveValue('');

        await Halome.enterOtp6(Halome.randomSpecialCharacter());
        await expect(Halome.inputOtp6).toHaveValue('');
    });

    it('should not input alphabet', async () => {
        await Halome.enterOtp1(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp1).toHaveValue('');

        await Halome.enterOtp2(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp2).toHaveValue('');

        await Halome.enterOtp3(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp3).toHaveValue('');

        await Halome.enterOtp4(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp4).toHaveValue('');

        await Halome.enterOtp5(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp5).toHaveValue('');

        await Halome.enterOtp6(Halome.ramdomAlphabet());
        await expect(Halome.inputOtp6).toHaveValue('');
    });

    it('should show error notify', async () => {
        await Halome.enterOtp(otp.OTP_FALSE);
        await expect(Halome.otpErrorVerify).toBeExisting();
    });

    it('should focus at Character 1 after input false', async () => {
        await expect(Halome.inputOtp1).toBeFocused();
    });

    it('should enable button resend when not enter otp after 1 minute', async () => {
        await Halome.btnVerifyResend.waitForEnabled({ timeout: 60000 });
        await expect(Halome.btnVerifyResend).not.toBeDisabled();
    });

    it('should not existing resend Otp via SMS button', async () => {
        await Halome.clickResendOtpViaSms();
        await expect(Halome.btnResendOtpViaSms).not.toBeExisting();
    });

    it('should open home page', async () => {
        await Halome.enterOtp(otp.OTP);
        await expect(browser).toHaveUrl(Halome.getUrl());
    });
});
