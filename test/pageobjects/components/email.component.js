const utils = require("../../utils/utils");
const FormComponent = require("./form.component");
const constants = require("../../constants/constants");
const { doClick } = require("../../utils/utils");

class EmailComponent {
  get emailBtn() {
    return $("//button[@id='Email Estimate']");
  }
  get emailField() {
    return $("input[type='email']");
  }
  get EmailAdress() {
    return $("#email");
  }
  get sendEmailBtn() {
    return $("md-dialog-actions button:last-child");
  }
  get checkInboxBtn() {
    return $("//*[normalize-space()='Google Cloud Price Estimate']");
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
    //await browser.pause(2000);
    const emailAdr = await this.EmailAdress.waitUntil(
      async function () {
        return (await this.getText()) !== "Loading..."
          ? await this.getText()
          : "";
      },
      {
        timeout: 3000,
        timeoutMsg: "expected text to be different after 1sec"
      }
    );
    const mailUrl = await browser.getUrl();
    //const emailAdr = await utils.doGetText(this.EmailAdress);
    await browser.switchWindow("/");
    await browser.switchToFrame(await FormComponent.iFrame);
    await browser.switchToFrame(await FormComponent.iChildFrame);
    await utils.doSetValue(this.emailField, emailAdr);
    await doClick(this.sendEmailBtn);
    await browser.switchWindow(mailUrl);
    // await browser.setTimeout({ implicit: 2000 });
    await utils.doClick(this.checkInboxBtn);
    await browser.switchToFrame(await this.mailServiceIframe);
  }
  async getMailTextValue() {
    return utils.doGetText(this.inboxMailTextValue);
  }
}

module.exports = new EmailComponent();
