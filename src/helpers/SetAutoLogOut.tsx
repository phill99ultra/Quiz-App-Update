import { SetLogOut } from "./SetLogOut"

export const SetAutoLogOut = (time: number) => {
    setTimeout(() => {
        SetLogOut();
    }, time * 1000);
}