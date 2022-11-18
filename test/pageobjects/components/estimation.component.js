const utils = require('../../utils/utils');

class EstimationComponent {
    get instanceType() {
        return $("//*[@id='compute']/md-list/md-list-item[5]/div[1]");
    }
    get commitmentTerm() {
        return $("//*[@id='compute']/md-list/md-list-item[3]/div");
    }
    get localSsd() {
        return $("//*[@id='compute']/md-list/md-list-item[8]/div[1]");
    }
    get region() {
        return $("//*[@id='compute']/md-list/md-list-item[1]/div");
    }
    get amountPerMonth() {
        return $("//*[@id='compute']/md-list/md-list-item[9]/div/b");
    }
    async getEstimationData() {
      return [
        await utils.doGetText(this.instanceType), 
        await utils.doGetText(this.commitmentTerm),
        await utils.doGetText(this.region),
        await utils.doGetText(this.localSsd),
        await utils.doGetText(this.amountPerMonth),
      ]
    }
   
  }
  
  module.exports = new EstimationComponent();
  