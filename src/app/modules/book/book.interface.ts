export type IBookFieldSearchRequest = {
    searchTerm?: string | undefined;
    minPrice?:string,
    maxPrice?:string,
    category?:string
}