import { pin } from '../../../../data/login';
import Hahalolo from '../../../../pageobjects/account/login/hahalolo/hahalolo';
import Logout from '../../../../pageobjects/account/logout/logout';
import LeftSidebar from '../../../../pageobjects/left-sidebar/left-sidebar';

describe('TEST THE NEXT TIME HAHALOLO LOGIN FLOWS', async () => {
    before(async () => {
        await Hahalolo.loginSuccess();
        await LeftSidebar.clickAvatar();
        await Logout.logoutSuccess();
    });

    it('should into account verification page', async () => {
        await Hahalolo.clickLoginHahalolo();
        await expect(Hahalolo.btnContinue).toBeExisting();
        await expect(Hahalolo.btnNotYou).toBeExisting();
    });

    it('should into home page', async () => {
        await Hahalolo.clickContinue();
        await Hahalolo.enterPinCode(pin.PIN);
        await Hahalolo.clickAccept();
    });
});
