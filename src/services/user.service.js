import {urls} from "../constants";
import {placeHolderAPIService} from "./axios.service";

const userService = {
    getAll: () => placeHolderAPIService.get(urls.users),
    create: (user) => placeHolderAPIService.post(urls.users, user)
};

export {
    userService
};