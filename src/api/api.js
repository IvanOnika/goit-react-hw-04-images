import axios from "axios";

export const fetchImg = async(qvery, page) => {
    const BASEURL = 'https://pixabay.com/api/';
    const KEY = '33392405-1f3a7205349fef75431f4ab2a'
    const OPTIONS = `?q=${qvery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    const response = await axios.get(`${BASEURL}${OPTIONS}`)
    return response.data
}