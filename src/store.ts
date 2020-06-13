import { observable, autorun, action } from "mobx";

export default class Store<T> {
    constructor() {
        autorun(() => {
            console.log(this.list.length);
        });
    }
    @observable list: T[] = [];

    @action.bound add(obj: T) {
        this.list.push(obj);
    }
}
