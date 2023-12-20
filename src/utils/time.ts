
import Cookies from 'js-cookie'

export function getTimeStamp() {
    return Number(Cookies.get("timeKey"))
}

export function setTimeStamp() {
    Cookies.set("timeKey", String(+new Date()))
}

export function removeTimeStamp() {
    return Cookies.remove("timeKey")

}
