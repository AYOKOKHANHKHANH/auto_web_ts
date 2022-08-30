import { invalidValue, password, pin, username } from '../../../../data/login';
import { verifyTitle } from '../../../../data/verify-title';
import Hahalolo from '../../../../pageobjects/account/login/hahalolo/hahalolo';

describe('TEST LOGIN HAHALOLO FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
    });

    it('should enable login button', async () => {
        await Hahalolo.clickLoginHahalolo();
        await expect(Hahalolo.btnLogin).toBeEnabled();
    });

    it('should not into account verification page', async () => {
        await Hahalolo.enterUsername(username.USERNAME_FALSE);
        await Hahalolo.enterPassword(password.PASSWORD_FALSE);
        await Hahalolo.clickLogin();
        await expect(Hahalolo.titleHalome).not.toBeExisting();
    });

    it('should into account verification page', async () => {
        await Hahalolo.enterUsername(username.USERNAME);
        await Hahalolo.enterPassword(password.PASSWORD);
        await Hahalolo.clickLogin();
        await expect(Hahalolo.btnNotYou).not.toBeDisabled();
    });

    it('should back to login page when click back', async () => {
        await Hahalolo.clickBack();
        await expect(browser).toHaveUrl(Hahalolo.getUrl() + 'welcome');
    });

    it('should into hahalolo page when click not you button', async () => {
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.clickNotYou();
        await expect(browser).toHaveTitle(verifyTitle.SSO_PAGE);
    });

    it('should into enter pin code page', async () => {
        await Hahalolo.enterUsername(username.USERNAME);
        await Hahalolo.enterPassword(password.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
        await expect(Hahalolo.titleLogin).toHaveText(verifyTitle.ENTER_PIN_PAGE);
    });

    it('should show error notify when input pin code is false', async () => {
        await Hahalolo.enterPinCode(pin.PIN_FALSE);
        await Hahalolo.clickAccept();
        await expect(Hahalolo.notifyPinFalse).toBeExisting();
    });

    it('should back to welcome page', async () => {
        await Hahalolo.clickBack();
        await expect(browser).toHaveUrl(Hahalolo.getUrl() + 'welcome');
    });

    it('should disable accept button when input pin code empty', async () => {
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.clickContinue();
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input pin code is special character', async () => {
        await Hahalolo.enterPinCode(invalidValue.SPECIAL_CHARACTERS);
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input pin code is alphabet', async () => {
        await Hahalolo.enterPinCode(invalidValue.ALPHABET);
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input pin code less more than 6', async () => {
        await Hahalolo.enterPinCode(invalidValue.LESS_THAN_6);
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should into home page', async () => {
        await Hahalolo.enterPinCode(pin.PIN);
        await Hahalolo.clickAccept();
        await expect(browser).toHaveUrl(Hahalolo.getUrl());
    });
});