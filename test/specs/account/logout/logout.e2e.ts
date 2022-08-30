import Hahalolo from '../../../pageobjects/account/login/hahalolo/hahalolo';
import Logout from '../../../pageobjects/account/logout/logout';
import LeftSidebar from '../../../pageobjects/left-sidebar/left-sidebar';

describe('TEST LOGOUT FLOWS', async () => {
    before(async () => {
        await Hahalolo.loginSuccess();
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
