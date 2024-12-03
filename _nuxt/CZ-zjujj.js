function de(e){const t=`algoliasearch-client-js-${e.key}`;let r;const n=()=>(r===void 0&&(r=e.localStorage||window.localStorage),r),s=()=>JSON.parse(n().getItem(t)||"{}"),a=c=>{n().setItem(t,JSON.stringify(c))},o=()=>{const c=e.timeToLive?e.timeToLive*1e3:null,h=s(),m=Object.fromEntries(Object.entries(h).filter(([,u])=>u.timestamp!==void 0));if(a(m),!c)return;const d=Object.fromEntries(Object.entries(m).filter(([,u])=>{const y=new Date().getTime();return!(u.timestamp+c<y)}));a(d)};return{get(c,h,m={miss:()=>Promise.resolve()}){return Promise.resolve().then(()=>{o();const d=JSON.stringify(c);return s()[d]}).then(d=>Promise.all([d?d.value:h(),d!==void 0])).then(([d,u])=>Promise.all([d,u||m.miss(d)])).then(([d])=>d)},set(c,h){return Promise.resolve().then(()=>{const m=s();return m[JSON.stringify(c)]={timestamp:new Date().getTime(),value:h},n().setItem(t,JSON.stringify(m)),h})},delete(c){return Promise.resolve().then(()=>{const h=s();delete h[JSON.stringify(c)],n().setItem(t,JSON.stringify(h))})},clear(){return Promise.resolve().then(()=>{n().removeItem(t)})}}}function N(e){const t=[...e.caches],r=t.shift();return r===void 0?le():{get(n,s,a={miss:()=>Promise.resolve()}){return r.get(n,s,a).catch(()=>N({caches:t}).get(n,s,a))},set(n,s){return r.set(n,s).catch(()=>N({caches:t}).set(n,s))},delete(n){return r.delete(n).catch(()=>N({caches:t}).delete(n))},clear(){return r.clear().catch(()=>N({caches:t}).clear())}}}function le(){return{get(e,t,r={miss:()=>Promise.resolve()}){return t().then(s=>Promise.all([s,r.miss(s)])).then(([s])=>s)},set(e,t){return Promise.resolve(t)},delete(e){return Promise.resolve()},clear(){return Promise.resolve()}}}function U(e={serializable:!0}){let t={};return{get(r,n,s={miss:()=>Promise.resolve()}){const a=JSON.stringify(r);if(a in t)return Promise.resolve(e.serializable?JSON.parse(t[a]):t[a]);const o=n(),c=s&&s.miss||(()=>Promise.resolve());return o.then(h=>c(h)).then(()=>o)},set(r,n){return t[JSON.stringify(r)]=e.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete(r){return delete t[JSON.stringify(r)],Promise.resolve()},clear(){return t={},Promise.resolve()}}}function z(e,t,r){const n={"x-algolia-api-key":r,"x-algolia-application-id":t};return{headers(){return e===R.WithinHeaders?n:{}},queryParameters(){return e===R.WithinQueryParameters?n:{}}}}function T(e){let t=0;const r=()=>(t++,new Promise(n=>{setTimeout(()=>{n(e(r))},Math.min(100*t,1e3))}));return e(r)}function p(e,t=(r,n)=>Promise.resolve()){return Object.assign(e,{wait(r){return p(e.then(n=>Promise.all([t(n,r),n])).then(n=>n[1]))}})}function he(e){let t=e.length-1;for(t;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function v(e,t){return t&&Object.keys(t).forEach(r=>{e[r]=t[r](e)}),e}function l(e,...t){let r=0;return e.replace(/%s/g,()=>encodeURIComponent(t[r++]))}const G="4.22.1",R={WithinQueryParameters:0,WithinHeaders:1};function x(e,t){const r=e||{},n=r.data||{};return Object.keys(r).forEach(s=>{["timeout","headers","queryParameters","data","cacheable"].indexOf(s)===-1&&(n[s]=r[s])}),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||t,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}const S={Read:1,Write:2,Any:3},E={Up:1,Down:2,Timeouted:3},X=2*60*1e3;function V(e,t=E.Up){return{...e,status:t,lastUpdate:Date.now()}}function me(e){return e.status===E.Up||Date.now()-e.lastUpdate>X}function pe(e){return e.status===E.Timeouted&&Date.now()-e.lastUpdate<=X}function Y(e){return typeof e=="string"?{protocol:"https",url:e,accept:S.Any}:{protocol:e.protocol||"https",url:e.url,accept:e.accept||S.Any}}const i={Delete:"DELETE",Get:"GET",Post:"POST",Put:"PUT"};function ge(e,t){return Promise.all(t.map(r=>e.get(r,()=>Promise.resolve(V(r))))).then(r=>{const n=r.filter(c=>me(c)),s=r.filter(c=>pe(c)),a=[...n,...s],o=a.length>0?a.map(c=>Y(c)):t;return{getTimeout(c,h){return(s.length===0&&c===0?1:s.length+3+c)*h},statelessHosts:o}})}const ye=({isTimedOut:e,status:t})=>!e&&~~t===0,fe=e=>{const t=e.status;return e.isTimedOut||ye(e)||~~(t/100)!==2&&~~(t/100)!==4},Pe=({status:e})=>~~(e/100)===2,Ie=(e,t)=>fe(e)?t.onRetry(e):Pe(e)?t.onSuccess(e):t.onFail(e);function L(e,t,r,n){const s=[],a=be(r,n),o=je(e,n),c=r.method,h=r.method!==i.Get?{}:{...r.data,...n.data},m={"x-algolia-agent":e.userAgent.value,...e.queryParameters,...h,...n.queryParameters};let d=0;const u=(y,I)=>{const g=y.pop();if(g===void 0)throw ke(F(s));const w={data:a,headers:o,method:c,url:Oe(g,r.path,m),connectTimeout:I(d,e.timeouts.connect),responseTimeout:I(d,n.timeout)},O=f=>{const b={request:w,response:f,host:g,triesLeft:y.length};return s.push(b),b},D={onSuccess:f=>xe(f),onRetry(f){const b=O(f);return f.isTimedOut&&d++,Promise.all([e.logger.info("Retryable failure",ee(b)),e.hostsCache.set(g,V(g,f.isTimedOut?E.Timeouted:E.Down))]).then(()=>u(y,I))},onFail(f){throw O(f),De(f,F(s))}};return e.requester.send(w).then(f=>Ie(f,D))};return ge(e.hostsCache,t).then(y=>u([...y.statelessHosts].reverse(),y.getTimeout))}function $(e){const{hostsCache:t,logger:r,requester:n,requestsCache:s,responsesCache:a,timeouts:o,userAgent:c,hosts:h,queryParameters:m,headers:d}=e,u={hostsCache:t,logger:r,requester:n,requestsCache:s,responsesCache:a,timeouts:o,userAgent:c,headers:d,queryParameters:m,hosts:h.map(y=>Y(y)),read(y,I){const g=x(I,u.timeouts.read),w=()=>L(u,u.hosts.filter(f=>(f.accept&S.Read)!==0),y,g);if((g.cacheable!==void 0?g.cacheable:y.cacheable)!==!0)return w();const D={request:y,mappedRequestOptions:g,transporter:{queryParameters:u.queryParameters,headers:u.headers}};return u.responsesCache.get(D,()=>u.requestsCache.get(D,()=>u.requestsCache.set(D,w()).then(f=>Promise.all([u.requestsCache.delete(D),f]),f=>Promise.all([u.requestsCache.delete(D),Promise.reject(f)])).then(([f,b])=>b)),{miss:f=>u.responsesCache.set(D,f)})},write(y,I){return L(u,u.hosts.filter(g=>(g.accept&S.Write)!==0),y,x(I,u.timeouts.write))}};return u}function we(e){const t={value:`Algolia for JavaScript (${e})`,add(r){const n=`; ${r.segment}${r.version!==void 0?` (${r.version})`:""}`;return t.value.indexOf(n)===-1&&(t.value=`${t.value}${n}`),t}};return t}function xe(e){try{return JSON.parse(e.content)}catch(t){throw Te(t.message,e)}}function De({content:e,status:t},r){let n=e;try{n=JSON.parse(e).message}catch{}return Se(n,t,r)}function Oe(e,t,r){const n=Z(r);let s=`${e.protocol}://${e.url}/${t.charAt(0)==="/"?t.substr(1):t}`;return n.length&&(s+=`?${n}`),s}function Z(e){const t=r=>Object.prototype.toString.call(r)==="[object Object]"||Object.prototype.toString.call(r)==="[object Array]";return Object.keys(e).map(r=>l("%s=%s",r,t(e[r])?JSON.stringify(e[r]):e[r])).join("&")}function be(e,t){if(e.method===i.Get||e.data===void 0&&t.data===void 0)return;const r=Array.isArray(e.data)?e.data:{...e.data,...t.data};return JSON.stringify(r)}function je(e,t){const r={...e.headers,...t.headers},n={};return Object.keys(r).forEach(s=>{const a=r[s];n[s.toLowerCase()]=a}),n}function F(e){return e.map(t=>ee(t))}function ee(e){const t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return{...e,request:{...e.request,headers:{...e.request.headers,...t}}}}function Se(e,t,r){return{name:"ApiError",message:e,status:t,transporterStackTrace:r}}function Te(e,t){return{name:"DeserializationError",message:e,response:t}}function ke(e){return{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:e}}const Ne=e=>{const t=e.region||"us",r=z(R.WithinHeaders,e.appId,e.apiKey),n=$({hosts:[{url:`analytics.${t}.algolia.com`}],...e,headers:{...r.headers(),"content-type":"application/json",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}}),s=e.appId;return v({appId:s,transporter:n},e.methods)},Re=e=>(t,r)=>e.transporter.write({method:i.Post,path:"2/abtests",data:t},r),Ee=e=>(t,r)=>e.transporter.write({method:i.Delete,path:l("2/abtests/%s",t)},r),Ae=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("2/abtests/%s",t)},r),qe=e=>t=>e.transporter.read({method:i.Get,path:"2/abtests"},t),ve=e=>(t,r)=>e.transporter.write({method:i.Post,path:l("2/abtests/%s/stop",t)},r),Ce=e=>{const t=e.region||"us",r=z(R.WithinHeaders,e.appId,e.apiKey),n=$({hosts:[{url:`personalization.${t}.algolia.com`}],...e,headers:{...r.headers(),"content-type":"application/json",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}});return v({appId:e.appId,transporter:n},e.methods)},Ue=e=>t=>e.transporter.read({method:i.Get,path:"1/strategies/personalization"},t),Ge=e=>(t,r)=>e.transporter.write({method:i.Post,path:"1/strategies/personalization",data:t},r);function W(e){const t=r=>e.request(r).then(n=>{if(e.batch!==void 0&&e.batch(n.hits),!e.shouldStop(n))return n.cursor?t({cursor:n.cursor}):t({page:(r.page||0)+1})});return t({})}const ze=e=>{const t=e.appId,r=z(e.authMode!==void 0?e.authMode:R.WithinHeaders,t,e.apiKey),n=$({hosts:[{url:`${t}-dsn.algolia.net`,accept:S.Read},{url:`${t}.algolia.net`,accept:S.Write}].concat(he([{url:`${t}-1.algolianet.com`},{url:`${t}-2.algolianet.com`},{url:`${t}-3.algolianet.com`}])),...e,headers:{...r.headers(),"content-type":"application/x-www-form-urlencoded",...e.headers},queryParameters:{...r.queryParameters(),...e.queryParameters}});return v({transporter:n,appId:t,addAlgoliaAgent(a,o){n.userAgent.add({segment:a,version:o})},clearCache(){return Promise.all([n.requestsCache.clear(),n.responsesCache.clear()]).then(()=>{})}},e.methods)};function $e(){return{name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}}function We(){return{name:"ObjectNotFoundError",message:"Object not found."}}const He=e=>(t,r)=>{const{queryParameters:n,...s}=r||{},a={acl:t,...n!==void 0?{queryParameters:n}:{}},o=(c,h)=>T(m=>A(e)(c.key,h).catch(d=>{if(d.status!==404)throw d;return m()}));return p(e.transporter.write({method:i.Post,path:"1/keys",data:a},s),o)},Je=e=>(t,r,n)=>{const s=x(n);return s.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:i.Post,path:"1/clusters/mapping",data:{cluster:r}},s)},Me=e=>(t,r,n)=>e.transporter.write({method:i.Post,path:"1/clusters/mapping/batch",data:{users:t,cluster:r}},n),Be=e=>(t,r)=>p(e.transporter.write({method:i.Post,path:l("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!0,requests:{action:"addEntry",body:[]}}},r),(n,s)=>k(e)(n.taskID,s)),C=e=>(t,r,n)=>{const s=(a,o)=>q(e)(t,{methods:{waitTask:P}}).waitTask(a.taskID,o);return p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/operation",t),data:{operation:"copy",destination:r}},n),s)},_e=e=>(t,r,n)=>C(e)(t,r,{...n,scope:[_.Rules]}),Le=e=>(t,r,n)=>C(e)(t,r,{...n,scope:[_.Settings]}),Fe=e=>(t,r,n)=>C(e)(t,r,{...n,scope:[_.Synonyms]}),Qe=e=>(t,r)=>t.method===i.Get?e.transporter.read(t,r):e.transporter.write(t,r),Ke=e=>(t,r)=>{const n=(s,a)=>T(o=>A(e)(t,a).then(o).catch(c=>{if(c.status!==404)throw c}));return p(e.transporter.write({method:i.Delete,path:l("1/keys/%s",t)},r),n)},Xe=e=>(t,r,n)=>{const s=r.map(a=>({action:"deleteEntry",body:{objectID:a}}));return p(e.transporter.write({method:i.Post,path:l("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!1,requests:s}},n),(a,o)=>k(e)(a.taskID,o))},A=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/keys/%s",t)},r),te=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/task/%s",t.toString())},r),Ve=e=>t=>e.transporter.read({method:i.Get,path:"/1/dictionaries/*/settings"},t),Ye=e=>t=>e.transporter.read({method:i.Get,path:"1/logs"},t),Ze=e=>t=>e.transporter.read({method:i.Get,path:"1/clusters/mapping/top"},t),et=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/clusters/mapping/%s",t)},r),tt=e=>t=>{const{retrieveMappings:r,...n}=t||{};return r===!0&&(n.getClusters=!0),e.transporter.read({method:i.Get,path:"1/clusters/mapping/pending"},n)},q=e=>(t,r={})=>{const n={transporter:e.transporter,appId:e.appId,indexName:t};return v(n,r.methods)},rt=e=>t=>e.transporter.read({method:i.Get,path:"1/keys"},t),nt=e=>t=>e.transporter.read({method:i.Get,path:"1/clusters"},t),st=e=>t=>e.transporter.read({method:i.Get,path:"1/indexes"},t),at=e=>t=>e.transporter.read({method:i.Get,path:"1/clusters/mapping"},t),ot=e=>(t,r,n)=>{const s=(a,o)=>q(e)(t,{methods:{waitTask:P}}).waitTask(a.taskID,o);return p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/operation",t),data:{operation:"move",destination:r}},n),s)},it=e=>(t,r)=>{const n=(s,a)=>Promise.all(Object.keys(s.taskID).map(o=>q(e)(o,{methods:{waitTask:P}}).waitTask(s.taskID[o],a)));return p(e.transporter.write({method:i.Post,path:"1/indexes/*/batch",data:{requests:t}},r),n)},ct=e=>(t,r)=>e.transporter.read({method:i.Post,path:"1/indexes/*/objects",data:{requests:t}},r),Q=e=>(t,r)=>{const n=t.map(s=>({...s,params:Z(s.params||{})}));return e.transporter.read({method:i.Post,path:"1/indexes/*/queries",data:{requests:n},cacheable:!0},r)},K=e=>(t,r)=>Promise.all(t.map(n=>{const{facetName:s,facetQuery:a,...o}=n.params;return q(e)(n.indexName,{methods:{searchForFacetValues:ie}}).searchForFacetValues(s,a,{...r,...o})})),ut=e=>(t,r)=>{const n=x(r);return n.queryParameters["X-Algolia-User-ID"]=t,e.transporter.write({method:i.Delete,path:"1/clusters/mapping"},n)},dt=e=>(t,r,n)=>{const s=r.map(a=>({action:"addEntry",body:a}));return p(e.transporter.write({method:i.Post,path:l("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!0,requests:s}},n),(a,o)=>k(e)(a.taskID,o))},lt=e=>(t,r)=>{const n=(s,a)=>T(o=>A(e)(t,a).catch(c=>{if(c.status!==404)throw c;return o()}));return p(e.transporter.write({method:i.Post,path:l("1/keys/%s/restore",t)},r),n)},ht=e=>(t,r,n)=>{const s=r.map(a=>({action:"addEntry",body:a}));return p(e.transporter.write({method:i.Post,path:l("/1/dictionaries/%s/batch",t),data:{clearExistingDictionaryEntries:!1,requests:s}},n),(a,o)=>k(e)(a.taskID,o))},mt=e=>(t,r,n)=>e.transporter.read({method:i.Post,path:l("/1/dictionaries/%s/search",t),data:{query:r},cacheable:!0},n),pt=e=>(t,r)=>e.transporter.read({method:i.Post,path:"1/clusters/mapping/search",data:{query:t}},r),gt=e=>(t,r)=>p(e.transporter.write({method:i.Put,path:"/1/dictionaries/*/settings",data:t},r),(n,s)=>k(e)(n.taskID,s)),yt=e=>(t,r)=>{const n=Object.assign({},r),{queryParameters:s,...a}=r||{},o=s?{queryParameters:s}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"],h=d=>Object.keys(n).filter(u=>c.indexOf(u)!==-1).every(u=>{if(Array.isArray(d[u])&&Array.isArray(n[u])){const y=d[u];return y.length===n[u].length&&y.every((I,g)=>I===n[u][g])}else return d[u]===n[u]}),m=(d,u)=>T(y=>A(e)(t,u).then(I=>h(I)?Promise.resolve():y()));return p(e.transporter.write({method:i.Put,path:l("1/keys/%s",t),data:o},a),m)},k=e=>(t,r)=>T(n=>te(e)(t,r).then(s=>s.status!=="published"?n():void 0)),re=e=>(t,r)=>{const n=(s,a)=>P(e)(s.taskID,a);return p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/batch",e.indexName),data:{requests:t}},r),n)},ft=e=>t=>W({shouldStop:r=>r.cursor===void 0,...t,request:r=>e.transporter.read({method:i.Post,path:l("1/indexes/%s/browse",e.indexName),data:r},t)}),Pt=e=>t=>{const r={hitsPerPage:1e3,...t};return W({shouldStop:n=>n.hits.length<r.hitsPerPage,...r,request(n){return ce(e)("",{...r,...n}).then(s=>({...s,hits:s.hits.map(a=>(delete a._highlightResult,a))}))}})},It=e=>t=>{const r={hitsPerPage:1e3,...t};return W({shouldStop:n=>n.hits.length<r.hitsPerPage,...r,request(n){return ue(e)("",{...r,...n}).then(s=>({...s,hits:s.hits.map(a=>(delete a._highlightResult,a))}))}})},H=e=>(t,r,n)=>{const{batchSize:s,...a}=n||{},o={taskIDs:[],objectIDs:[]},c=(h=0)=>{const m=[];let d;for(d=h;d<t.length&&(m.push(t[d]),m.length!==(s||1e3));d++);return m.length===0?Promise.resolve(o):re(e)(m.map(u=>({action:r,body:u})),a).then(u=>(o.objectIDs=o.objectIDs.concat(u.objectIDs),o.taskIDs.push(u.taskID),d++,c(d)))};return p(c(),(h,m)=>Promise.all(h.taskIDs.map(d=>P(e)(d,m))))},wt=e=>t=>p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/clear",e.indexName)},t),(r,n)=>P(e)(r.taskID,n)),xt=e=>t=>{const{forwardToReplicas:r,...n}=t||{},s=x(n);return r&&(s.queryParameters.forwardToReplicas=1),p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/rules/clear",e.indexName)},s),(a,o)=>P(e)(a.taskID,o))},Dt=e=>t=>{const{forwardToReplicas:r,...n}=t||{},s=x(n);return r&&(s.queryParameters.forwardToReplicas=1),p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/synonyms/clear",e.indexName)},s),(a,o)=>P(e)(a.taskID,o))},Ot=e=>(t,r)=>p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/deleteByQuery",e.indexName),data:t},r),(n,s)=>P(e)(n.taskID,s)),bt=e=>t=>p(e.transporter.write({method:i.Delete,path:l("1/indexes/%s",e.indexName)},t),(r,n)=>P(e)(r.taskID,n)),jt=e=>(t,r)=>p(ne(e)([t],r).then(n=>({taskID:n.taskIDs[0]})),(n,s)=>P(e)(n.taskID,s)),ne=e=>(t,r)=>{const n=t.map(s=>({objectID:s}));return H(e)(n,j.DeleteObject,r)},St=e=>(t,r)=>{const{forwardToReplicas:n,...s}=r||{},a=x(s);return n&&(a.queryParameters.forwardToReplicas=1),p(e.transporter.write({method:i.Delete,path:l("1/indexes/%s/rules/%s",e.indexName,t)},a),(o,c)=>P(e)(o.taskID,c))},Tt=e=>(t,r)=>{const{forwardToReplicas:n,...s}=r||{},a=x(s);return n&&(a.queryParameters.forwardToReplicas=1),p(e.transporter.write({method:i.Delete,path:l("1/indexes/%s/synonyms/%s",e.indexName,t)},a),(o,c)=>P(e)(o.taskID,c))},kt=e=>t=>se(e)(t).then(()=>!0).catch(r=>{if(r.status!==404)throw r;return!1}),Nt=e=>(t,r,n)=>e.transporter.read({method:i.Post,path:l("1/answers/%s/prediction",e.indexName),data:{query:t,queryLanguages:r},cacheable:!0},n),Rt=e=>(t,r)=>{const{query:n,paginate:s,...a}=r||{};let o=0;const c=()=>oe(e)(n||"",{...a,page:o}).then(h=>{for(const[m,d]of Object.entries(h.hits))if(t(d))return{object:d,position:parseInt(m,10),page:o};if(o++,s===!1||o>=h.nbPages)throw We();return c()});return c()},Et=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/indexes/%s/%s",e.indexName,t)},r),At=()=>(e,t)=>{for(const[r,n]of Object.entries(e.hits))if(n.objectID===t)return parseInt(r,10);return-1},qt=e=>(t,r)=>{const{attributesToRetrieve:n,...s}=r||{},a=t.map(o=>({indexName:e.indexName,objectID:o,...n?{attributesToRetrieve:n}:{}}));return e.transporter.read({method:i.Post,path:"1/indexes/*/objects",data:{requests:a}},s)},vt=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/indexes/%s/rules/%s",e.indexName,t)},r),se=e=>t=>e.transporter.read({method:i.Get,path:l("1/indexes/%s/settings",e.indexName),data:{getVersion:2}},t),Ct=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/indexes/%s/synonyms/%s",e.indexName,t)},r),Ut=e=>(t,r)=>e.transporter.read({method:i.Get,path:l("1/indexes/%s/task/%s",e.indexName,t.toString())},r),Gt=e=>(t,r)=>p(ae(e)([t],r).then(n=>({objectID:n.objectIDs[0],taskID:n.taskIDs[0]})),(n,s)=>P(e)(n.taskID,s)),ae=e=>(t,r)=>{const{createIfNotExists:n,...s}=r||{},a=n?j.PartialUpdateObject:j.PartialUpdateObjectNoCreate;return H(e)(t,a,s)},zt=e=>(t,r)=>{const{safe:n,autoGenerateObjectIDIfNotExist:s,batchSize:a,...o}=r||{},c=(g,w,O,D)=>p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/operation",g),data:{operation:O,destination:w}},D),(f,b)=>P(e)(f.taskID,b)),h=Math.random().toString(36).substring(7),m=`${e.indexName}_tmp_${h}`,d=J({appId:e.appId,transporter:e.transporter,indexName:m});let u=[];const y=c(e.indexName,m,"copy",{...o,scope:["settings","synonyms","rules"]});u.push(y);const I=(n?y.wait(o):y).then(()=>{const g=d(t,{...o,autoGenerateObjectIDIfNotExist:s,batchSize:a});return u.push(g),n?g.wait(o):g}).then(()=>{const g=c(m,e.indexName,"move",o);return u.push(g),n?g.wait(o):g}).then(()=>Promise.all(u)).then(([g,w,O])=>({objectIDs:w.objectIDs,taskIDs:[g.taskID,...w.taskIDs,O.taskID]}));return p(I,(g,w)=>Promise.all(u.map(O=>O.wait(w))))},$t=e=>(t,r)=>M(e)(t,{...r,clearExistingRules:!0}),Wt=e=>(t,r)=>B(e)(t,{...r,clearExistingSynonyms:!0}),Ht=e=>(t,r)=>p(J(e)([t],r).then(n=>({objectID:n.objectIDs[0],taskID:n.taskIDs[0]})),(n,s)=>P(e)(n.taskID,s)),J=e=>(t,r)=>{const{autoGenerateObjectIDIfNotExist:n,...s}=r||{},a=n?j.AddObject:j.UpdateObject;if(a===j.UpdateObject){for(const o of t)if(o.objectID===void 0)return p(Promise.reject($e()))}return H(e)(t,a,s)},Jt=e=>(t,r)=>M(e)([t],r),M=e=>(t,r)=>{const{forwardToReplicas:n,clearExistingRules:s,...a}=r||{},o=x(a);return n&&(o.queryParameters.forwardToReplicas=1),s&&(o.queryParameters.clearExistingRules=1),p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/rules/batch",e.indexName),data:t},o),(c,h)=>P(e)(c.taskID,h))},Mt=e=>(t,r)=>B(e)([t],r),B=e=>(t,r)=>{const{forwardToReplicas:n,clearExistingSynonyms:s,replaceExistingSynonyms:a,...o}=r||{},c=x(o);return n&&(c.queryParameters.forwardToReplicas=1),(a||s)&&(c.queryParameters.replaceExistingSynonyms=1),p(e.transporter.write({method:i.Post,path:l("1/indexes/%s/synonyms/batch",e.indexName),data:t},c),(h,m)=>P(e)(h.taskID,m))},oe=e=>(t,r)=>e.transporter.read({method:i.Post,path:l("1/indexes/%s/query",e.indexName),data:{query:t},cacheable:!0},r),ie=e=>(t,r,n)=>e.transporter.read({method:i.Post,path:l("1/indexes/%s/facets/%s/query",e.indexName,t),data:{facetQuery:r},cacheable:!0},n),ce=e=>(t,r)=>e.transporter.read({method:i.Post,path:l("1/indexes/%s/rules/search",e.indexName),data:{query:t}},r),ue=e=>(t,r)=>e.transporter.read({method:i.Post,path:l("1/indexes/%s/synonyms/search",e.indexName),data:{query:t}},r),Bt=e=>(t,r)=>{const{forwardToReplicas:n,...s}=r||{},a=x(s);return n&&(a.queryParameters.forwardToReplicas=1),p(e.transporter.write({method:i.Put,path:l("1/indexes/%s/settings",e.indexName),data:t},a),(o,c)=>P(e)(o.taskID,c))},P=e=>(t,r)=>T(n=>Ut(e)(t,r).then(s=>s.status!=="published"?n():void 0)),j={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},_={Settings:"settings",Synonyms:"synonyms",Rules:"rules"};function _t(e){return{debug(t,r){return Promise.resolve()},info(t,r){return Promise.resolve()},error(t,r){return console.error(t,r),Promise.resolve()}}}function Lt(){return{send(e){return new Promise(t=>{const r=new XMLHttpRequest;r.open(e.method,e.url,!0),Object.keys(e.headers).forEach(o=>r.setRequestHeader(o,e.headers[o]));const n=(o,c)=>setTimeout(()=>{r.abort(),t({status:0,content:c,isTimedOut:!0})},o*1e3),s=n(e.connectTimeout,"Connection timeout");let a;r.onreadystatechange=()=>{r.readyState>r.OPENED&&a===void 0&&(clearTimeout(s),a=n(e.responseTimeout,"Socket timeout"))},r.onerror=()=>{r.status===0&&(clearTimeout(s),clearTimeout(a),t({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=()=>{clearTimeout(s),clearTimeout(a),t({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(e.data)})}}}function Ft(e,t,r){const n={appId:e,apiKey:t,timeouts:{connect:1,read:2,write:30},requester:Lt(),logger:_t(),responsesCache:U(),requestsCache:U({serializable:!1}),hostsCache:N({caches:[de({key:`${G}-${e}`}),U()]}),userAgent:we(G).add({segment:"Browser"})},s={...n,...r},a=()=>o=>Ce({...n,...o,methods:{getPersonalizationStrategy:Ue,setPersonalizationStrategy:Ge}});return ze({...s,methods:{search:Q,searchForFacetValues:K,multipleBatch:it,multipleGetObjects:ct,multipleQueries:Q,copyIndex:C,copySettings:Le,copySynonyms:Fe,copyRules:_e,moveIndex:ot,listIndices:st,getLogs:Ye,listClusters:nt,multipleSearchForFacetValues:K,getApiKey:A,addApiKey:He,listApiKeys:rt,updateApiKey:yt,deleteApiKey:Ke,restoreApiKey:lt,assignUserID:Je,assignUserIDs:Me,getUserID:et,searchUserIDs:pt,listUserIDs:at,getTopUserIDs:Ze,removeUserID:ut,hasPendingMappings:tt,clearDictionaryEntries:Be,deleteDictionaryEntries:Xe,getDictionarySettings:Ve,getAppTask:te,replaceDictionaryEntries:dt,saveDictionaryEntries:ht,searchDictionaryEntries:mt,setDictionarySettings:gt,waitAppTask:k,customRequest:Qe,initIndex:o=>c=>q(o)(c,{methods:{batch:re,delete:bt,findAnswers:Nt,getObject:Et,getObjects:qt,saveObject:Ht,saveObjects:J,search:oe,searchForFacetValues:ie,waitTask:P,setSettings:Bt,getSettings:se,partialUpdateObject:Gt,partialUpdateObjects:ae,deleteObject:jt,deleteObjects:ne,deleteBy:Ot,clearObjects:wt,browseObjects:ft,getObjectPosition:At,findObject:Rt,exists:kt,saveSynonym:Mt,saveSynonyms:B,getSynonym:Ct,searchSynonyms:ue,browseSynonyms:It,deleteSynonym:Tt,clearSynonyms:Dt,replaceAllObjects:zt,replaceAllSynonyms:Wt,searchRules:ce,getRule:vt,deleteRule:St,saveRule:Jt,saveRules:M,replaceAllRules:$t,browseRules:Pt,clearRules:xt}}),initAnalytics:()=>o=>Ne({...n,...o,methods:{addABTest:Re,getABTest:Ae,getABTests:qe,stopABTest:ve,deleteABTest:Ee}}),initPersonalization:a,initRecommendation:()=>o=>(s.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."),a()(o))}})}Ft.version=G;export{Ft as default};
