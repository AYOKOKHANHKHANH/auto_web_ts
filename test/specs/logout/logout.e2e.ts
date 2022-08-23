import { HahaloloDt } from '../../data/login/hahalolo';
import LeftSidebar from '../../pageobjects/left-sidebar/left-sidebar';
import Hahalolo from '../../pageobjects/login/hahalolo';
import Logout from '../../pageobjects/logout/logout';

describe('TEST LOGOUT FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
        await Hahalolo.enterPinCode(HahaloloDt.PIN);
        await Hahalolo.clickAccept();
        await LeftSidebar.clickAvatar();
    });

    it('should open logout modal', async () => {
        await Logout.clickLogout();
        await expect(Logout.tiileLogoutVerify).toBeExisting();
    });

    it('should close logout modal when click cancel button', async () => {
        await Logout.clickCancel();
        await expect(Logout.tiileLogoutVerify).not.toBeExisting();
    });

    it('should close logout modal when click icon close', async () => {
        await Logout.clickLogout();
        await Logout.clickIconClose();
        await expect(Logout.tiileLogoutVerify).not.toBeExisting();
    });

    it('should back to welcome page', async () => {
        await Logout.clickLogout();
        await Logout.clickOk();
        await expect(browser).toHaveUrl(Hahalolo.getUrl() + 'welcome');
    });
});
