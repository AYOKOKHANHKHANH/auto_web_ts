import { otp, phoneNumber } from '../../../../data/login';
import Halome from '../../../../pageobjects/account/login/halome/halome';

describe('TESS THE FIRST HALOME LOGIN FLOWS', async () => {
    before(async () => {
        await Halome.open();
        await Halome.clickLoginHalome();
    });

    it('should login success when input display name is empty', async () => {
        await Halome.enterPhoneNumber(phoneNumber.NEW_PHONE);
        await Halome.clickStartLogin();
        await Halome.enterOtp(otp.OTP);
        await Halome.clickContinue();
    });
});
