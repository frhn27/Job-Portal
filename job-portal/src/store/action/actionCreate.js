import { FETCH_JOB_SUCCESS } from "./actionType";
import axios from "axios"

const BASE_URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=db878a1b&app_key=3f216d63ccdb0355afa938c32b977362&results_per_page=5&what=backend`

const fetchJobSuccess = (data) => {
    return {
        type: FETCH_JOB_SUCCESS,
        payload : data
    }
}

export const fetchJobs =  () => {
    return async (dispatch, state) => {
        try {
            
            const { data } = await axios({
                method : "GET",
                url : BASE_URL,
            })

            const results = data.results

            const action = fetchJobSuccess(results)
            dispatch(action)

        } catch (error) {
            console.log(error)
        }
    }
}