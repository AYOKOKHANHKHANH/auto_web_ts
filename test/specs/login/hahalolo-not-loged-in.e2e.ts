import { HahaloloDt } from '../../data/login/hahalolo';
import LeftSidebar from '../../pageobjects/left-sidebar/left-sidebar';
import Hahalolo from '../../pageobjects/login/hahalolo';
import Logout from '../../pageobjects/logout/logout';

describe('TEST THE NEXT TIME HAHALOLO LOGIN FLOWS', async () => {
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
        await LeftSidebar.clickAvatar();
        await Logout.clickLogout();
        await Logout.clickOk();
    });

    it('should into account verification page', async () => {
        await Hahalolo.clickLoginHahalolo();
        await expect(Hahalolo.btnNotYou).toBeExisting();
    });
});
