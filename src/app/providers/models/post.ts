import { UserData } from '../data/user-data';

import * as moment from 'moment';

export class Post {
    
    PostId: number;
    
    constructor(user: UserData, incomePost: any) {
        this.PostId = incomePost.p || 0;
    }
}
