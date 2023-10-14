import { FETCH_JOB_SUCCESS } from "./actionType";
import axios from "axios";

const BASE_URL = `https://api.adzuna.com/v1/api/jobs/gb/search/1`;
const APP_ID = 'db878a1b';
const APP_KEY = '3f216d63ccdb0355afa938c32b977362';
const RESULTS_PER_PAGE = 5;

const fetchJobSuccess = (data) => {
    return {
        type: FETCH_JOB_SUCCESS,
        payload: data
    }
}

export const fetchJobs = (search) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(BASE_URL, {
                params: {
                    app_id: APP_ID,
                    app_key: APP_KEY,
                    results_per_page: RESULTS_PER_PAGE,
                    what : search, // Dengan cara ini, parameter pencarian akan ditambahkan ke URL
                }
            });

            console.log(data, "<<<<<<<<<<<<");

            const results = data.results;
            dispatch(fetchJobSuccess(results));

        } catch (error) {
            console.error(error);
        }
    }
}
