import OpenAI from 'openai';
import { OPEN_AI_KEY } from '../constants/constants';

const apiKey = OPEN_AI_KEY;

if (!apiKey) {
  throw new Error('The OPENAI_API_KEY environment variable is missing or empty.');
}

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

export default openai;
