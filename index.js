'use strict';
const line=require('@line/bot-sdk'),
express=require('express'),
configGet=require('config');

const {TextAnalyticsClient, AzureKeyCredential} = require("@azure/ai-text-analytics");

//Line config
const configLine={channelAccessToken:
    configGet.get('CHANNEL_ACCESS_TOKEN'),channelSecret:
    configGet.get('CHANNEL_SECRET')};   

//Azure Text sentiment
const endpoint = configGet.get("ENDPOINT");
const apikey = configGet.get("TEXT_ANALYSIS_API_KEY");

//accessing port 3001 using ngrok to use line bot
const client=new line.Client(configLine);
const app=express();
const port=process.env.PORT||process.env.port||3001;
    app.listen(port,()=>{
        console.log(`listening on ${port}`);
});

async function MS_TextSentimentAnalysis(thisEvent){
    console.log("[MS_TextSentimentAnalysis] activated");
    const analyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apikey));

    let document = [];
    document.push(thisEvent.message.text)

    const results = await analyticsClient.analyzeSentiment(document,"zh-Hant",{includeOpinionMining: true });
    console.log("[results]",JSON.stringify(results)) 

    // convert the returned onject into a chinese response with the corresponding score
    const echo = {
        type:'text',
        text:results[0].sentiment,

    };
    
    if(echo.text == "positive")
        echo.text = "正向; 分數:" + results[0].confidenceScores.positive //+ results[0].target.text
    else if(echo.text == "neutral")
        echo.text = "中立; 分數:" + results[0].confidenceScores.neutral //+ results[0].target.text
    else 
        echo.text = "負面; 分數:" + results[0].confidenceScores.negative //+ results[0].target.text

    return client.replyMessage(thisEvent.replyToken, echo);
}

app.post('/callback',line.middleware(configLine),(req,res)=>{
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result)=>res.json(result))
        .catch((err)=>{
            console.error(err);
            res.status(500).end();
        });
});

function handleEvent(event){
    if(event.type !== "message" || event.message.type !== "text"){
        return Promise.resolve(null)
    }
    
    MS_TextSentimentAnalysis(event)
    .catch((err) =>{
        console.error("Error:", err);
    });
    

    
}