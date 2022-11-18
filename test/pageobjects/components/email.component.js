const utils = require('../../utils/utils');

class EmailComponent {
    get emailBtn() {
        return $("//button[@id='email_quote']");
    }
    get emailField() {
        return $("#dialogContent_670 > form > md-content > div:nth-child(3) > md-input-container > input")
    }
    async emailBtnClick() {
        return utils.doClick(this.emailBtn);
    }

   
  }
  
  module.exports = new EmailComponent();
  