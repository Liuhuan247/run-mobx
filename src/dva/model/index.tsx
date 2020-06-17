import { Model } from "dva";

const fetch = (params: any) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                code: 0,
                data: { ...params },
                msg: null,
            });
        }, 1000);
    });

const model: Model = {
    namespace: "counter",
    state: { count: 0 },
    reducers: {
        increase(state) {
            return {
                count: state.count + 1,
            };
        },
    },
    effects: {
        *asyncIncrease(action, { call, put, select }) {
            const { code, data } = yield call(fetch);
            if (code === 0) {
                yield put({ type: "increase" });
            }
        },
    },
};
export default model;
