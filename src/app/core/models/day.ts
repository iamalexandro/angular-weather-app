export interface Day {
    date: Date;
    temp: number;
    humidity: number;
    speed: number;
    icon: string;
}

export interface Main {
    temp:     number;
    humidity: number;
}

export interface Weather {
    id:   number;
    icon: string;
}

export interface Wind {
    speed: number;
    deg:   number;
}
