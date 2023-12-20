import request from "@/utils/request.ts";
import {RES} from "@/types";

export const user = <T>():Promise<RES<T>> => {
    return request({
        url: `/user/login`,
        method: 'GET',
    })

}
