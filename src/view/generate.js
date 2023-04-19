import { Configuration, OpenAIApi } from "openai";




export default async function generate(word) {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  if (!configuration.apiKey) {
    return;
  }


  if (word.trim().length === 0) {
    
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(word),
      temperature: 0.6,
    });
    return  completion.data.choices[0].text;
 ;
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
     
    }
  }
}

function generatePrompt(word) {
  const wordUse = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return `
  write an email in the style: 
Jesus Christ is the perfect example of caring for those in need. As His followers, we seek to love God and our neighbors throughout the world.
We are pleased to share this annual report on our work to care for God's children. We gratefully acknowledge the selfless service and donation of time, funds, and other resources by Church members and friends as we collectively care for others.
 email:
`

}

