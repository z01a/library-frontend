export interface Book {
    isbn: string;
    title: string;
    authors: Array<string>;
    genres: Array<string>;
    publisher: string;
    published: string;
    language: string;
    cover: string;
    count: Number;
    recommended: string;
    comments: Array<any>;
}
