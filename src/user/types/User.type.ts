export interface UserType {
    id: number;
    username: string;
    password: string;
}
export interface UserRequestType {
    code: number,
    message: string,
    data: UserType[]
}