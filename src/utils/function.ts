import axios from "axios";

export function sleep(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export function getMimeType(url: string) {
    return axios.head(url).then(res => res.headers["content-type"]);
}

export function pickRandom(list: any[]) {
    return list[Math.floor(Math.random() * list.length)]
}

export function fetchJson(url: string) {
    return axios.get(url).then(res => res.data);
}

export function randomID() {
    return Math.random().toString(36).substring(2);
}

export async function randomUUID() {
    const a = await randomID();
    const b = await randomID();
    const c = await randomID();
    const d = await randomID();
    return a + "-" + b + "-" + c + "-" + d;
}