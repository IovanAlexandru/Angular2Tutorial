export class Event {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    imageUrl: string;
    location?: Location;
    onlineUrl?: string;
    sessions: Session[];
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
}