import { IntegrationManifest } from '../src/types';

export class Core {

    private _manifest: IntegrationManifest;
    
    constructor(
        public manifest: IntegrationManifest
    ) {
        this._manifest = manifest;
    }

    get available(): boolean {
        return this._manifest.available;
    }

    public log(): void {
        console.log(
            JSON.stringify(this._manifest)
        );
    }

}
