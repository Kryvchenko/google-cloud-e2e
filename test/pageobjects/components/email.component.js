const utils = require('../../utils/utils');
const FormComponent = require('./form.component');
const constants = require('../../constants/constants');
const { doClick } = require('../../utils/utils');

class EmailComponent {
    get emailBtn() {
        return $("//button[@id='email_quote']");
    }
    // get emailField() {
    //     return $("#dialogContent_670 > form > md-content > div:nth-child(3) > md-input-container > input")
    // }
    get emailField() {
        return $("form > md-content > div > md-input-container > input[type='email']");
    }
    get EmailAdress() {
        return $("body > div:nth-child(2) > div:nth-child(4) > div > div.emailBlock > p.zavorky > span");
    }
    get sendEmailBtn() {
        return $("button[aria-label='Send Email']");
    }
    get checkInboxBtn() {
        return $("//td[normalize-space()='Google Cloud Price Estimate']");
    }
    get mailServiceIframe() {
        return $("#iframeMail");
    }
    get inboxMailTextValue() {
        return $("//*[contains(text(), 'Estimated Monthly Cost:')]");
    }

    async emailBtnClick() {
        return utils.doClick(this.emailBtn);
    }
    async sendEmailToExternalInbox() {   
        await browser.newWindow(constants.MAIL_BOX_URL);
        const mailUrl = await browser.getUrl();
        const emailAdr = await utils.doGetText(this.EmailAdress);
        await browser.switchWindow('/');
        await browser.switchToFrame(await FormComponent.iFrame);
        await browser.switchToFrame(await FormComponent.iChildFrame);
        await utils.doSetValue(this.emailField, emailAdr);
        await doClick(this.sendEmailBtn);
        await browser.switchWindow(mailUrl);
        await browser.setTimeout({implicit: 5000});
        await utils.doClick(this.checkInboxBtn);
        await browser.switchToFrame(await this.mailServiceIframe);
    } 
    async getMailTextValue() {
        return utils.doGetText(this.inboxMailTextValue);
    }
     
  }
  
  module.exports = new EmailComponent();
  