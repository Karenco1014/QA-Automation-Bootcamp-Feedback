import { waitForDebugger } from 'inspector'
import { Selector, t } from 'testcafe'




class todayPage {

    
    constructor() {
        
        this.todayTitle = Selector('h1').withText('Today')
        this.createTaskButton = Selector('.plus_add_button')
        this.titleTaskInput = Selector('.public-DraftStyleDefault-block')
        this.descriptionTaskInput = Selector('main .task_editor__description_field')
        this.addTaskButton = Selector('main button').withText('Add task')
        this.createdTask = Selector('.markdown_content.task_content')
        this.taskListItem = Selector('.task_list_item')
        this.countTasks = 10
        this.posicionTask = 0
        this.moreOptionsTaskButton = '[data-testid="more_menu"]'
        this.deletedTaskOption = Selector('.danger_menu').withText('Delete task')
        this.deletedTaskButton = Selector('.ist_button_red').withText('Delete')
         //Task Detail Modal
        this.scheduleButton = Selector('.date_today').withText('Today')
        this.tomorrowButton = Selector('.scheduler-suggestions-item-label').withText('Tomorrow')
        this.sectionWraper = Selector('.section__wrapper')    
    }

    async addTaskOntoday(titleInput, descriptionInput){
        await t.click(this.createTaskButton)
        await t.typeText(this.titleTaskInput,titleInput)
        await t.typeText(this.descriptionTaskInput,descriptionInput)
        await t.click(this.addTaskButton)
    }
    
    async addMultipleTask(titleInput, descriptionInput){
         await t.click(this.createTaskButton) 
         for (let i = 0; i <=this.countTasks-1; i++) {
             await t.typeText(this.titleTaskInput,`${titleInput} ${i}`)
             await t.typeText(this.descriptionTaskInput,`${descriptionInput} ${i}`)
             await t.click(this.addTaskButton)
        }
    }

    async deletedMultipleTask(){
        const countalltasks = await this.taskListItem.count
        const container = Selector('#content');
        for (let i = 0; i < countalltasks; i++) {
                 await t.scrollIntoView(container, { offsetX: 2, offsetY: 2 })
                 await t.hover(this.taskListItem.nth(0))
                 await t.click(this.taskListItem.nth(0).find(this.moreOptionsTaskButton))
                 await t.click(this.deletedTaskOption)
                 await t.click(this.deletedTaskButton)
        }
    }

    async addTaskOnTomorrowLabel(titleInput, descriptionInput){
        await t.click(this.createTaskButton)
        await t.typeText(this.titleTaskInput,titleInput)
        await t.typeText(this.descriptionTaskInput,descriptionInput)
        await t.click(this.scheduleButton)
        await t.click(this.tomorrowButton)
        await t.click(this.addTaskButton)

    }

    async validateTasksAddedTomorrow(titleInput, tomorrow){
        this.countalltasks = this.taskListItem
        for (let i = 0; i < this.countalltasks; i++) {
            await t.expect(this.sectionWraper.withText(tomorrow).find(this.taskListItem).innerText).contains(titleInput)     
        } return true
    }

    async validateTasksAdded(){
        const numerTasks = await this.taskListItem.count
        await t.expect(this.createdTasks.count - numerTasks).contains(this.countTasks)
    }


}

export default new todayPage