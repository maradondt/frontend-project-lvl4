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

export const postChannel = async (name) => {
  const attributes = { name };
  try {
    const response = await axios.post(
      routes.channelsPath(),
      { data: { attributes } },
    );
    return response.data.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const patchChannel = async (id, name) => {
  const attributes = { name };
  try {
    const response = await axios.patch(
      routes.channelPath(id),
      { data: { attributes } },
    );
    return response.data.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const deleteChannel = async (id) => {
  try {
    const response = await axios.delete(
      routes.channelPath(id),
    );
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};
