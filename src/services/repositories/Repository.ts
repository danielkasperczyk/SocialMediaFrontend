/* eslint-disable class-methods-use-this */
import { AxiosError, AxiosResponse } from 'axios';
import { api } from 'boot/axios';
import { Notify } from 'quasar';

interface ErrorResponse extends AxiosResponse {
  data: {
    message: string;
  };
}

interface ErrorExtended extends AxiosError {
  response: ErrorResponse;
}

class Repository {
  protected api = api;

  protected errorHandler(error: ErrorExtended) {
    const { response } = error;
    if (response.data.message) {
      Notify.create({
        message: response.data.message,
        actions: [{ label: 'Ok', color: 'white', handler: () => ({}) }],
      });
    }
  }
}

export default Repository;
