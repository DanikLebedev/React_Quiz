import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-a4460.firebaseio.com/'
})