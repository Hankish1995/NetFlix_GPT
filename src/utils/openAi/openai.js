import OpenAI from 'openai';
import openAIKey from '../keys/KEYS.JS';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai