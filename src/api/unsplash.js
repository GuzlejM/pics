import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID UW5YeU8UOmREPLqfuJESMHX6aZmN-Ke0I6Y42x6E85c'
  }
});