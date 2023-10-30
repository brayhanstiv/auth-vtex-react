// Packages
import axios from "axios";

const base_url = 'itgloberspartnerpe.myvtex.com';
let authToken = '';

export const getToken = async () => {
  try {
    const url = `${base_url}/api/vtexid/pub/authentication/start`;

    const data = {
      "callbackUrl":
          `https://${base_url}/api/vtexid/pub/authentication/finish`,
      "returnUrl": `https://${base_url}`,
      "scope": "itglobers",
      "locale": "es_CO",
      "appStart": "true",
      "method": "POST"
    }

    const res = await axios.post(url, data);
    return res.data.authenticationToken;
    
  } catch (error) {
    throw error;
  }
}

export const sendCodeEmail = async (email: string) => {
  try {
    const token = await getToken();
    const url = `${base_url}/api/vtexid/pub/authentication/accesskey/send?email=${email}&authenticationToken=${token}`;
    authToken = token;
    await axios.post(url);
    
  } catch (error) {
    throw error;
  }
}

export const validateCodeEmail = async (email: string, accesskey: string) => {
  try {
    const token = await getToken();
    const url = `${base_url}/api/vtexid/pub/authentication/accesskey/validate`;

    const data = {
      "login": email,
      "accesskey": accesskey,
      "authenticationToken": token,
    }

    await axios.post(url, data);
    
  } catch (error) {
    throw error;
  }
}