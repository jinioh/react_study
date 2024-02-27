import axios from 'axios'
export const API_SEVER_HOST = 'http://localhost:8080'
const prefix = `${API_SEVER_HOST}/api/todo`

export const getOne = async (tno) => {
    console.log('getOne API call!!')
    const res = await axios.get(`${prefix}/${tno}`)

    return res.data
}

export const getList = async (pageParam) => {
    const {page, size} = pageParam
    const res = await axios.get(`${prefix}/list`, {params: {page: page, size, size}})
    return res.data
}