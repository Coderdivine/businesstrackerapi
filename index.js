const express=require("express")
const app=express();
const cors=require("cors");
const port= process.env.PORT || 5908;
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
const STATIC_TRACKER ={
    BusinessIdea:[
        {name:"First business idea",Description:"From bus tarcker", link:"https://localhost:4000"},
        {name:"Second business idea",Description:"From bus tarcker", link:"https://localhost:4000"},
        {name:"Third business idea",Description:"From bus tarcker", link:"https://localhost:4000"},
        {name:"Fourth business idea",Description:"From bus tarcker", link:"https://localhost:4000"}
    ],
    BusinessEducation:[
        {name:"First business Education",
        Description:"From bus tarcker",
        topic:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        link:"https://localhost:4000"},
        {name:"Second business Education",
        Description:"From bus tarcker",
        topic:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        link:"https://localhost:4000"},
        {name:"Third business Education",
        Description:"From bus tarcker",
        topic:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        link:"https://localhost:4000"}
    ],
    InternetMoney:[
        {name:"First Internet money business",
        Description:"From bus tarcker",
        topic:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        website:"www.example.com",
        address:"bitcoin",
        link:"https://localhost:4000"},
        {name:"First Internet money business",
        Description:"From bus tarcker",
        topic:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        website:"www.example.com",
        address:"bitcoin",
        link:"https://localhost:4000"}
    ],
    FinanceNews:[
        {name:"First Internet money business",
        Description:"From bus tarcker",
        news:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        website:"www.example.com",
        address:"bitcoin",
        link:"https://localhost:4000"},
        {name:"First Internet money business",
        Description:"From bus tarcker",
        news:"Money making",
        note:"Some txt here",
        conclusion:"End of passage",
        website:"www.example.com",
        address:"bitcoin",
        link:"https://localhost:4000"}
    ],
    DailyJokes:[
        {name:"Joke",Description:"I was born when my mother gave birth to me but it was a joke"},
        {name:"Joke",Description:"230 - 220 * 0.5, you believe the answer is 5!"}

    ],
    DailyMotivation:[
        {name:"Ali baba",Description:"Don't give up",coat:"chimdi"},
        {name:"Ronaldo",Description:"work like the acient days" ,coat:"chimdi"},
        {name:"Chimdi",Description:"The more you know + The more you know = You don't know",coat:"chimdi"},
        {name:"***",Description:"Learn to be a verbatim" ,coat:"chimdi"},
        {name:"***",Description:"Don't forget your goals",coat:"chimdi"},
        {name:"***",Description:"Never give up on Ideas" ,coat:"chimdi"},
        {name:"***",Description:"Don't give up",coat:"chimdi"},
        {name:"***",Description:"work like the acient days" ,coat:"chimdi"},
        {name:"***",Description:"There's no time to waste time",coat:"chimdi"},
        {name:"***",Description:"The wise can act like a fool but the fool can't act like the wise" ,coat:"johnson"},
        {name:"***",Description:"Don't forget your strong background" ,coat:"chimdi"},
        {name:"***",Description:"Give thanks to God for everything",coat:"chimdi"},
        {name:"***",Description:"Small idea is the key" ,coat:"chimdi"},
        {name:"***",Description:"Work Smart and Hard" ,coat:"chimdi"},
        {name:"***",Description:"Build your foundation first" ,coat:"chimdi"},
        {name:"***",Description:"Mind your business growth",coat:"chimdi"},
        {name:"***",Description:"Don't comare when starting a business" ,coat:"chimdi"},
        {name:"***",Description:"Learn how to update long term goal" ,coat:"chimdi"},
        {name:"***",Description:"Do you know you need 500 people to buy a product of 200 dollar to make a millon dollar ;)" ,coat:"chimdi"},
        {name:"***",Description:"Look for the perfect key word",coat:"chimdi"},
        {name:"***",Description:"A customer cost a lot in business,so give your customer the best service" ,coat:"chimdi"},
        {name:"***",Description:"Be mindful of what you impart" ,coat:"chimdi"},
        {name:"***",Description:"Be mindful of what you store in your brain",coat:"chimdi"},
        {name:"***",Description:"Know your worth" ,coat:"chimdi"},
        {name:"***",Description:"Not every saying you believe" ,coat:"chimdi"},
        {name:"***",Description:"Grace is the way",coat:"chimdi"},
        {name:"***",Description:"Don't be a computer virgin" ,coat:"chimdi"},

        {name:"***",Description:"Do you know you need 500 people to buy a product of 200 dollar to make a millon dollar ;)" ,coat:"chimdi"},
        {name:"***",Description:"Look for the perfect key word",coat:"chimdi"},
        {name:"***",Description:"A customer cost a lot in business,so give your customer the best service" ,coat:"chimdi"},
    ]

}
app.get("/STATIC_TRACKER",(req,res)=>{
  
   
    const drain = STATIC_TRACKER.DailyMotivation.map(x=>
        x.Description
    
     )
    console.log(drain);
    res.jsonp(drain)
 })
app.listen(  port ,()=>{
console.log(`Yey Server is running on ${port}`);

}) 
