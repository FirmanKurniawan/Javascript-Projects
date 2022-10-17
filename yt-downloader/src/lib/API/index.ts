import axios, { AxiosRequestConfig } from "axios";

export type APIResponseTypes = {
  success: boolean;
  data: any;
  message: string;
};

interface CallAPIProps extends AxiosRequestConfig {
  path?: string;
}

export default async function callAPI({
  path,
  method,
  data,
}: CallAPIProps): Promise<APIResponseTypes> {
  const response = await axios({
    url: `${process.env.NEXT_PUBLIC_API_URL}/${path}`,
    method,
    data,
  }).catch((err) => err.response);

  if (response !== undefined) {
    if (response.status > 300) {
      const res: APIResponseTypes = {
        success: false,
        data: null,
        message: response.data.message,
      };
      return res;
    }

    const res: APIResponseTypes = {
      success: true,
      data: response.data.data,
      message: response.data.message,
    };

    return res;
  } else {
    const res: APIResponseTypes = {
      success: false,
      data: null,
      message: response,
    };
    return res;
  }
}
