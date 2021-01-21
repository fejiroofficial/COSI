import axios from 'axios';

export async function checkin (payload) {
  try {
    const { data, status } = await axios.post('https://app.fakejson.com/q', {
      token: "ELOeXImnDCgAec0Bx3GUqw",
      data: payload
    })
    if (status === 200) {
      return data
    }
  } catch (error) {
    console.log(error)
  }
};
