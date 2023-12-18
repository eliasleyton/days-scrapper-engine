import { IntegrationInterface } from '../src/interfaces';
import { Core } from '../src/Core';
import fetch from 'node-fetch';

export class I extends Core implements IntegrationInterface {

    constructor() {
        super(
            {
                name: 'Insomnia',
                version: '1.0',
                available: false,
            }
        );
    }

    public async run(): Promise<void> {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.log(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

}
