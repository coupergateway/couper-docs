export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){return {data:{"content-query-oY6ZVIroJU":{_path:"\u002Fconfiguration\u002Fblock\u002Fhealth",_draft:i,_partial:i,_locale:"en",_empty:i,title:j,description:"Defines a recurring health check request for its backend. Results can be obtained via the backends.\u003Clabel\u003E.health variables.\nChanges in health states and related requests will be logged. Default User-Agent will be Couper \u002F \u003Cversion\u003E health-check if not provided\nvia headers attribute. An unhealthy backend will return with a backend_unhealthy error.",excerpt:{type:k,children:[{type:a,tag:l,props:{id:m},children:[{type:b,value:j}]},{type:a,tag:n,props:{},children:[{type:b,value:o},{type:a,tag:e,props:{href:p},children:[{type:a,tag:c,props:{},children:[{type:b,value:q}]},{type:b,value:r}]},{type:b,value:s},{type:a,tag:c,props:{},children:[{type:b,value:t}]},{type:b,value:u},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:b,value:w},{type:a,tag:e,props:{href:x},children:[{type:a,tag:c,props:{},children:[{type:b,value:y}]}]},{type:b,value:z}]},{type:a,tag:A,props:{},children:[{type:a,tag:B,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:f,props:{align:d},children:[{type:b,value:C}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:D}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:E}]}]}]},{type:a,tag:F,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:g,props:{align:d},children:[{type:a,tag:c,props:{},children:[{type:b,value:G}]}]},{type:a,tag:g,props:{align:d},children:[{type:a,tag:e,props:{href:H},children:[{type:a,tag:c,props:{},children:[{type:b,value:I}]},{type:b,value:J}]}]},{type:a,tag:g,props:{align:d},children:[{type:b,value:K}]}]}]}]},{type:a,tag:L,props:{":values":M},children:[]}]},body:{type:k,children:[{type:a,tag:l,props:{id:m},children:[{type:b,value:j}]},{type:a,tag:n,props:{},children:[{type:b,value:o},{type:a,tag:e,props:{href:p},children:[{type:a,tag:c,props:{},children:[{type:b,value:q}]},{type:b,value:r}]},{type:b,value:s},{type:a,tag:c,props:{},children:[{type:b,value:t}]},{type:b,value:u},{type:a,tag:c,props:{},children:[{type:b,value:v}]},{type:b,value:w},{type:a,tag:e,props:{href:x},children:[{type:a,tag:c,props:{},children:[{type:b,value:y}]}]},{type:b,value:z}]},{type:a,tag:A,props:{},children:[{type:a,tag:B,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:f,props:{align:d},children:[{type:b,value:C}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:D}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:E}]}]}]},{type:a,tag:F,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:g,props:{align:d},children:[{type:a,tag:c,props:{},children:[{type:b,value:G}]}]},{type:a,tag:g,props:{align:d},children:[{type:a,tag:e,props:{href:H},children:[{type:a,tag:c,props:{},children:[{type:b,value:I}]},{type:b,value:J}]}]},{type:a,tag:g,props:{align:d},children:[{type:b,value:K}]}]}]}]},{type:a,tag:L,props:{":values":M},children:[]}],toc:{title:"",searchDepth:N,depth:N,links:[]}},_type:"markdown",_id:"content:2.configuration:4.block:health.md",_source:"content",_file:"2.configuration\u002F4.block\u002Fhealth.md",_extension:"md"}},prerenderedAt:void 0}}("element","text","code-inline","left","a","th","td","tr",false,"Health","root","h1","health","p","Defines a recurring health check request for its backend. Results can be obtained via the ","\u002Fconfiguration\u002Fvariables#backends","backends.\u003Clabel\u003E.health"," variables",".\nChanges in health states and related requests will be logged. Default User-Agent will be ","Couper \u002F \u003Cversion\u003E health-check"," if not provided\nvia ","headers"," attribute. An unhealthy backend will return with a ","\u002Fconfiguration\u002Ferror-handling#api-error-types","backend_unhealthy"," error.","table","thead","Block name","Context","Label","tbody","beta_health","\u002Fconfiguration\u002Fblock\u002Fbackend","backend"," block","no label","attributes","[{\"default\":\"[200, 204, 301]\",\"description\":\"one of wanted response status codes\",\"name\":\"expected_status\",\"type\":\"tuple (int)\"},{\"default\":\"\",\"description\":\"text which the response body must contain\",\"name\":\"expected_text\",\"type\":\"string\"},{\"default\":\"2\",\"description\":\"failed checks needed to consider backend unhealthy\",\"name\":\"failure_threshold\",\"type\":\"number\"},{\"default\":\"\",\"description\":\"request headers\",\"name\":\"headers\",\"type\":\"object\"},{\"default\":\"\\\"1s\\\"\",\"description\":\"time interval for recheck\",\"name\":\"interval\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"URL path with query on backend host\",\"name\":\"path\",\"type\":\"string\"},{\"default\":\"\\\"1s\\\"\",\"description\":\"maximum allowed time limit which is\\tbounded by `interval`\",\"name\":\"timeout\",\"type\":\"string\"}]",2))