import Axios from 'axios';
import { IRequest, IResponse } from '../models/iHttpObject';
export default function MiddlewareManager<T extends IRequest, U extends IResponse>() {
    return {
        PostData: async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await Axios.post(request.Url === undefined ? '' : request.Url + request.Method, request.Model);
            } catch (e) {
                result.Error = e.message;
            }
            return result;
        },
        PutData: async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await Axios.put(request.Url === undefined ? '' : request.Url + request.Method, request.Model);
            } catch (e) {
                result.Error = e.message;
            }
            return result;
        },
        GetData: async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await Axios.get(request.Url === undefined ? '' : request.Url + request.Method);
            } catch (e) {
                result.Error = e.message;
            }
            return result;
        },
        DeleteData: async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await Axios.delete(request.Url === undefined ? '' : request.Url + request.Method);
            } catch (e) {
                result.Error = e.message;
            }
            return result;
        }
    }
}