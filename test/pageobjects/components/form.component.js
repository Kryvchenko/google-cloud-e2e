const utils = require("../../utils/utils");
class FormComponent {
  get iFrame() {
    return $("#cloud-site devsite-iframe iframe");
  }
  get iChildFrame() {
    return $("#myFrame");
  }
  get instancesInput() {
    return $("#input_90");
  }
  get seriesValue() {
    return $("#select_value_label_85");
  }
  get selectSeriesValue() {
    return $("#select_option_201");
  }
  get machineType() {
    return $("#select_117");
  }
  get setMachineType() {
    return $("#select_option_428");
  }
  get selectGpu() {
    return $("[aria-label='Add GPUs']");
  }
  get gpuType() {
    return $("#select_466");
  }
  get selectGpuType() {
    return $("//div[normalize-space()='NVIDIA Tesla P100']");
  }
  get numberOfGpu() {
    return $("md-select[placeholder='Number of GPUs']");
  }
  get selectNumberOfGpu() {
    return $("//div[normalize-space()='1']");
  }
  get localSsd() {
    return $("#select_423");
  }
  get selectLocalSsd() {
    return $("//div[normalize-space()='2x375 GB']");
  }
  get commitedUsage() {
    return $("#select_value_label_89");
  }
  get selectUsage() {
    return $("#select_option_128");
  }
  get estimateBtn() {
    return $("[aria-label='Add to Estimate']:first-child");
  }

  async swithBetweenFrames() {
    await browser.maximizeWindow();
    await browser.switchToFrame(await this.iFrame);
    await browser.switchToFrame(await this.iChildFrame);
  }

  async fillUpCalculationForm() {
    await utils.doClick(this.instancesInput);
    await utils.doSetValue(this.instancesInput, "4");
    await utils.doClick(this.seriesValue);
    await utils.doClick(this.selectSeriesValue);
    await utils.doClick(this.machineType);
    await utils.doClick(this.setMachineType);
    await this.selectGpu.scrollIntoView();
    await utils.doClick(this.selectGpu);
    await this.gpuType.scrollIntoView();
    await utils.doClick(this.gpuType);
    await utils.doClick(this.selectGpuType);
    await browser.pause(1000);
    await utils.doClick(this.numberOfGpu);
    await utils.doClick(this.selectNumberOfGpu);
    await utils.doClick(this.localSsd);
    await utils.doClick(this.selectLocalSsd);
    await utils.doClick(this.commitedUsage);
    await utils.doClick(this.selectUsage);
    await utils.doClick(this.estimateBtn);
  }
}

module.exports = new FormComponent();
