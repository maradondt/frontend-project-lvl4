import React from 'react';
import Chat from './Chat';

export default function App(props) {
  const { gon: { channels } } = props;
  return <Chat channels={channels} />;
}
