import * as fs from 'fs';
import * as path from 'path';
import { IntegrationInterface } from './src/interfaces';

const integrationsDir = path.join(__dirname, 'integrations');
const files = fs.readdirSync(integrationsDir);

files.forEach((file) => {
    const integrationPath = path.join(integrationsDir, file);
    const IntegrationClass = require(integrationPath).I;

    const integrationInstance = new IntegrationClass() as IntegrationInterface;
    
    if (!integrationInstance.available) {
        return;
    }

    // de acá lo envio a be-queue

});

// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
// });
  
// revisar https://github.com/breejs/bree 