import { URLS, INFORMATION_PROJECT } from '../data/constants'
import { STANDARD_USER } from '../data/roles'
import basePage from '../pages/basePage'
import projectPage from '../pages/projectPage'

fixture ('Project page feature')
.page `${URLS.TODOIST_URL}`
.beforeEach(async t =>{
    await t.useRole(STANDARD_USER)
})

test.meta('Smoke','Production')('as a logged in user, I must be able to create a project as a favorite.', async t =>{
    await basePage.clickOnProjectOption()
    await basePage.AddIconProjectOption()
    await projectPage.AddProjectOnFavorites(INFORMATION_PROJECT.DATA.NAME)
    await t.expect (projectPage.titleProject.innerText).eql(INFORMATION_PROJECT.DATA.NAME)
})
