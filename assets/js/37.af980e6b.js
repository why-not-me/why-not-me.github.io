(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{508:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Cookie 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器上。通常，它用于告知服务端两个请求是否来自同一浏览器，如保持用户的登录状态。因此服务器可借助 Cookie 来识别客户端的身份。")]),t._v(" "),s("h2",{attrs:{id:"服务器创建-cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器创建-cookie"}},[t._v("#")]),t._v(" 服务器创建 Cookie")]),t._v(" "),s("p",[t._v("当服务器收到 HTTP 请求时，服务器可以在响应头里面添加一个"),s("code",[t._v("Set-Cookie")]),t._v("选项。浏览器收到响应后通常会保存下 Cookie，之后对该服务器每一次请求中都通过"),s("code",[t._v("Cookie")]),t._v("请求头部将 Cookie 信息发送给服务器。另外，Cookie 的过期时间、域、路径、有效期、适用站点都可以根据需要来指定。")]),t._v(" "),s("p",[t._v("在 Node.js 中，使用 koa 框架，可以这样设置 Cookie")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set-Cookie'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type=ninja'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'language=javascript'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, Koa'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A simple Koa Server is running on port 3000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("这样，浏览器收到响应后，在后续对同一服务器的请求，都会携带上 Cookie，浏览器的 Cookie 头部会像下面这样：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("GET /sample_page.html HTTP/1.1\nHost: www.example.org\nCookie: "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ninja"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("javascript\n")])])]),s("h2",{attrs:{id:"cookie-生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-生命周期"}},[t._v("#")]),t._v(" Cookie 生命周期")]),t._v(" "),s("p",[t._v("如果服务器设置 Cookie 时，没有设定 Cookie 的有效期，那么这种 Cookie 就是个简单的会话 Cookie，当浏览器关闭后，就自动删除了。不过有的浏览器提供了恢复会话的功能，这样的浏览器，即使关闭了浏览器，下次再打开时，Cookie 会被浏览器自动恢复，这样就会导致 Cookie 的生命周期无限延长。")]),t._v(" "),s("p",[t._v("所以合适的做法，就是服务器设置 Cookie 时，最好指定过期时间（Expires）或者有效期（Max-Age）。这样的 Cookie 就存在时效性了。当设置 Cookie，指定过期时间（Expires）时，\b 设定的日期只与客户端有关，而不是服务端。")]),t._v(" "),s("h2",{attrs:{id:"secure、httponly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secure、httponly"}},[t._v("#")]),t._v(" Secure、HttpOnly")]),t._v(" "),s("p",[t._v("Cookie 被服务器发送时，可通过"),s("code",[t._v("Secure")]),t._v("属性和"),s("code",[t._v("HttpOnly")]),t._v("属性来保证安全性。")]),t._v(" "),s("p",[t._v("当服务器使用"),s("code",[t._v("Set-Cookie: type=ninja;Secure")]),t._v("来设置 Cookie 时，其实就是用"),s("code",[t._v("Secure")]),t._v("标记了 Cookie，表示 Cookie 只应该通过 HTTPS 协议来发送。不过即使用了"),s("code",[t._v("Secure")]),t._v("来标识 Cookie，Cookie 也不应该携带敏感信息，因为如果可以访问到客户端的硬盘，Cookie 自然也会被读取。")]),t._v(" "),s("p",[t._v("而"),s("code",[t._v("HttpOnly")]),t._v("这个属性，则是用来阻止 js 的"),s("code",[t._v("document.cookie")]),t._v("来读取 Cookie。也就是说，被"),s("code",[t._v("HttpOnly")]),t._v("标识的 Cookie 只会用于服务器。（其实也不太建议前端操作 Cookie）")]),t._v(" "),s("h2",{attrs:{id:"cookie-作用域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-作用域"}},[t._v("#")]),t._v(" Cookie 作用域")]),t._v(" "),s("p",[s("code",[t._v("Domain")]),t._v("和"),s("code",[t._v("Path")]),t._v("标识，定义了 Cookie 的作用域")]),t._v(" "),s("p",[t._v("比如"),s("code",[t._v("Set-Cookie: type=ninja;Secure;HttpOnly;Domain=example.com")]),t._v("，就表示该 Cookie 可以被"),s("code",[t._v("example.com")]),t._v("这个域名及其子域名（比如 "),s("code",[t._v("a.example.con")]),t._v("这样的）访问到。如果没有指定"),s("code",[t._v("Domain")]),t._v("属性，就默认为 HTTP 请求对应的 origin，且 origin 的子域名是不可以访问该 Cookie 的。")]),t._v(" "),s("p",[t._v("而"),s("code",[t._v("Path")]),t._v("则指定了主机下哪些路径可以接受 Cookie（该 URL 路径必须存在于请求 URL 中）。比如设置"),s("code",[t._v("Path=/docs")]),t._v("，那么"),s("code",[t._v("/docs/web")]),t._v("、"),s("code",[t._v("/docs/web/http")]),t._v("之类子路径也能访问到该 Cookie。")]),t._v(" "),s("h2",{attrs:{id:"samesite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" SameSite")]),t._v(" "),s("p",[s("code",[t._v("SameSite")]),t._v("是一个最新的属性，允许服务器指定某个 Cookie 在跨站请求时不会被转发，比如这样来设定 Cookie："),s("code",[t._v("Set-Cookie: type=ninja;Secure;HttpOnly;Domain=example.com;Path=/docs;SameSite=Strict")]),t._v("，就表示这个 Cookie 只在访问相同站点时发送 Cookie。")]),t._v(" "),s("p",[s("code",[t._v("SameSite")]),t._v("一共有三种值：")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("None")]),t._v("：浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。")]),t._v(" "),s("li",[s("code",[t._v("Strict")]),t._v("：浏览器只在访问相同站点时发送 cookie。")]),t._v(" "),s("li",[s("code",[t._v("Lax")]),t._v("：比"),s("code",[t._v("Strict")]),t._v("稍微宽松些，访问不同站点，大多数情况是不发送 cookie 的。但是如果是导航到不同站点的 get 请求，就会发送 cookie。导航到不同站点的 get 请求，只包括三种情况：链接（"),s("code",[t._v('<a href="..."></a>')]),t._v("）、预加载请求（"),s("code",[t._v('<link rel="prerender" href="..."/>')]),t._v("）、get 表单("),s("code",[t._v('<form method="GET" action="...">')]),t._v(")。")])]),t._v(" "),s("p",[s("code",[t._v("SameSite")]),t._v("主要用来预防 CSRF 攻击")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("Cookie 能用来标识用户身份，由服务器设置，下发给浏览器。通过多种属性，来提高 Cookie 的安全性。")])])}),[],!1,null,null,null);a.default=n.exports}}]);