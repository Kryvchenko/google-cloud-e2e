const HeaderComponent = require('../pageobjects/components/header.component');
const FormComponent = require('../pageobjects/components/form.component');
const EstimationComponent = require('../pageobjects/components/estimation.component');
const EmailComponent = require('../pageobjects/components/email.component');
const constants = require('../constants/constants');

describe('Cloud calculator', () => {
    before(async () => {
        await browser.url('/');
    });
    it('should allow to search for calculator', async () => {
        await HeaderComponent.addSearchParams();
        expect(browser).toHaveUrlContaining(constants.URL);
    });
    it('should allow to fill up estimation form', async () => {
        await browser.maximizeWindow();
        // const frame1 = await FormComponent.iFrame;
        await browser.switchToFrame(await FormComponent.iFrame);
        // const frame2 = await FormComponent.iChildFrame;
        await browser.switchToFrame(await FormComponent.iChildFrame);
        await FormComponent.fillUpCalculationForm();
        const responseArray = await EstimationComponent.getEstimationData();
        expect(responseArray[0,1,2,3,4]).toEqual(constants.DATA_ARRAY[0,1,2,3,4]);
    });

    it('should allow to send email', async () => {
        await EmailComponent.emailBtnClick();     
    // create new window
        await browser.newWindow('https://www.minuteinbox.com/');
        const mailUrl = await browser.getUrl();
        const email = await $('body > div:nth-child(2) > div:nth-child(4) > div > div.emailBlock > p.zavorky > span').getText();
        await browser.switchWindow('/');
        const frame1 = await FormComponent.iFrame;
        await browser.switchToFrame(frame1);
        const frame2 = await FormComponent.iChildFrame;
        await browser.switchToFrame(frame2);
        // await browser.pause(5000); 
       
        await $("form > md-content > div > md-input-container > input[type='email']").setValue(email);
        // await browser.pause(5000);
        await $("button[aria-label='Send Email']").click();
       
        await browser.switchWindow(mailUrl);
        await browser.setTimeout({implicit: 5000});
        // await browser.pause(5000);
        await $("//td[normalize-space()='Google Cloud Price Estimate']").click();
        // await browser.pause(4000);
        const frame3 = await $("#iframeMail");
        await browser.switchToFrame(frame3);
        // await browser.pause(4000);
        const emailText = await $("//*[contains(text(), 'Estimated Monthly Cost:')]").getText();
        expect(emailText).toEqual(constants.EMAIL_RESPONSE);  
       
    });
});


