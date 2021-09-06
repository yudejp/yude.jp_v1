import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yude',
  apiKey: process.env.MICROCMS_API_KEY,
});