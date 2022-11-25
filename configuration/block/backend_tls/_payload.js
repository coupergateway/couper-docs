export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:{"content-query-lBN44T4jlq":{_path:"\u002Fconfiguration\u002Fblock\u002Fbackend_tls",_draft:g,_partial:g,_locale:"en",_empty:g,title:k,description:"TLS settings for the related backend.",excerpt:{type:n,children:[{type:a,tag:o,props:{id:p},children:[{type:b,value:k}]},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:s}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:t}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:u}]}]}]},{type:a,tag:v,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:f,props:{align:d},children:[{type:a,tag:c,props:{},children:[{type:b,value:i}]}]},{type:a,tag:f,props:{align:d},children:[{type:a,tag:w,props:{href:x},children:[{type:b,value:y}]}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:z}]}]}]}]},{type:a,tag:j,props:{},children:[{type:b,value:A},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:b,value:C},{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:b,value:D},{type:a,tag:c,props:{},children:[{type:b,value:E}]},{type:b,value:F},{type:a,tag:c,props:{},children:[{type:b,value:G}]},{type:b,value:H}]},{type:a,tag:I,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:j,props:{},children:[{type:b,value:J},{type:a,tag:c,props:{},children:[{type:b,value:K}]},{type:b,value:L},{type:a,tag:c,props:{},children:[{type:b,value:M}]},{type:b,value:N},{type:a,tag:c,props:{},children:[{type:b,value:O}]},{type:b,value:P},{type:a,tag:c,props:{},children:[{type:b,value:Q}]},{type:b,value:R}]},{type:a,tag:S,props:{":values":T},children:[]}]},draft:g,body:{type:n,children:[{type:a,tag:o,props:{id:p},children:[{type:b,value:k}]},{type:a,tag:q,props:{},children:[{type:a,tag:r,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:e,props:{align:d},children:[{type:b,value:s}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:t}]},{type:a,tag:e,props:{align:d},children:[{type:b,value:u}]}]}]},{type:a,tag:v,props:{},children:[{type:a,tag:h,props:{},children:[{type:a,tag:f,props:{align:d},children:[{type:a,tag:c,props:{},children:[{type:b,value:i}]}]},{type:a,tag:f,props:{align:d},children:[{type:a,tag:w,props:{href:x},children:[{type:b,value:y}]}]},{type:a,tag:f,props:{align:d},children:[{type:b,value:z}]}]}]}]},{type:a,tag:j,props:{},children:[{type:b,value:A},{type:a,tag:c,props:{},children:[{type:b,value:B}]},{type:b,value:C},{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:b,value:D},{type:a,tag:c,props:{},children:[{type:b,value:E}]},{type:b,value:F},{type:a,tag:c,props:{},children:[{type:b,value:G}]},{type:b,value:H}]},{type:a,tag:I,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:j,props:{},children:[{type:b,value:J},{type:a,tag:c,props:{},children:[{type:b,value:K}]},{type:b,value:L},{type:a,tag:c,props:{},children:[{type:b,value:M}]},{type:b,value:N},{type:a,tag:c,props:{},children:[{type:b,value:O}]},{type:b,value:P},{type:a,tag:c,props:{},children:[{type:b,value:Q}]},{type:b,value:R}]},{type:a,tag:S,props:{":values":T},children:[]}],toc:{title:"",searchDepth:U,depth:U,links:[{id:l,depth:3,text:m}]}},_type:"markdown",_id:"content:2.configuration:4.block:backend_tls.md",_source:"content",_file:"2.configuration\u002F4.block\u002Fbackend_tls.md",_extension:"md"}},prerenderedAt:void 0}}("element","text","code-inline","left","th","td",false,"tr","tls","p","TLS (Backend)","mtls","mTLS","root","h1","tls-backend","table","thead","Block name","Context","Label","tbody","a","\u002Fconfiguration\u002Fblock\u002Fbackend","Backend Block","no","Couper has a command-line argument to add a ","ca-file"," to the backend CA-Pool for all backends.\nHowever, this "," block allows a more specific pool configuration per backend if the ","server_ca_certificate"," or\n","server_ca_certificate_file"," is provided.","h3","Additionally the ","client_certificate","(or ","client_certificate_file",") and ","client_private_key"," (or ","client_private_key_file",")\nattributes allow the backend to present certificate and key during a TLS handshake to an origin which requires them due to an mTLS setup.","attributes","[{\"default\":\"\",\"description\":\"Public part of the client certificate in DER or PEM format. Mutually exclusive with `client_certificate_file`.\",\"name\":\"client_certificate\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"Reference to a file containing the public part of the client certificate file in DER or PEM format. Mutually exclusive with `client_certificate`.\",\"name\":\"client_certificate_file\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"Private part of the client certificate in DER or PEM format. Required to complete an mTLS handshake. Mutually exclusive with `client_private_key_file`.\",\"name\":\"client_private_key\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"Reference to a file containing the private part of the client certificate file in DER or PEM format. Required to complete an mTLS handshake. Mutually exclusive with `client_private_key`.\",\"name\":\"client_private_key_file\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"Public part of the certificate authority in DER or PEM format. Mutually exclusive with `server_ca_certificate_file`.\",\"name\":\"server_ca_certificate\",\"type\":\"string\"},{\"default\":\"\",\"description\":\"Reference to a file containing the public part of the certificate authority file in DER or PEM format. Mutually exclusive with `server_ca_certificate`.\",\"name\":\"server_ca_certificate_file\",\"type\":\"string\"}]",2))