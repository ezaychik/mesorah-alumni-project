import { AlumnaLocation } from './location.model';
export class Broadcast {
    broadcasterId: number;
    replyTo: string;
    recipients: {
        byGraduatingYear: number[];
        byLocation: AlumnaLocation[];
    };
    topic: string;
    subject: string;
    description: string;
    nameForDavening?: string;
}
