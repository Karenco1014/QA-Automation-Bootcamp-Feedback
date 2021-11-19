import { Selector, t } from 'testcafe'
import todayPage from '../pages/todayPage'
import { INFORMATION_TASK, URLS, API_WAIT } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import basePage from '../pages/basePage'

fixture ('Task page feature')
.page `${URLS.TODOIST_URL}`
.beforeEach(async t =>{
    await t.wait(API_WAIT)
    await t.useRole(STANDARD_USER)
    await basePage.ClickontodayOption()
})
.afterEach(async t =>{
    await todayPage.deletedMultipleTask() 
    await t.expect(todayPage.taskListItem.exists).notOk() 
})

test.meta('Smoke','Production')('As a logged in user, you should be able to create a task dated today.', async t => {
    await todayPage.addTaskOntoday(INFORMATION_TASK.DATA.TITLE, INFORMATION_TASK.DATA.DESCRIPTION)
    await t.expect(todayPage.createdTask.nth(todayPage.posicionTask).innerText).eql(INFORMATION_TASK.DATA.TITLE)
})

test('As a logged in user, you should be able to create multiple tasks dated today.', async t => {
    await todayPage.addMultipleTask(INFORMATION_TASK.DATA.TITLE, INFORMATION_TASK.DATA.DESCRIPTION)
    await t.expect(todayPage.validateTasksAdded).ok()
})

test.meta('Smoke','Production')('As a registered user, you should be able to create a task dated Tomorrow.', async t =>{
    await todayPage.addTaskOnTomorrowLabel(INFORMATION_TASK.DATA.TITLE,INFORMATION_TASK.DATA.DESCRIPTION)
    await basePage.ClickonUpcomingOption()
    await t.expect(await todayPage.validateTasksAddedTomorrow(INFORMATION_TASK.DATA.TITLE,INFORMATION_TASK.DATA.TOMORROW_LABEL)).ok()

})




