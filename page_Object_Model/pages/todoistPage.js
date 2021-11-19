import { Selector, t } from 'testcafe'

class todoistPage {
    constructor(){
        this.buttonGoLogin = Selector('a').withExactText('Log in')
   
    }
    
    async tapOnTheLoginButton(){
        await t.click(this.buttonGoLogin)

    }
}

export default new todoistPage