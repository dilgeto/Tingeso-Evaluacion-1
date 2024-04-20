import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/repairs/');
}

const get = id => {
    return httpClient.get(`/repairs/${id}`);
}

// TODO: Arreglar "calculate".
const calculate = () => {
    return httpClient.get("/repairs/calculate",{params:{plate,checkinDate,checkinHour,reparationType,exitDate,exitHour,collectDate,collectHour}});
}

export default { getAll, get, calculate };