"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3012],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||s;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",authors:"jieyuz2",tags:["LLM","RAG","cost-effectiveness"]},o=void 0,i={permalink:"/autogen/blog/2023/11/09/EcoAssistant",source:"@site/blog/2023-11-09-EcoAssistant/index.mdx",title:"EcoAssistant - Using LLM Assistants More Accurately and Affordably",description:"system",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"RAG",permalink:"/autogen/blog/tags/rag"},{label:"cost-effectiveness",permalink:"/autogen/blog/tags/cost-effectiveness"}],readingTime:4.565,truncated:!1,authors:[{name:"Jieyu Zhang",title:"PhD student at University of Washington",url:"https://jieyuz2.github.io/",imageURL:"https://github.com/jieyuz2.png",key:"jieyuz2"}],nextItem:{title:"Multimodal with GPT-4V and LLaVA",permalink:"/autogen/blog/2023/11/06/LMM-Agent"}},l={authorsImageUrls:[void 0]},c=[{value:"EcoAssistant",id:"ecoassistant",children:[{value:"Problem setup",id:"problem-setup",children:[],level:3},{value:"Leveraging external APIs",id:"leveraging-external-apis",children:[],level:3},{value:"Solution Demonstration",id:"solution-demonstration",children:[],level:3},{value:"Assistant Hierarchy",id:"assistant-hierarchy",children:[],level:3},{value:"A Synergistic Effect",id:"a-synergistic-effect",children:[],level:3},{value:"Experimental Results",id:"experimental-results",children:[],level:3}],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],u={toc:c};function p(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"system",src:a(7915).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introducing the ",(0,r.kt)("strong",{parentName:"li"},"EcoAssistant"),", which is designed to solve user queries more accurately and affordably."),(0,r.kt)("li",{parentName:"ul"},"We show how to let the LLM assistant agent leverage external API to solve user query."),(0,r.kt)("li",{parentName:"ul"},"We show how to reduce the cost of using GPT models via ",(0,r.kt)("strong",{parentName:"li"},"Assistant Hierachy"),"."),(0,r.kt)("li",{parentName:"ul"},"We show how to leverage the idea of Retrieval-augmented Generation (RAG) to improve the success rate via ",(0,r.kt)("strong",{parentName:"li"},"Solution Demonstration"),".")),(0,r.kt)("h2",{id:"ecoassistant"},"EcoAssistant"),(0,r.kt)("p",null,"In this blog, we introduce the ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant"),", a system built upon AutoGen with the goal of solving user queries more accurately and affordably."),(0,r.kt)("h3",{id:"problem-setup"},"Problem setup"),(0,r.kt)("p",null,"Recently, users have been using conversational LLMs such as ChatGPT for various queries.\nReports indicate that 23% of ChatGPT user queries are for knowledge extraction purposes.\nMany of these queries require knowledge that is external to the information stored within any pre-trained large language models (LLMs).\nThese tasks can only be completed by generating code to fetch necessary information via external APIs that contain the requested information.\nIn the table below, we show three types of user queries that we aim to address in this work."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dataset"),(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Example query"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Places"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developers.google.com/maps/documentation/places/web-service/overview"},"Google Places")),(0,r.kt)("td",{parentName:"tr",align:null},"I\u2019m looking for a 24-hour pharmacy in Montreal, can you find one for me?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weather"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.weatherapi.com"},"Weather API")),(0,r.kt)("td",{parentName:"tr",align:null},"What is the current cloud coverage in Mumbai, India?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.alphavantage.co/documentation/"},"Alpha Vantage Stock API")),(0,r.kt)("td",{parentName:"tr",align:null},"Can you give me the opening price of Microsoft for the month of January 2023?")))),(0,r.kt)("h3",{id:"leveraging-external-apis"},"Leveraging external APIs"),(0,r.kt)("p",null,"To address these queries, we first build a ",(0,r.kt)("strong",{parentName:"p"},"two-agent system")," based on AutoGen,\nwhere the first agent is a ",(0,r.kt)("strong",{parentName:"p"},"LLM assistant agent")," (",(0,r.kt)("inlineCode",{parentName:"p"},"AssistantAgent")," in AutoGen) that is responsible for proposing and refining the code and\nthe second agent is a ",(0,r.kt)("strong",{parentName:"p"},"code executor agent")," (",(0,r.kt)("inlineCode",{parentName:"p"},"UserProxyAgent")," in AutoGen) that would extract the generated code and execute it, forwarding the output back to the LLM assistant agent.\nA visualization of the two-agent system is shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"chat",src:a(1955).Z})),(0,r.kt)("p",null,"To instruct the assistant agent to leverage external APIs, we only need to add the API name/key dictionary at the beginning of the initial message.\nThe template is shown below, where the red part is the information of APIs and black part is user query."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template",src:a(8904).Z})),(0,r.kt)("p",null,"Importantly, we don't want to reveal our real API key to the assistant agent for safety concerns.\nTherefore, we use a ",(0,r.kt)("strong",{parentName:"p"},"fake API key")," to replace the real API key in the initial message.\nIn particular, we generate a random token (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"181dbb37"),") for each API key and replace the real API key with the token in the initial message.\nThen, when the code executor execute the code, the fake API key would be automatically replaced by the real API key."),(0,r.kt)("h3",{id:"solution-demonstration"},"Solution Demonstration"),(0,r.kt)("p",null,"In most practical scenarios, queries from users would appear sequentially over time.\nOur ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," leverages past success to help the LLM assistants address future queries via ",(0,r.kt)("strong",{parentName:"p"},"Solution Demonstration"),".\nSpecifically, whenever a query is deemed successfully resolved by user feedback, we capture and store the query and the final generated code snippet.\nThese query-code pairs are saved in a specialized vector database. When new queries appear, ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," retrieves the most similar query from the database, which is then appended with the associated code to the initial prompt for the new query, serving as a demonstration.\nThe new template of initial message is shown below, where the blue part corresponds to the solution demonstration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"template",src:a(2018).Z})),(0,r.kt)("p",null,"We found that this utilization of past successful query-code pairs improves the query resolution process with fewer iterations and enhances the system's performance."),(0,r.kt)("h3",{id:"assistant-hierarchy"},"Assistant Hierarchy"),(0,r.kt)("p",null,"LLMs usually have different prices and performance, for example, GPT-3.5-turbo is much cheaper than GPT-4 but also less accurate.\nThus, we propose the ",(0,r.kt)("strong",{parentName:"p"},"Assistant Hierarchy")," to reduce the cost of using LLMs.\nThe core idea is that we use the cheaper LLMs first and only use the more expensive LLMs when necessary.\nBy this way, we are able to reduce the reliance on expensive LLMs and thus reduce the cost.\nIn particular, given multiple LLMs, we initiate one assistant agent for each and start the conversation with the most cost-effective LLM assistant.\nIf the conversation between the current LLM assistant and the code executor concludes without successfully resolving the query, ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," would then restart the conversation with the next more expensive LLM assistant in the hierarchy.\nWe found that this strategy significantly reduces costs while still effectively addressing queries."),(0,r.kt)("h3",{id:"a-synergistic-effect"},"A Synergistic Effect"),(0,r.kt)("p",null,"We found that the ",(0,r.kt)("strong",{parentName:"p"},"Assistant Hierarchy")," and ",(0,r.kt)("strong",{parentName:"p"},"Solution Demonstration")," of ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," have a synergistic effect.\nBecause the query-code database is shared by all LLM assistants, even without specialized design,\nthe solution from more powerful LLM assistant (e.g., GPT-4) could be later retrieved to guide weaker LLM assistant (e.g., GPT-3.5-turbo).\nSuch a synergistic effect further improves the performance and reduces the cost of ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant"),"."),(0,r.kt)("h3",{id:"experimental-results"},"Experimental Results"),(0,r.kt)("p",null,"We evaluate ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," on three datasets: Places, Weather, and Stock. When comparing it with a single GPT-4 assistant, we found that ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant")," achieves a higher success rate with a lower cost as shown in the figure below.\nFor more details about the experimental results and other experiments, please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2310.03046"},"paper"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"exp",src:a(4261).Z})),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"Please refer to our ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2310.03046"},"paper")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JieyuZ2/EcoAssistant"},"codebase")," for more details about ",(0,r.kt)("strong",{parentName:"p"},"EcoAssistant"),"."),(0,r.kt)("p",null,"If you find this blog useful, please consider citing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{zhang2023ecoassistant,\n  title={EcoAssistant: Using LLM Assistant More Affordably and Accurately},\n  author={Zhang, Jieyu and Krishna, Ranjay and Awadallah, Ahmed H and Wang, Chi},\n  journal={arXiv preprint arXiv:2310.03046},\n  year={2023}\n}\n")))}p.isMDXComponent=!0},1955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chat-a2adea6a92b3cd4059021840c869d7d5.png"},4261:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/results-4c8cfbb728760a85ce2d549fd7798179.png"},7915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/system-1f6d283e77b49cac460bb999adb6bd5d.png"},2018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-demo-5a8cae3df56acdcf73188e401ad739f5.png"},8904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-c610ae53eaa7afa3adaf670fa74b5c10.png"}}]);