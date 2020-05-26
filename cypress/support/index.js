// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      let item = runnable
      const nameParts = [runnable.title]
  
      // Iterate through all parents and grab the titles
      while (item.parent) {
        nameParts.unshift(item.parent.title)
        item = item.parent
      }
  
      const fullTestName = nameParts.filter(Boolean).join(' -- ')           // this is how cypress joins the test title fragments
  
      const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`
      console.log('###########' + imageUrl)
      addContext({ test }, imageUrl)
    }
  })
  //C:\dev\Javascript\New folder\cypressAutomation\cypress\screenshots\demo\practice.spec.js\Actions -- Verify Search Result (failed).png
  //                                                       screenshots/demo\practice.spec.js/Actions -- Verify Search Result (failed).png
  //file:///C:/dev/Javascript/New%20folder/cypressAutomation/mochawesome-report/screenshots/demo/practice.spec.js/Actions%20--%20Verify%20Search%20Result%20(failed).png