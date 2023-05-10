# demo_analysis
 HW4 for LAT-Repo. Using azure text sentiment with line bot

![Alt text](./Screenshot%202023-05-10%20112235.png)


> demo_analysis@1.0.0 debug
> node --inspect index.js

    run-script-pkg.js:64
    listening on 3001
    index.js:22
    [MS_TextSentimentAnalysis] activated
    index.js:26
    [results] [{"id":"0","warnings":[],"sentiment":"positive","confidenceScores":{"positive":1,"neutral":0,"negative":0},"sentences":[{"confidenceScores":{"positive":1,"neutral":0,"negative":0},"sentiment":"positive","text":"這裏的氣氛很棒，繼續玩吧","offset":0,"length":12,"opinions":[{"target":{"confidenceScores":{"positive":1,"negative":0},"sentiment":"positive","text":"氣氛","offset":3,"length":2},"assessments":[{"sentiment":"positive","confidenceScores":{"positive":1,"negative":0},"offset":5,"length":2,"text":"很棒","isNegated":false}]
    index.js:33
    [MS_TextSentimentAnalysis] activated
    index.js:26
    [results] [{"id":"0","warnings":[],"sentiment":"positive","confidenceScores":{"positive":0.94,"neutral":0.04,"negative":0.02},"sentences":[{"confidenceScores":{"positive":0.94,"neutral":0.04,"negative":0.02},"sentiment":"positive","text":"圖書館很難得的安靜欸","offset":0,"length":10,"opinions":[]
    index.js:33
    [MS_TextSentimentAnalysis] activated
    index.js:26
    [results] [{"id":"0","warnings":[],"sentiment":"neutral","confidenceScores":{"positive":0.02,"neutral":0.56,"negative":0.42},"sentences":[{"confidenceScores":{"positive":0.02,"neutral":0.56,"negative":0.42},"sentiment":"neutral","text":"你很差勁欸","offset":0,"length":5,"opinions":[]
    index.js:33
    [MS_TextSentimentAnalysis] activated
    index.js:26
    [results] [{"id":"0","warnings":[],"sentiment":"negative","confidenceScores":{"positive":0,"neutral":0.04,"negative":0.96},"sentences":[{"confidenceScores":{"positive":0,"neutral":0.04,"negative":0.96},"sentiment":"negative","text":"這間教室好爛","offset":0,"length":6,"opinions":[{"target":{"confidenceScores":{"positive":0.07,"negative":0.93},"sentiment":"negative","text":"教室","offset":2,"length":2},"assessments":[{"sentiment":"negative","confidenceScores":{"positive":0.07,"negative":0.93},"offset":4,"length":2,"text":"好爛","isNegated":false}]
    index.js:33
    [MS_TextSentimentAnalysis] activated
    index.js:26
    [results] [{"id":"0","warnings":[],"sentiment":"neutral","confidenceScores":{"positive":0.01,"neutral":0.99,"negative":0},"sentences":[{"confidenceScores":{"positive":0.01,"neutral":0.99,"negative":0},"sentiment":"neutral","text":"時間很長，請加油","offset":0,"length":8,"opinions":[]