export class Event {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location?: Location;
    onlineUrl?: string;
    sessions: Session[];

    constructor() {
        this.sessions = [];
    }
}

export class Location {
    address: string;
    city: string;
    country: string;
}

export class Session {
    id: number;
    name: string;
    presenter: string;
    duration: number;
    level: string;
    abstract: string;
    voters: string[];

    constructor() {
        this.voters = [];
    }
}