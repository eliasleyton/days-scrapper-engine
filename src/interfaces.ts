export interface IntegrationInterface {
    run(): void;
    log():  void;
    available: boolean;
}

export interface ActivityDate {
    start: Date;
    end: Date;
    timezone: string;
}

