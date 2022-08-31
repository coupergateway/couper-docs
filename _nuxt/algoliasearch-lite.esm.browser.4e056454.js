function M(e){const t=`algoliasearch-client-js-${e.key}`;let r;const n=()=>(r===void 0&&(r=e.localStorage||window.localStorage),r),a=()=>JSON.parse(n().getItem(t)||"{}");return{get(s,o,c={miss:()=>Promise.resolve()}){return Promise.resolve().then(()=>{const l=JSON.stringify(s),h=a()[l];return Promise.all([h||o(),h!==void 0])}).then(([l,h])=>Promise.all([l,h||c.miss(l)])).then(([l])=>l)},set(s,o){return Promise.resolve().then(()=>{const c=a();return c[JSON.stringify(s)]=o,n().setItem(t,JSON.stringify(c)),o})},delete(s){return Promise.resolve().then(()=>{const o=a();delete o[JSON.stringify(s)],n().setItem(t,JSON.stringify(o))})},clear(){return Promise.resolve().then(()=>{n().removeItem(t)})}}}function T(e){const t=[...e.caches],r=t.shift();return r===void 0?W():{get(n,a,s={miss:()=>Promise.resolve()}){return r.get(n,a,s).catch(()=>T({caches:t}).get(n,a,s))},set(n,a){return r.set(n,a).catch(()=>T({caches:t}).set(n,a))},delete(n){return r.delete(n).catch(()=>T({caches:t}).delete(n))},clear(){return r.clear().catch(()=>T({caches:t}).clear())}}}function W(){return{get(e,t,r={miss:()=>Promise.resolve()}){return t().then(a=>Promise.all([a,r.miss(a)])).then(([a])=>a)},set(e,t){return Promise.resolve(t)},delete(e){return Promise.resolve()},clear(){return Promise.resolve()}}}function w(e={serializable:!0}){let t={};return{get(r,n,a={miss:()=>Promise.resolve()}){const s=JSON.stringify(r);if(s in t)return Promise.resolve(e.serializable?JSON.parse(t[s]):t[s]);const o=n(),c=a&&a.miss||(()=>Promise.resolve());return o.then(l=>c(l)).then(()=>o)},set(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear(){return t={},Promise.resolve()}}}function L(e,t,r){const n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers(){return e===A.WithinHeaders?n:{}},queryParameters(){return e===A.WithinQueryParameters?n:{}}}}function Q(e){let t=e.length-1;for(t;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function J(e,t){return t&&Object.keys(t).forEach(r=>{e[r]=t[r](e)}),e}function v(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}const N="4.14.2",A={WithinQueryParameters:0,WithinHeaders:1};function R(e,t){const r=e||{},n=r.data||{};return Object.keys(r).forEach(a=>{["timeout","headers","queryParameters","data","cacheable"].indexOf(a)===-1&&(n[a]=r[a])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}const P={Read:1,Write:2,Any:3},O={Up:1,Down:2,Timeouted:3},j=2*60*1e3;function D(e,t=O.Up){return{...e,status:t,lastUpdate:Date.now()}}function G(e){return e.status===O.Up||Date.now()-e.lastUpdate>j}function _(e){return e.status===O.Timeouted&&Date.now()-e.lastUpdate<=j}function U(e){return typeof e=="string"?{protocol:"https",url:e,accept:P.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||P.Any}}const p={Delete:"DELETE",Get:"GET",Post:"POST",Put:"PUT"};function B(e,t){return Promise.all(t.map(r=>e.get(r,()=>Promise.resolve(D(r))))).then(r=>{const n=r.filter(c=>G(c)),a=r.filter(c=>_(c)),s=[...n,...a],o=s.length>0?s.map(c=>U(c)):t;return{getTimeout(c,l){return(a.length===0&&c===0?1:a.length+3+c)*l},statelessHosts:o}})}const V=({isTimedOut:e,status:t})=>!e&&~~t===0,X=e=>{const t=e.status;return e.isTimedOut||V(e)||~~(t/100)!==2&&~~(t/100)!==4},K=({status:e})=>~~(e/100)===2,Y=(e,t)=>X(e)?t.onRetry(e):K(e)?t.onSuccess(e):t.onFail(e);function x(e,t,r,n){const a=[],s=ae(r,n),o=se(e,n),c=r.method,l=r.method!==p.Get?{}:{...r.data,...n.data},h={"x-algolia-agent":e.userAgent.value,...e.queryParameters,...l,...n.queryParameters};let b=0;const u=(d,g)=>{const m=d.pop();if(m===void 0)throw ie($(a));const S={data:s,headers:o,method:c,url:ne(m,r.path,h),connectTimeout:g(b,e.timeouts.connect),responseTimeout:g(b,n.timeout)},C=i=>{const y={request:S,response:i,host:m,triesLeft:d.length};return a.push(y),y},f={onSuccess:i=>te(i),onRetry(i){const y=C(i);return i.isTimedOut&&b++,Promise.all([e.logger.info("Retryable failure",z(y)),e.hostsCache.set(m,D(m,i.isTimedOut?O.Timeouted:O.Down))]).then(()=>u(d,g))},onFail(i){throw C(i),re(i,$(a))}};return e.requester.send(S).then(i=>Y(i,f))};return B(e.hostsCache,t).then(d=>u([...d.statelessHosts].reverse(),d.getTimeout))}function Z(e){const{hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:s,timeouts:o,userAgent:c,hosts:l,queryParameters:h,headers:b}=e,u={hostsCache:t,logger:r,requester:n,requestsCache:a,responsesCache:s,timeouts:o,userAgent:c,headers:b,queryParameters:h,hosts:l.map(d=>U(d)),read(d,g){const m=R(g,u.timeouts.read),S=()=>x(u,u.hosts.filter(i=>(i.accept&P.Read)!==0),d,m);if((m.cacheable!==void 0?m.cacheable:d.cacheable)!==!0)return S();const f={request:d,mappedRequestOptions:m,transporter:{queryParameters:u.queryParameters,headers:u.headers}};return u.responsesCache.get(f,()=>u.requestsCache.get(f,()=>u.requestsCache.set(f,S()).then(i=>Promise.all([u.requestsCache.delete(f),i]),i=>Promise.all([u.requestsCache.delete(f),Promise.reject(i)])).then(([i,y])=>y)),{miss:i=>u.responsesCache.set(f,i)})},write(d,g){return x(u,u.hosts.filter(m=>(m.accept&P.Write)!==0),d,R(g,u.timeouts.write))}};return u}function ee(e){const t={value:`Algolia for JavaScript (${e})`,add(r){const n=`; ${r.segment}${r.version!==void 0?` (${r.version})`:""}`;return t.value.indexOf(n)===-1&&(t.value=`${t.value}${n}`),t}};return t}function te(e){try{return JSON.parse(e.content)}catch(t){throw ce(t.message,e)}}function re({content:e,status:t},r){let n=e;try{n=JSON.parse(e).message}catch{}return oe(n,t,r)}function ne(e,t,r){const n=k(r);let a=`${e.protocol}://${e.url}/${t.charAt(0)==="/"?t.substr(1):t}`;return n.length&&(a+=`?${n}`),a}function k(e){const t=r=>Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]";return Object.keys(e).map(r=>v("%s=%s",r,t(e[r])?JSON.stringify(e[r]):e[r])).join("&")}function ae(e,t){if(e.method===p.Get||e.data===void 0&&t.data===void 0)return;const r=Array.isArray(e.data)?e.data:{...e.data,...t.data};return JSON.stringify(r)}function se(e,t){const r={...e.headers,...t.headers},n={};return Object.keys(r).forEach(a=>{const s=r[a];n[a.toLowerCase()]=s}),n}function $(e){return e.map(t=>z(t))}function z(e){const t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return{...e,request:{...e.request,headers:{...e.request.headers,...t}}}}function oe(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}function ce(e,t){return{name:"DeserializationError",message:e,response:t}}function ie(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:e}}const ue=e=>{const t=e.appId,r=L(e.authMode!==void 0?e.authMode:A.WithinHeaders,t,e.apiKey),n=Z({hosts:[{url:`${t}-dsn.algolia.net`,accept:P.Read},{url:`${t}.algolia.net`,accept:P.Write}].concat(Q([{url:`${t}-1.algolianet.com`},{url:`${t}-2.algolianet.com`},{url:`${t}-3.algolianet.com`}])),...e,headers:{...r.headers(),"content-type":"application/x-www-form-urlencoded",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}});return J({transporter:n,appId:t,addAlgoliaAgent(s,o){n.userAgent.add({segment:s,version:o})},clearCache(){return Promise.all([n.requestsCache.clear(),n.responsesCache.clear()]).then(()=>{})}},e.methods)},le=e=>(t,r)=>t.method===p.Get?e.transporter.read(t,r):e.transporter.write(t,r),H=e=>(t,r={})=>{const n={transporter:e.transporter,appId:e.appId,indexName:t};return J(n,r.methods)},q=e=>(t,r)=>{const n=t.map(a=>({...a,params:k(a.params||{})}));return e.transporter.read({method:p.Post,path:"1/indexes/*/queries",data:{requests:n},cacheable:!0},r)},I=e=>(t,r)=>Promise.all(t.map(n=>{const{facetName:a,facetQuery:s,...o}=n.params;return H(e)(n.indexName,{methods:{searchForFacetValues:F}}).searchForFacetValues(a,s,{...r,...o})})),de=e=>(t,r,n)=>e.transporter.read({method:p.Post,path:v("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n),me=e=>(t,r)=>e.transporter.read({method:p.Post,path:v("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r),F=e=>(t,r,n)=>e.transporter.read({method:p.Post,path:v("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n),E={Debug:1,Info:2,Error:3};function he(e){return{debug(t,r){return E.Debug>=e&&console.debug(t,r),Promise.resolve()},info(t,r){return E.Info>=e&&console.info(t,r),Promise.resolve()},error(t,r){return console.error(t,r),Promise.resolve()}}}function fe(){return{send(e){return new Promise(t=>{const r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach(o=>r.setRequestHeader(o,e.headers[o]));const n=(o,c)=>setTimeout(()=>{r.abort(),t({status:0,content:c,isTimedOut:!0})},o*1e3),a=n(e.connectTimeout,"Connection timeout");let s;r.onreadystatechange=()=>{r.readyState>r.OPENED&&s===void 0&&(clearTimeout(a),s=n(e.responseTimeout,"Socket timeout"))},r.onerror=()=>{r.status===0&&(clearTimeout(a),clearTimeout(s),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=()=>{clearTimeout(a),clearTimeout(s),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)})}}}function ge(e,t,r){const n={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:fe(),logger:he(E.Error),responsesCache:w(),requestsCache:w({serializable:!1}),hostsCache:T({caches:[M({key:`${N}-${e}`}),w()]}),userAgent:ee(N).add({segment:"Browser",version:"lite"}),authMode:A.WithinQueryParameters};return ue({...n,...r,methods:{search:q,searchForFacetValues:I,multipleQueries:q,multipleSearchForFacetValues:I,customRequest:le,initIndex:a=>s=>H(a)(s,{methods:{search:me,searchForFacetValues:F,findAnswers:de}})}})}ge.version=N;export{ge as default};