import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './components/app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
// import {LoginFormComponent} from './components/login-form.component'

// bootstrap(LoginFormComponent);
bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
]);