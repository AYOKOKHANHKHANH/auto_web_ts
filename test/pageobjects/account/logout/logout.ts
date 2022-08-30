class Logout {
    get btnLogout() {
        return $('[data-id="auth-user-content-button-logout"]');
    }

    get tiileLogoutVerify() {
        return $('#modal-header-title');
    }

    get btnCancel() {
        return $('#modal-button-cancel');
    }

    get btnOk() {
        return $('#modal-button-ok');
    }

    get btnIconClose() {
        return $('#modal-wrapper-button-close');
    }

    async clickLogout() {
        return this.btnLogout.click();
    }

    async clickCancel() {
        return this.btnCancel.click();
    }

    async clickOk() {
        return this.btnOk.click();
    }

    async clickIconClose() {
        return this.btnIconClose.click();
    }

    async logoutSuccess() {
        await this.clickLogout();
        await this.clickOk();
    }
}

export default new Logout();
