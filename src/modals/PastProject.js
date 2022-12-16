import { BaseReactObject } from "./BaseReactObject";

class PastProject extends BaseReactObject {
    constructor(pictures = [], title = "", desctiption = "", url = "") {
        super();
        this.pictures = pictures;
        this.url = url;
        this.title = title;
        this.description = desctiption;
    }
};