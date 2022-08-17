import { HahaloloDt } from '../../data/login/hahalolo-dt';
import LeftSidebar from '../../pageobjects/left-sidebar/left-sidebar';
import Hahalolo from '../../pageobjects/login/hahalolo';
import Logout from '../../pageobjects/logout/logout';

describe('TEST LOGOUT FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
        await browser.setWindowSize(1920, 1080);
        await Hahalolo.clickLoginHahalolo();
        await Hahalolo.enterUsername(HahaloloDt.USERNAME);
        await Hahalolo.enterPassword(HahaloloDt.PASSWORD);
        await Hahalolo.clickLogin();
        await Hahalolo.clickContinue();
        await Hahalolo.enterPinCode(HahaloloDt.PIN);
        await Hahalolo.clickAccept();
    });

    it('should open logout modal', async () => {
        await LeftSidebar.clickAvatar();
        await Logout.clickLogout();
        await expect(Logout.tiileLogoutVerify).toBeExisting();
    });

    it('should close logout modal', async () => {
        await Logout.clickCancel();
        await expect(Logout.tiileLogoutVerify).not.toBeExisting();
    });

    it('should back to welcome page', async () => {
        await Logout.clickLogout();
        await Logout.clickOk();
        await expect(browser).toHaveUrl(Hahalolo.getUrl() + 'welcome');
    });
});
