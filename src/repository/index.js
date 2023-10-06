import axios from "../libs/axios";

export async function searchMedicine(medicine) {
    const search = "/pesquisar?nome=";
    const res = axios.get(search + medicine);
    return res;
}

export async function detailsMedicine(medicine) {
    const params = "/medicamento/";
    const res = axios.get(params + medicine);
    return res;
}

export async function leafletDownload(medicine) {
    const params = "/bula?id=";
    const res = await axios.get(params + medicine);
    return res;
}
