import { Message, OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

interface RequestProps {
  messages: Message[];
  situation: string;
  task: string;
  action: string;
  result: string;
  recommendKeywordList: string[];
}

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, situation, task, action, result, recommendKeywordList } = (await req.json()) as RequestProps;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: messages.map((message) => ({
      content: `
        You will receive two keywords and four paragraphs.
        \nParagraphs given are delimited by triple backticks.
        \nKeywords given are string array wrapped by single backtick.
        \n\nYour task is to write a new essay for a job application. This eassy should include the content of paragraphs and keywords below, and just refer to its.\n\nYour essay should be clearly formatted, consist of complete sentence.\n\nNo longer than 700 characters.\n\nNo title and subtitle.\n\nYour essay should be translated in Korean.\n\nCheck if your resume's content exceeds 700 characters in Korean.
        \n\nParagraphs: ${message.content}
        \`\`\`
        \nSituation: ${situation}
        \nTask: ${task}
        \nAction: ${action}
        \nResult: ${result}
        \`\`\`
        \nKeywords: \`${recommendKeywordList?.join(', ')}\``,
      role: message.role,
    })),
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
