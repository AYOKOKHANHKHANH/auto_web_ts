import Hahalolo from '../../pageobjects/login/hahalolo';

describe('TEST LOGIN HAHALOLO FLOWS', async () => {
    before(async () => {
        await Hahalolo.open();
    });

    it('should enable login button', async () => {
        await Hahalolo.clickLoginHahalolo();
        await expect(Hahalolo.btnLogin).toBeEnabled();
    });
});
