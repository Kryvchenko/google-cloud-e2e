const HeaderComponent = require("../pageobjects/components/header.component");
const FormComponent = require("../pageobjects/components/form.component");
const EstimationComponent = require("../pageobjects/components/estimation.component");
const EmailComponent = require("../pageobjects/components/email.component");
const constants = require("../constants/constants");

describe("Cloud calculator hard", () => {
  before(async () => {
    await browser.url("/");
  });
  it("should allow to search for calculator", async () => {
    await HeaderComponent.addSearchParams();
    expect(browser).toHaveUrlContaining(constants.URL);
  });
  it("should allow to fill up estimation form", async () => {
    await FormComponent.swithBetweenFrames();
    await FormComponent.fillUpCalculationForm();
    const responseArray = await EstimationComponent.getEstimationData();
    console.log("===========================>" + (await responseArray[3]));
    expect(responseArray[(0, 1, 2, 3, 4)]).toEqual(
      constants.DATA_ARRAY[(0, 1, 2, 3, 4)]
    );
  });
  it("should allow to send email", async () => {
    await EmailComponent.emailBtnClick();
    await EmailComponent.sendEmailToExternalInbox();
    const emailText = await EmailComponent.getMailTextValue();
    expect(emailText).toEqual(constants.EMAIL_RESPONSE);
  });
});
