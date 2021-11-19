import dovent from 'dotenv'
dovent.config()

export const URLS = {
        TODOIST_URL: process.env.URL_SITE,
        LOGIN_URL: process.env.URL_PAGELOGIN
}

export const CREDENTIALS = {
    STANDARD_USER_LOGIN:{
        USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: process.env.STANDARD_PASSWORD
    },
    STANDARD_INVALID_USERNAME_LOGIN:{
        USERNAME: 'nera_1014@hotmail.com',
        PASSWORD: process.env.STANDARD_PASSWORD
    },
    STANDARD_INVALID_PASSWORD_LOGIN:{
        USERNAME: process.env.STANDARD_USERNAME,
        PASSWORD: 'xxxxxxxx'
    }
}

export const MESSAGES = {
     ERROR:{
        LOGIN_FORM:{
            EMPTY_CREDENTIALS: 'Invalid email address.',
            INVALID_CREDENTIALS: 'Wrong email or password.' 
        }
    }
}

export const INFORMATION_TASK = {
    DATA:{
        TITLE: 'ssss',
        DESCRIPTION: 'ssss',
        TOMORROW_LABEL: 'Tomorrow'
    }
    
}

export const INFORMATION_PROJECT = {
    DATA:{
        NAME: 'Wizeline'
    }
    
}

export const API_WAIT = 2000