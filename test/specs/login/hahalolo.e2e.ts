import { HahaloloDt } from '../../data/login/hahalolo';
import Hahalolo from '../../pageobjects/login/hahalolo';

describe('TEST LOGIN HAHALOLO FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
    });

    it('should enable login button', async () => {
        await Hahalolo.clickLoginHahalolo();
        await expect(Hahalolo.btnLogin).toBeEnabled();
    });

    it('should not into account verification page', async () => {
        await Hahalolo.clickLogin();
        await expect(Hahalolo.titleHalome).not.toBeExisting();
    });

    it('should into account verification page', async () => {
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
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
        await expect(browser).toHaveTitle(HahaloloDt.TITLE_HAHALOLO);
    });

    it('should into enter pin code page', async () => {
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
        await expect(Hahalolo.titleLogin).toHaveText(HahaloloDt.TITLE_ENTER_PIN_CODE_PAGE);
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
        await Hahalolo.enterPinCode('#$%%^&');
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input pin code is alphabet', async () => {
        await Hahalolo.enterPinCode('dshjdh');
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should disable accept button when input pin code less more than 6', async () => {
        await Hahalolo.enterPinCode('223');
        await expect(Hahalolo.btnAccept).toBeDisabled();
    });

    it('should show error notify when input pin code is false', async () => {
        await Hahalolo.enterPinCode('454878');
        await Hahalolo.clickAccept();
        await expect(Hahalolo.notifyPinFalse).toBeExisting();
    });

    it('should into home page', async () => {
        await Hahalolo.enterPinCode(HahaloloDt.PIN);
        await Hahalolo.clickAccept();
        await expect(browser).toHaveUrl(Hahalolo.getUrl());
    });
});
