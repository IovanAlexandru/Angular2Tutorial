import { Session } from './../shared/models';
import { Injectable } from '@angular/core';

@Injectable()
export class VoterService {
    constructor() { }

    addVoter(session: Session, username: string) {
        if (!this.userHasVoted(session, username)) {
            session.voters.push(username);
        }
    }

    deleteVoter(session: Session, username: string) {
        session.voters = session.voters.filter(voter => voter !== username);
    }

    userHasVoted(session: Session, username: string): boolean {
        return session.voters.some(voter => voter === username);
    }
}