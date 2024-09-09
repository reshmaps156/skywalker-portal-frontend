import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to submit grievances
export const grievanceSubmitApi = async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/grievances`,reqBody)
}