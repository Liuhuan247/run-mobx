import { observable, action, runInAction } from "mobx";

const fetch = () => new Promise<any>((resolve) => {
    setTimeout(() => {
        resolve({code: 1});
    }, 1000);
});
export default class Store {
    @observable count = 0;
    @action.bound add() {
        this.count++;
    }

    @action.bound asyncAdd() {
        fetch().then(r => {
            if (r.code === 1) {
                runInAction(() => {
                    this.add();
                })
            }
        })
    }
}
