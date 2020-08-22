import axios from 'axios';
import { IRequest as T, IResponse as U} from '../models/iHttpObject';
export default class MiddlewareManager {

        PostData = async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                await axios.post(request.Url === undefined ? '' : request.Url + request.Method, 
                (request.Model ? request.Model.length <= 1 ? request.Model[0] : request.Model : {}),
                request.Config === undefined ? null : request.Config
                ).then(r=>{
                    result = r.data;
                });
            } catch (e) {
                result.Error = e.message;
            } finally{
                
            }
            return result;
        }
        PutData = async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await axios.put(request.Url === undefined ? '' : request.Url + request.Method, 
                (request.Model ? request.Model.length <= 1 ? request.Model[0] : request.Model : {}),
                request.Config === undefined ? null : request.Config
                );
            } catch (e) {
                result.Error = e.message;
            }
            return new Promise<U>(()=>result);
        }
        GetData = async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await axios.get(request.Url === undefined ? '' : request.Url + request.Method, 
                request.Config === undefined ? null : request.Config);
            } catch (e) {
                result.Error = e.message;
            }
            return new Promise<U>(()=>result);
        }
        DeleteData = async (request: T): Promise<U> => {
            let result: U;
            result = {} as U;
            try {
                result = await axios.delete(request.Url === undefined ? '' : request.Url + request.Method,
                request.Config === undefined ? null : request.Config);
            } catch (e) {
                result.Error = e.message;
            }
            return new Promise<U>(()=>result);
        }
}