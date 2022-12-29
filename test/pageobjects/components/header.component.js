const utils = require("../../utils/utils");
class HeaderComponent {
  get seacrhInput() {
    return $(".devsite-searchbox input");
  }
  get linkToCalculator() {
    return $("//b[text()='Google Cloud Pricing Calculator'][1]");
  }
  get confirmCookies() {
    return $(".devsite-snackbar-action");
  }

  async addSearchParams() {
    await this.confirmCookies.click();
    await utils.doClick(this.seacrhInput);
    await utils.doSetValue(
      this.seacrhInput,
      "Google Cloud Platform Pricing Calculator"
    );
    await utils.hitEnter();
    await utils.doClick(this.linkToCalculator);
  }
}

module.exports = new HeaderComponent();
