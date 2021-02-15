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
    throw new Error(e);
  }
};

export const getMessages = async (channelId) => {
  try {
    const response = await axios.get(
      routes.channelMessagesPath(channelId),
    );
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};
