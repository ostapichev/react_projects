import {urls} from "../constants";
import {placeHolderAPIService} from "./axios.service";

const commentService = {
    getAll: () => placeHolderAPIService.get(urls.comments),
    create: (comment) => placeHolderAPIService.post(urls.comments, comment)
};

export {
    commentService
};