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

    async clickLogout() {
        return this.btnLogout.click();
    }

    async clickCancel() {
        return this.btnCancel.click();
    }

    async clickOk() {
        return this.btnOk.click();
    }
}

export default new Logout();
