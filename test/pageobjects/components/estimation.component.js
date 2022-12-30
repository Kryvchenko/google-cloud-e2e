const utils = require("../../utils/utils");

class EstimationComponent {
  get instanceType() {
    return $("//div[@class='md-list-item-text cpc-cart-multiline flex']");
  }
  get commitmentTerm() {
    return $("//label[contains(text(),'Provisioning model')]");
  }
  get localSsd() {
    return $("//md-list/md-list-item[7]");
  }
  get region() {
    return $("//*[contains(text(),'Region:')]");
  }
  get amountPerMonth() {
    return $("//b[contains(text(),'Estimated Component')]");
  }
  async getEstimationData() {
    return [
      await utils.doGetText(this.instanceType),
      await utils.doGetText(this.commitmentTerm),
      await utils.doGetText(this.region),
      await utils.doGetText(this.localSsd),
      await utils.doGetText(this.amountPerMonth)
    ];
  }
}

module.exports = new EstimationComponent();
