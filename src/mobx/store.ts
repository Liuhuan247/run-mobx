import { observable, action } from "mobx";


export default class Store {
    @observable count = 0;
    @action.bound add() {
        this.count++;
    }
    
}