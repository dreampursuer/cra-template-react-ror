import {User} from "../domain/User";

class UserService{
    public login(userName: string, password: string): User|null{
        if (userName === 'admin' && password === 'reactror'){
            let user = {
                name: userName,
                age: 18,
                email: "admin@react.ror"
            }
            return user
        }
        return null
    }
}
export const userService = new UserService()