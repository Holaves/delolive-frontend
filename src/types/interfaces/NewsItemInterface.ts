export interface NewsItemInterface{
    date: Date;
    imageURL: string;
    description: string;
    subDescription?: [string, string?, string?];
}