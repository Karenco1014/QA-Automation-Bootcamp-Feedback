import { Selector, t } from 'testcafe'

class basePage {
    constructor(){
        //Left Menu
        this.todayOption = Selector ('.item_content').withText('Today')
        this.clickOnProjectOption = Selector ('.expansion_panel__toggle').withText('Projects')
        this.addIconProjectOption = Selector ('.adder_icon')
        this.upcomingOption = Selector('.item_content').withText('Upcoming')
    }

    async ClickontodayOption(){
        await t.click(this.todayOption)
    }

    async ClickonprojectOption(){
        await t.click(this.clickOnProjectOption)
    }

    async AddIconProjectOption(){
        await t.click(this.addIconProjectOption)
    }

    async ClickonUpcomingOption(){
        await t.click(this.upcomingOption)
    }
}
export default new basePage