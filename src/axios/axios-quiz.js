import axios from 'axios'

export default axios.create({
  baseURL: 'https://quiz-react-6d601.firebaseio.com/'
})