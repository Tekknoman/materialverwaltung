import AlertType from "@/models/AlertType";
import store from "@/store";

export default class Alert{
    public message: string;
    public type: AlertType;
    public show: boolean|undefined;

    constructor(message: string, type: AlertType = AlertType.info, show: boolean|undefined = undefined) {
        this.message = message;
        this.type = type;
        this.show = show;
    }
}

export function triggerAlert(message: string, type: AlertType = AlertType.info): void {
    store.commit('SET_ALERT', {message, type});
}