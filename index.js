const axios = require('axios');
const { paymentTokenRequestBody, paymentExecutionRequestBody } = require('./fixures/postRequests');

const apiDevUrl = 'https://developers.decidir.com/api/v2';
const apiProdUrl = 'https://live.decidir.com/api/v2';

const apiPublicKey = "e9cdb99fff374b5f91da4480c8dca741";
const apiPrivateKey = "92b71cf711ca41f78362a7134f87ff65";

const buildAxiosHeaders = (apiKey) => {
    return {
        headers: {
            apiKey,
            ContentType: 'application/json',
            CacheControl: 'no-cache'
        }
    }
}

/**
 * Simple Transactions Example
 * https://decidirv2.api-docs.io/1.0/transacciones-simples/flujo-de-una-transaccion-simple
 */

/**
 * https://decidirv2.api-docs.io/1.0/transacciones-simples/solicitud-de-token-de-pago-1
 */
const paymentTokenRequest = async () => {
    try {
        const { data } = await axios.post(`${apiDevUrl}/tokens`, paymentTokenRequestBody , buildAxiosHeaders(apiPublicKey));
        return data
    } catch (e) {
        //TODO: Handle error
        return e;
    }
};

const paymentExecutionRequest = async () => {
    try {
        const { data } = await axios.post(`${apiDevUrl}/payments`, paymentExecutionRequestBody , buildAxiosHeaders(apiPublicKey));
        return data
    } catch (e) {
        //TODO: Handle error
        return e;
    }
}

/**
 * https://decidirv2.api-docs.io/1.0/operaciones-sobre-transacciones-simples/listado-de-pagos
 */

const paymentListRequest = async () => {
    try {
        const { data } = await axios.get(`${apiDevUrl}/payments`, buildAxiosHeaders(apiPrivateKey));
        return data
    } catch (e) {
        //TODO: Handle error
        return e;
    }
}