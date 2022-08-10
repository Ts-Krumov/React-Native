import { User } from "./shared-types";

const API_BASE_URL = "hhttp://localhost:4000/users";

export interface UsersApiClient {
    getAllUsers(): Promise<User[]>;
    addNewUser(user: User): Promise<User>;
}

class UsersApiClientImpl implements UsersApiClient {
    getAllUsers(): Promise<User[]> {
            return this.handleRequest(API_BASE_URL);
        }
    addNewUser(user: User): Promise<User> {
            return this.handleRequest(API_BASE_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            });
    }

async handleRequest(url: string, options?: RequestInit) {
    try {
        const postsResp = await fetch(url, options);
        if (postsResp.status >= 400) {
            return Promise.reject(postsResp.body);
        }
        return postsResp.json();
    } catch (err) {
        return Promise.reject(err);
    }
}   
}

export const BlogsAPI: UsersApiClient = new UsersApiClientImpl();

