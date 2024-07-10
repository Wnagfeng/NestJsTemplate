import { Injectable } from '@nestjs/common';
@Injectable()
export class DemoService {
    getUserlist() {
        return ["John", "Jane", "Bob"];
    }
    getUserlistParam(username: string) {
        return `User ${username} found`;
    }
    addUser(user: string) {
        return `User ${user} added successfully`;
    }

    deleteUser(user: string) {
        return `User ${user} deleted successfully`;
    }


    updateUser(user: string, newUser: string) {
        return `User ${user} updated to ${newUser} successfully`;
    }
    deleteUserParam(username: string) {
        return `User ${username} deleted successfully`;
    }
}
