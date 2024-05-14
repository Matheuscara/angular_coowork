export interface Coowork {
    id: number;
    name: string;
    imageCoowork: string;
    administrator: string;
    email: string;
    admImage: string;
    phoneNumber: string;
    coffe: boolean;
    meetingRoom: boolean;
    safeBox: boolean;
    dayPrices: number[];
    address: {
        id: number;
        road: string;
        neighborhood: string;
        zip_code: number;
        city: string;
        state: string;
        country: string;
        number: string;
        complement: string;
    };
}
