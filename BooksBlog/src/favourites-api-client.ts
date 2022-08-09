import { Book } from "./google-books-api-types.js";
import { IdType } from "./shared-types.js";

export const API_BASE_URL = "http://localhost:4000/books";


export interface BooksApiClient {
    getAllFavourites(): Promise<Book[]>;
    addToFavourites(book: Book): Promise<Book>;
    removeFromFavouritesById(id: IdType): Promise<Book>;
}

export class BooksApiClientImpl implements BooksApiClient {
    getAllFavourites(): Promise<Book[]> {
       return this.handleRequest(API_BASE_URL);
    }
    async addToFavourites(book: Book): Promise<Book> {
       
        
        return this.handleRequest(API_BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        });
    }
    removeFromFavouritesById(id: IdType): Promise<Book> {
        return this.handleRequest(`${API_BASE_URL}/${id}`, {
            method: 'DELETE'
        });
    }
    
    private async handleRequest(url: string, options?: RequestInit) {
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

export const BooksControler:BooksApiClient = new BooksApiClientImpl();

