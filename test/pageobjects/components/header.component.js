const utils = require('../../utils/utils');
class HeaderComponent {

    get seacrhInput() {
      return $("input[placeholder='Search']");
    }
    get linkToCalculator() {
      return $("//div[@class='gs-title']//b[contains(text(),'Google Cloud Pricing Calculator')]");
    }
    get confirmCookies() {
      return $("/html/body/devsite-snackbar/div/div/button");
    }
  
    async addSearchParams () {
      await this.confirmCookies.click();
      await utils.doClick(this.seacrhInput);
      await utils.doSetValue(this.seacrhInput,'Google Cloud Platform Pricing Calculator');
      await utils.hitEnter();
      await utils.doClick(this.linkToCalculator);
    }
  }
  
  module.exports = new HeaderComponent();
  