import { combineReducers } from "redux";

const reducers = ["messages", "dialogs", "user", "attachments"];


interface IReducerItem {
    [index: string]: string;
}

export default combineReducers(
    reducers.reduce((initial: IReducerItem, name: string) : object => {
        initial[name] = require(`./${name}`).default;
        return initial;
    }, {})
);