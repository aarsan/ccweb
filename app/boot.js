System.register(['angular2/platform/browser', './login-form.component'], function(exports_1) {
    var browser_1, login_form_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_form_component_1_1) {
                login_form_component_1 = login_form_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(login_form_component_1.LoginFormComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map