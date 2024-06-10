import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export default openai