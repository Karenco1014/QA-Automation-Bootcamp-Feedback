import { Selector, t } from 'testcafe'
import { URLS, MESSAGES, CREDENTIALS, API_WAIT} from '../data/constants'
import todoistPage from '../pages/todoistPage'
import loginPage from '../pages/loginPage'
import todayPage from '../pages/todayPage'


fixture ('Login page feature')
.page `${URLS.TODOIST_URL}`
.beforeEach(async t =>{
    await todoistPage.tapOnTheLoginButton()
})

test('Successful login.', async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER_LOGIN.USERNAME, CREDENTIALS.STANDARD_USER_LOGIN.PASSWORD)
    await t.wait(API_WAIT)
    await t.expect (todayPage.todayTitle.exists).ok()
})

test.meta('Smoke','Production')('As a user, I should not be able to log in without providing the credentials.', async t =>{
    await loginPage.submitLoginFormEmpty()
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.EMPTY_CREDENTIALS)
})

test.meta('Smoke','testing')('As a user, I should not be able to log in when the email is invalid.', async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_INVALID_USERNAME_LOGIN.USERNAME, CREDENTIALS.STANDARD_INVALID_USERNAME_LOGIN.PASSWORD)
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.INVALID_CREDENTIALS)
})

test('as a user, I should not be able to log in when the password is invalid.', async t =>{
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_INVALID_PASSWORD_LOGIN.USERNAME, CREDENTIALS.STANDARD_INVALID_PASSWORD_LOGIN.PASSWORD)
    await t.expect(loginPage.errorMessagesContent.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.INVALID_CREDENTIALS)
})
