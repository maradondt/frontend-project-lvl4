/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import routes from '../routes';

export const postMessage = async (message, channelId) => {
  const attributes = { ...message };
  try {
    const response = await axios.post(
      routes.channelMessagesPath(channelId),
      { data: { attributes } },
    );
    return response.data.data;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
