/*
plus领11减10券
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#plus领11减10券
0 55 9,13,15,19 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, tag=plus领11减10券, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 55 9,13,15,19 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js,tag=plus领11减10券
===================================Surge================================
plus领11减10券 = type=cron,cronexp="0 55 9,13,15,19 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js
====================================小火箭=============================
plus领11减10券 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, cronexpr="0 55 9,13,15,19 * * *", timeout=3600, enable=true
 */
const $ = new Env('plus领11减10券');
const notify = $.isNode() ? require('./sendNotify') : '';
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxdbd8e=["\x6E\x6F\x64\x65\x2D\x66\x65\x74\x63\x68","","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x46\x6F\x72\x6D\x61\x74","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73","\x74\x65\x73\x74","\x6C\x65\x6E\x67\x74\x68","\x24\x31","\x73\x75\x62\x73\x74\x72","\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72","\x72\x65\x70\x6C\x61\x63\x65","\x28","\x29","\x30\x30","\u5E74","\u6708","\u65E5\x20","\x3A","\x2D","\x20","\x3A\x30\x30\x3A\x30\x30","\x30","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x0A\u300B\u300B\u300B\u300B\u300B\u300B\u6267\u884C\u65F6\u95F4\x3A\x20","\u300A\u300A\u300A\u300A\u300A\u300A","\x0A\x20\x30\u5143\u4E0B\u5355\u5730\u5740\uFF1A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x75\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x54\x4D\x43\x6C\x6B\x6E\x51","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x70\x6C\x75\x73\u9886\x31\x31\u51CF\x31\x30\u5238","\u9886\u53D6\u6210\u529F\uFF01","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x75\x62\x43\x6F\x64\x65\x4D\x73\x67","\u8D26\u53F7\x3A\u3010","\u3011\x20\x70\x6C\x75\x73\u9886\x31\x31\u51CF\x31\x30\u5238\x20","\x0A","\x74\x68\x65\x6E","\x6A\x73\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x6E\x65\x77\x42\x61\x62\x65\x6C\x41\x77\x61\x72\x64\x43\x6F\x6C\x6C\x65\x63\x74\x69\x6F\x6E","\x2A\x2F\x2A","\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x22\x20\x4E\x6F\x74\x20\x41\x3B\x42\x72\x61\x6E\x64\x22\x3B\x76\x3D\x22\x39\x39\x22\x2C\x20\x22\x43\x68\x72\x6F\x6D\x69\x75\x6D\x22\x3B\x76\x3D\x22\x39\x39\x22\x2C\x20\x22\x47\x6F\x6F\x67\x6C\x65\x20\x43\x68\x72\x6F\x6D\x65\x22\x3B\x76\x3D\x22\x39\x39\x22","\x3F\x30","\x22\x57\x69\x6E\x64\x6F\x77\x73\x22","\x65\x6D\x70\x74\x79","\x63\x6F\x72\x73","\x73\x61\x6D\x65\x2D\x73\x69\x74\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x73\x74\x72\x69\x63\x74\x2D\x6F\x72\x69\x67\x69\x6E\x2D\x77\x68\x65\x6E\x2D\x63\x72\x6F\x73\x73\x2D\x6F\x72\x69\x67\x69\x6E","\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x33\x75\x33\x44\x4A\x44\x51\x34\x38\x58\x4C\x72\x70\x54\x53\x74\x34\x59\x57\x4A\x6B\x62\x4D\x4A\x63\x48\x6B\x66\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x63\x65\x6E\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x72\x67\x73\x25\x32\x32\x25\x33\x41\x25\x32\x32\x6B\x65\x79\x25\x33\x44\x44\x45\x44\x31\x36\x32\x46\x36\x45\x38\x45\x41\x46\x46\x37\x44\x42\x41\x41\x43\x46\x42\x39\x39\x30\x33\x39\x43\x45\x31\x31\x31\x36\x34\x46\x43\x44\x34\x30\x44\x31\x36\x39\x38\x45\x46\x33\x42\x45\x37\x42\x37\x44\x45\x33\x37\x42\x46\x38\x46\x33\x44\x44\x39\x33\x34\x43\x41\x30\x31\x36\x41\x34\x44\x34\x34\x34\x44\x46\x43\x39\x44\x34\x32\x37\x43\x45\x41\x35\x35\x44\x32\x32\x37\x30\x35\x5F\x62\x69\x6E\x67\x6F\x25\x32\x43\x72\x6F\x6C\x65\x49\x64\x25\x33\x44\x44\x32\x44\x31\x46\x37\x34\x33\x37\x38\x39\x33\x37\x37\x36\x39\x42\x34\x37\x35\x42\x46\x31\x45\x41\x44\x45\x37\x33\x36\x37\x35\x5F\x62\x69\x6E\x67\x6F\x25\x32\x43\x73\x74\x72\x65\x6E\x67\x74\x68\x65\x6E\x4B\x65\x79\x25\x33\x44\x39\x39\x44\x41\x33\x30\x38\x33\x36\x31\x34\x36\x35\x34\x43\x46\x32\x42\x34\x31\x31\x39\x30\x36\x42\x46\x45\x35\x42\x33\x43\x41\x36\x32\x32\x31\x46\x36\x35\x41\x36\x44\x31\x45\x38\x37\x32\x36\x32\x38\x46\x44\x30\x44\x46\x35\x37\x36\x38\x36\x35\x41\x43\x36\x33\x35\x33\x34\x36\x44\x38\x34\x31\x35\x43\x42\x31\x36\x41\x32\x45\x32\x37\x36\x34\x43\x38\x43\x37\x39\x33\x41\x32\x38\x43\x42\x5F\x62\x69\x6E\x67\x6F\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6C\x61\x74\x66\x6F\x72\x6D\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x72\x67\x54\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x70\x65\x6E\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x61\x67\x65\x43\x6C\x69\x63\x6B\x4B\x65\x79\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x65\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x51\x4C\x59\x54\x56\x4C\x45\x32\x5A\x50\x4A\x4F\x49\x54\x5A\x43\x47\x41\x42\x44\x43\x36\x4B\x43\x4F\x34\x50\x48\x48\x5A\x4B\x48\x52\x43\x4F\x49\x43\x37\x50\x41\x34\x41\x48\x33\x56\x49\x37\x33\x4D\x4A\x4C\x43\x49\x35\x56\x47\x52\x42\x4C\x33\x4F\x5A\x55\x42\x4F\x4B\x51\x56\x57\x56\x57\x54\x49\x45\x49\x32\x42\x50\x48\x59\x37\x37\x32\x47\x42\x4B\x33\x42\x42\x59\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x70\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x35\x61\x38\x62\x38\x66\x65\x61\x64\x36\x61\x63\x32\x35\x30\x37\x31\x62\x35\x33\x39\x63\x37\x61\x66\x65\x30\x61\x65\x64\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x25\x32\x32\x25\x33\x41\x25\x32\x32\x62\x66\x39\x36\x61\x33\x63\x63\x31\x61\x30\x31\x39\x33\x31\x32\x35\x32\x62\x32\x64\x32\x64\x31\x63\x32\x63\x36\x31\x34\x32\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x35\x30\x61\x34\x64\x66\x61\x30\x2D\x35\x31\x66\x34\x2D\x34\x61\x66\x36\x2D\x35\x64\x63\x63\x2D\x66\x38\x32\x38\x36\x63\x38\x65\x62\x31\x63\x61\x2D\x31\x36\x34\x30\x38\x34\x30\x35\x35\x36\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x62\x25\x32\x32\x25\x33\x41\x25\x32\x32\x64\x53\x61\x79\x4F\x4D\x7A\x41\x7A\x33\x36\x33\x74\x6F\x30\x6D\x54\x33\x6D\x6C\x67\x6E\x41\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x69\x6C\x64\x41\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x32\x35\x33\x41\x25\x32\x35\x32\x46\x25\x32\x35\x32\x46\x70\x72\x6F\x64\x65\x76\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x25\x32\x35\x32\x46\x6D\x61\x6C\x6C\x25\x32\x35\x32\x46\x61\x63\x74\x69\x76\x65\x25\x32\x35\x32\x46\x33\x75\x33\x44\x4A\x44\x51\x34\x38\x58\x4C\x72\x70\x54\x53\x74\x34\x59\x57\x4A\x6B\x62\x4D\x4A\x63\x48\x6B\x66\x25\x32\x35\x32\x46\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C\x25\x32\x35\x33\x46\x63\x75\x25\x32\x35\x33\x44\x74\x72\x75\x65\x25\x32\x35\x32\x36\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65\x25\x32\x35\x33\x44\x6B\x6F\x6E\x67\x25\x32\x35\x32\x36\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D\x25\x32\x35\x33\x44\x6A\x69\x6E\x67\x66\x65\x6E\x25\x32\x35\x32\x36\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E\x25\x32\x35\x33\x44\x74\x5F\x32\x30\x31\x31\x36\x39\x32\x38\x30\x32\x5F\x25\x32\x35\x32\x36\x75\x74\x6D\x5F\x74\x65\x72\x6D\x25\x32\x35\x33\x44\x36\x37\x31\x31\x33\x37\x39\x34\x66\x31\x31\x36\x34\x61\x31\x30\x61\x62\x33\x63\x63\x37\x30\x63\x34\x64\x66\x31\x65\x61\x32\x61\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x41\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6C\x69\x65\x6E\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x73\x56\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x62\x72\x61\x6E\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6D\x6F\x64\x65\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6E\x65\x74\x77\x6F\x72\x6B\x54\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6A\x64\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x37\x36\x31\x36\x31\x31\x37\x31\x2E\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x33\x39\x30\x36\x33\x35\x31\x39\x37\x34\x37\x2E\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x2E\x31\x36\x34\x37\x39\x31\x38\x38\x34\x33\x2E\x31\x36\x34\x37\x39\x31\x38\x39\x35\x36\x2E\x33\x38\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x61\x67\x65\x43\x6C\x69\x63\x6B\x25\x32\x32\x25\x33\x41\x25\x32\x32\x42\x61\x62\x65\x6C\x5F\x43\x6F\x75\x70\x6F\x6E\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6F\x75\x70\x6F\x6E\x53\x6F\x75\x72\x63\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x6D\x61\x6E\x75\x61\x6C\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6F\x75\x70\x6F\x6E\x53\x6F\x75\x72\x63\x65\x44\x65\x74\x61\x69\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2D\x31\x30\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6E\x6E\x65\x6C\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x45\x39\x25\x38\x30\x25\x39\x41\x25\x45\x35\x25\x41\x34\x25\x41\x39\x25\x45\x35\x25\x41\x31\x25\x39\x34\x25\x45\x34\x25\x42\x43\x25\x39\x41\x25\x45\x35\x25\x39\x43\x25\x42\x41\x25\x32\x32\x25\x32\x43\x25\x32\x32\x62\x61\x74\x63\x68\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x34\x37\x33\x37\x34\x39\x31\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x68\x65\x61\x64\x41\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x36\x30\x35\x37\x31\x35\x65\x63\x35\x36\x30\x64\x36\x35\x30\x38\x66\x37\x34\x30\x33\x62\x39\x31\x62\x36\x37\x37\x64\x37\x39\x63\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x63\x65\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x54\x54\x54\x68\x35\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x73\x74\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x38\x33\x37\x39\x39\x39\x32\x38\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x73\x74\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x36\x34\x37\x39\x31\x39\x31\x37\x38\x30\x37\x33\x7E\x31\x37\x6E\x4E\x50\x78\x32\x6D\x48\x41\x44\x4D\x44\x46\x31\x62\x46\x6C\x69\x55\x44\x41\x78\x4D\x51\x25\x33\x44\x25\x33\x44\x2E\x52\x46\x70\x74\x56\x57\x6C\x45\x56\x57\x68\x58\x61\x45\x52\x59\x59\x42\x77\x69\x54\x56\x73\x37\x41\x54\x6F\x35\x4B\x68\x38\x77\x4C\x6B\x52\x41\x62\x6B\x35\x6D\x57\x56\x30\x6E\x55\x43\x35\x45\x45\x6A\x30\x78\x4D\x51\x77\x6A\x46\x42\x67\x52\x44\x31\x39\x76\x55\x53\x51\x61\x58\x44\x51\x32\x59\x78\x67\x41\x50\x67\x77\x52\x43\x77\x25\x33\x44\x25\x33\x44\x2E\x63\x34\x35\x37\x61\x65\x66\x64\x7E\x36\x25\x32\x43\x31\x7E\x32\x32\x41\x41\x42\x44\x41\x44\x44\x39\x46\x45\x37\x41\x44\x45\x30\x37\x45\x41\x42\x42\x46\x38\x38\x38\x45\x39\x36\x34\x42\x32\x44\x31\x45\x44\x43\x43\x43\x41\x7E\x31\x6A\x67\x67\x64\x36\x36\x7E\x43\x7E\x53\x68\x64\x42\x58\x78\x49\x4C\x61\x78\x4E\x56\x41\x68\x68\x7A\x65\x78\x78\x79\x64\x68\x31\x33\x41\x67\x45\x5A\x52\x78\x78\x46\x45\x68\x30\x54\x56\x51\x59\x59\x64\x48\x67\x64\x63\x33\x63\x64\x64\x77\x5A\x30\x48\x6B\x55\x64\x52\x42\x4D\x64\x45\x31\x45\x47\x48\x33\x5A\x35\x48\x48\x4A\x30\x48\x58\x4D\x47\x66\x68\x78\x45\x48\x45\x55\x54\x48\x52\x64\x52\x41\x52\x31\x33\x64\x78\x31\x79\x64\x42\x6C\x7A\x41\x57\x45\x64\x52\x52\x31\x46\x45\x78\x6B\x58\x56\x67\x4D\x63\x64\x6E\x59\x64\x63\x6E\x45\x5A\x64\x41\x52\x6D\x48\x45\x51\x64\x52\x52\x64\x6F\x48\x68\x4A\x46\x58\x6C\x77\x54\x43\x32\x34\x58\x56\x67\x49\x63\x64\x6E\x59\x64\x63\x6E\x45\x5A\x64\x48\x78\x39\x48\x46\x41\x64\x52\x52\x63\x5A\x45\x46\x51\x46\x48\x58\x64\x32\x48\x58\x5A\x78\x48\x6E\x5A\x68\x65\x68\x31\x51\x48\x55\x45\x58\x62\x78\x77\x54\x56\x30\x4E\x66\x45\x77\x38\x45\x48\x68\x4A\x43\x51\x78\x4D\x4C\x45\x77\x51\x44\x42\x67\x63\x49\x41\x51\x67\x41\x42\x41\x49\x4D\x42\x41\x41\x46\x43\x51\x67\x47\x45\x78\x6B\x58\x52\x56\x56\x56\x45\x67\x73\x54\x52\x55\x46\x42\x56\x46\x5A\x58\x52\x56\x63\x54\x48\x52\x64\x43\x56\x31\x45\x54\x43\x68\x4E\x58\x56\x30\x46\x42\x52\x30\x52\x45\x55\x52\x4D\x64\x45\x30\x56\x52\x58\x42\x49\x4C\x61\x77\x4D\x49\x48\x51\x51\x4D\x42\x42\x77\x41\x43\x42\x30\x47\x48\x51\x41\x5A\x41\x6D\x30\x64\x45\x6C\x74\x62\x45\x77\x38\x45\x48\x68\x4A\x53\x51\x78\x4D\x4C\x45\x31\x52\x52\x56\x41\x4D\x48\x56\x6C\x63\x41\x41\x31\x4D\x4E\x56\x46\x56\x58\x55\x51\x52\x53\x42\x77\x4A\x51\x43\x67\x42\x53\x41\x67\x4D\x43\x41\x6C\x45\x45\x42\x46\x5A\x56\x45\x68\x30\x54\x58\x30\x55\x58\x43\x42\x4A\x6D\x57\x56\x38\x43\x41\x78\x63\x5A\x45\x45\x51\x54\x43\x67\x41\x48\x42\x51\x49\x4D\x41\x77\x6B\x41\x42\x77\x6B\x42\x42\x67\x59\x5A\x45\x46\x70\x61\x45\x67\x73\x54\x55\x42\x63\x5A\x45\x46\x5A\x42\x55\x68\x4D\x4C\x45\x31\x46\x6D\x55\x30\x6C\x25\x32\x42\x66\x55\x74\x77\x53\x77\x59\x44\x41\x55\x52\x65\x41\x46\x78\x6C\x41\x6C\x68\x5A\x56\x56\x35\x77\x45\x68\x30\x54\x58\x30\x4D\x58\x43\x42\x4A\x32\x58\x31\x35\x57\x58\x56\x41\x56\x65\x31\x35\x53\x48\x68\x4D\x64\x45\x31\x74\x55\x52\x42\x49\x4C\x45\x6C\x49\x54\x48\x52\x64\x47\x55\x55\x49\x54\x43\x6D\x6F\x41\x41\x51\x30\x46\x48\x67\x45\x49\x41\x67\x46\x73\x48\x52\x64\x48\x58\x52\x49\x4C\x61\x78\x4E\x51\x45\x78\x6B\x58\x55\x78\x49\x64\x45\x6C\x41\x54\x48\x52\x64\x55\x45\x42\x77\x54\x55\x52\x4D\x64\x45\x31\x51\x58\x48\x68\x4A\x51\x45\x6D\x77\x64\x45\x31\x78\x61\x55\x78\x49\x4C\x45\x6C\x64\x58\x56\x31\x4E\x54\x56\x45\x52\x46\x45\x68\x30\x54\x55\x46\x38\x58\x43\x42\x4A\x45\x45\x68\x30\x54\x55\x6C\x77\x58\x43\x42\x4A\x47\x41\x78\x38\x46\x48\x77\x59\x58\x48\x68\x4A\x53\x56\x6D\x35\x48\x45\x77\x38\x58\x41\x67\x45\x54\x48\x42\x4E\x54\x56\x52\x63\x50\x45\x45\x4A\x51\x58\x6C\x56\x65\x58\x41\x67\x4E\x41\x51\x63\x49\x43\x51\x67\x44\x43\x52\x63\x5A\x45\x46\x31\x62\x45\x67\x74\x71\x41\x42\x6B\x4E\x41\x68\x77\x4A\x41\x47\x77\x64\x45\x31\x64\x5A\x58\x56\x63\x54\x43\x68\x4E\x51\x45\x78\x6B\x58\x58\x30\x4E\x57\x45\x67\x73\x54\x55\x42\x64\x49\x7E\x30\x68\x64\x6E\x6C\x39\x66\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6D\x69\x74\x65\x6D\x41\x64\x64\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x67\x65\x6F\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x6C\x6E\x67\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6C\x61\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x61\x64\x64\x72\x65\x73\x73\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6F\x73\x4C\x6E\x67\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6F\x73\x4C\x61\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6A\x64\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x6B\x6F\x6E\x67\x25\x37\x43\x74\x5F\x32\x30\x31\x31\x36\x39\x32\x38\x30\x32\x5F\x25\x37\x43\x6A\x69\x6E\x67\x66\x65\x6E\x25\x37\x43\x36\x37\x31\x31\x33\x37\x39\x34\x66\x31\x31\x36\x34\x61\x31\x30\x61\x62\x33\x63\x63\x37\x30\x63\x34\x64\x66\x31\x65\x61\x32\x61\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x6F\x63\x75\x73\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x6E\x6E\x65\x72\x41\x6E\x63\x68\x6F\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x2E\x30\x25\x32\x32\x25\x37\x44\x26\x73\x63\x72\x65\x65\x6E\x3D\x36\x34\x36\x2A\x39\x33\x36\x26\x63\x6C\x69\x65\x6E\x74\x3D\x77\x68\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x31\x2E\x30\x2E\x30\x26\x73\x69\x64\x3D\x26\x75\x75\x69\x64\x3D\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x33\x39\x30\x36\x33\x35\x31\x39\x37\x34\x37\x26\x61\x72\x65\x61\x3D","\x50\x4F\x53\x54","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const fetch=require(__Oxdbd8e[0x0]);let cookiesArr=[],cookie=__Oxdbd8e[0x1],message;if($[__Oxdbd8e[0x2]]()){Object[__Oxdbd8e[0x5]](jdCookieNode)[__Oxdbd8e[0x4]]((_0x7a0bx5)=>{cookiesArr[__Oxdbd8e[0x3]](jdCookieNode[_0x7a0bx5])});if(process[__Oxdbd8e[0x7]][__Oxdbd8e[0x6]]&& process[__Oxdbd8e[0x7]][__Oxdbd8e[0x6]]=== __Oxdbd8e[0x8]){console[__Oxdbd8e[0x9]]= ()=>{}}}else {cookiesArr= [$[__Oxdbd8e[0xc]](__Oxdbd8e[0xb]),$[__Oxdbd8e[0xc]](__Oxdbd8e[0xd]),...jsonParse($[__Oxdbd8e[0xc]](__Oxdbd8e[0x10])|| __Oxdbd8e[0x11])[__Oxdbd8e[0xf]]((_0x7a0bx5)=>{return _0x7a0bx5[__Oxdbd8e[0xe]]})][__Oxdbd8e[0xa]]((_0x7a0bx5)=>{return !!_0x7a0bx5})};Date[__Oxdbd8e[0x13]][__Oxdbd8e[0x12]]= function(_0x7a0bx6){var _0x7a0bx7={"\x4D\x2B":this[__Oxdbd8e[0x14]]()+ 1,"\x64\x2B":this[__Oxdbd8e[0x15]](),"\x68\x2B":this[__Oxdbd8e[0x16]](),"\x6D\x2B":this[__Oxdbd8e[0x17]](),"\x73\x2B":this[__Oxdbd8e[0x18]](),"\x53":this[__Oxdbd8e[0x19]]()};if(/(y+)/[__Oxdbd8e[0x1a]](_0x7a0bx6)){_0x7a0bx6= _0x7a0bx6[__Oxdbd8e[0x1f]](RegExp.$1,(this[__Oxdbd8e[0x1e]]()+ __Oxdbd8e[0x1])[__Oxdbd8e[0x1d]](4- RegExp[__Oxdbd8e[0x1c]][__Oxdbd8e[0x1b]]))};for(var _0x7a0bx8 in _0x7a0bx7){if( new RegExp(__Oxdbd8e[0x20]+ _0x7a0bx8+ __Oxdbd8e[0x21])[__Oxdbd8e[0x1a]](_0x7a0bx6)){_0x7a0bx6= _0x7a0bx6[__Oxdbd8e[0x1f]](RegExp.$1,(RegExp[__Oxdbd8e[0x1c]][__Oxdbd8e[0x1b]]== 1)?(_0x7a0bx7[_0x7a0bx8]):((__Oxdbd8e[0x22]+ _0x7a0bx7[_0x7a0bx8])[__Oxdbd8e[0x1d]]((__Oxdbd8e[0x1]+ _0x7a0bx7[_0x7a0bx8])[__Oxdbd8e[0x1b]])))}};return _0x7a0bx6};var date= new Date();function getCurrentDateTimeT(){var date= new Date();var _0x7a0bxb=date[__Oxdbd8e[0x1e]]();var _0x7a0bxc=date[__Oxdbd8e[0x14]]()+ 1;var _0x7a0bxd=date[__Oxdbd8e[0x15]]();var _0x7a0bxe=date[__Oxdbd8e[0x16]]();var _0x7a0bxf=date[__Oxdbd8e[0x17]]();var _0x7a0bx10=date[__Oxdbd8e[0x18]]();var _0x7a0bx11=date[__Oxdbd8e[0x19]]();return _0x7a0bxb+ __Oxdbd8e[0x23]+ formatZero(_0x7a0bxc)+ __Oxdbd8e[0x24]+ formatZero(_0x7a0bxd)+ __Oxdbd8e[0x25]+ formatZero(_0x7a0bxe)+ __Oxdbd8e[0x26]+ formatZero(_0x7a0bxf)+ __Oxdbd8e[0x26]+ formatZero(_0x7a0bx10)+ __Oxdbd8e[0x26]+ formatZero(_0x7a0bx11)}function getCurrentDateTimeZ(_0x7a0bxe){var date= new Date();var _0x7a0bxb=date[__Oxdbd8e[0x1e]]();var _0x7a0bxc=date[__Oxdbd8e[0x14]]()+ 1;var _0x7a0bxd=date[__Oxdbd8e[0x15]]();return _0x7a0bxb+ __Oxdbd8e[0x27]+ formatZero(_0x7a0bxc)+ __Oxdbd8e[0x27]+ formatZero(_0x7a0bxd)+ __Oxdbd8e[0x28]+ _0x7a0bxe+ __Oxdbd8e[0x29]}function formatZero(_0x7a0bx14){if(_0x7a0bx14>= 0&& _0x7a0bx14<= 9){return __Oxdbd8e[0x2a]+ _0x7a0bx14}else {return _0x7a0bx14}}function sleep(_0x7a0bx16){return  new Promise((_0x7a0bx17)=>{return setTimeout(_0x7a0bx17,_0x7a0bx16)})}!(async ()=>{if(!cookiesArr[0x0]){$[__Oxdbd8e[0x34]]($[__Oxdbd8e[0x2e]],__Oxdbd8e[0x32],__Oxdbd8e[0x33],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdbd8e[0x33]});return};let _0x7a0bx19=__Oxdbd8e[0x1];console[__Oxdbd8e[0x9]](__Oxdbd8e[0x35]+ getCurrentDateTimeT()+ __Oxdbd8e[0x36]);console[__Oxdbd8e[0x9]](__Oxdbd8e[0x37]);for(let _0x7a0bx1a=0;_0x7a0bx1a< cookiesArr[__Oxdbd8e[0x1b]];_0x7a0bx1a++){if(cookiesArr[_0x7a0bx1a]){cookie= cookiesArr[_0x7a0bx1a];$[__Oxdbd8e[0x38]]= decodeURIComponent(cookie[__Oxdbd8e[0x39]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxdbd8e[0x39]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxdbd8e[0x3a]]= _0x7a0bx1a+ 1;$[__Oxdbd8e[0x3b]]= true;$[__Oxdbd8e[0x3c]]= __Oxdbd8e[0x1];message= __Oxdbd8e[0x1];console[__Oxdbd8e[0x9]](`${__Oxdbd8e[0x3d]}${$[__Oxdbd8e[0x3a]]}${__Oxdbd8e[0x3e]}${$[__Oxdbd8e[0x3c]]|| $[__Oxdbd8e[0x38]]}${__Oxdbd8e[0x3f]}`);if(!$[__Oxdbd8e[0x3b]]){$[__Oxdbd8e[0x34]]($[__Oxdbd8e[0x2e]],`${__Oxdbd8e[0x40]}`,`${__Oxdbd8e[0x41]}${$[__Oxdbd8e[0x3a]]}${__Oxdbd8e[0x28]}${$[__Oxdbd8e[0x3c]]|| $[__Oxdbd8e[0x38]]}${__Oxdbd8e[0x42]}`,{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxdbd8e[0x33]});if($[__Oxdbd8e[0x2]]()){ await notify[__Oxdbd8e[0x45]](`${__Oxdbd8e[0x1]}${$[__Oxdbd8e[0x2e]]}${__Oxdbd8e[0x43]}${$[__Oxdbd8e[0x38]]}${__Oxdbd8e[0x1]}`,`${__Oxdbd8e[0x41]}${$[__Oxdbd8e[0x3a]]}${__Oxdbd8e[0x28]}${$[__Oxdbd8e[0x38]]}${__Oxdbd8e[0x44]}`)};continue};try{ await fetch(__Oxdbd8e[0x4f],{"\x68\x65\x61\x64\x65\x72\x73":{"\x61\x63\x63\x65\x70\x74":__Oxdbd8e[0x50],"\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65":__Oxdbd8e[0x51],"\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65":__Oxdbd8e[0x52],"\x73\x65\x63\x2D\x63\x68\x2D\x75\x61":__Oxdbd8e[0x53],"\x73\x65\x63\x2D\x63\x68\x2D\x75\x61\x2D\x6D\x6F\x62\x69\x6C\x65":__Oxdbd8e[0x54],"\x73\x65\x63\x2D\x63\x68\x2D\x75\x61\x2D\x70\x6C\x61\x74\x66\x6F\x72\x6D":__Oxdbd8e[0x55],"\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x64\x65\x73\x74":__Oxdbd8e[0x56],"\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x6D\x6F\x64\x65":__Oxdbd8e[0x57],"\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x73\x69\x74\x65":__Oxdbd8e[0x58],"\x63\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxdbd8e[0x59],"\x52\x65\x66\x65\x72\x72\x65\x72\x2D\x50\x6F\x6C\x69\x63\x79":__Oxdbd8e[0x5a]},"\x62\x6F\x64\x79":__Oxdbd8e[0x5b],"\x6D\x65\x74\x68\x6F\x64":__Oxdbd8e[0x5c]})[__Oxdbd8e[0x4d]]((_0x7a0bx1c)=>{return _0x7a0bx1c[__Oxdbd8e[0x4e]]()})[__Oxdbd8e[0x4d]]((_0x7a0bx1b)=>{console[__Oxdbd8e[0x9]](__Oxdbd8e[0x46]);console[__Oxdbd8e[0x9]](_0x7a0bx1b);if(_0x7a0bx1b[__Oxdbd8e[0x49]][__Oxdbd8e[0x48]](__Oxdbd8e[0x47])!=  -1){_0x7a0bx19+= __Oxdbd8e[0x4a]+ $[__Oxdbd8e[0x38]]+ __Oxdbd8e[0x4b]+ _0x7a0bx1b[__Oxdbd8e[0x49]]+ __Oxdbd8e[0x4c]}})}catch(e){}}};if(_0x7a0bx19!= __Oxdbd8e[0x1]&& _0x7a0bx19!= null){notify[__Oxdbd8e[0x45]](__Oxdbd8e[0x46],_0x7a0bx19)}})()[__Oxdbd8e[0x31]]((_0x7a0bx18)=>{$[__Oxdbd8e[0x9]](__Oxdbd8e[0x1],`${__Oxdbd8e[0x2d]}${$[__Oxdbd8e[0x2e]]}${__Oxdbd8e[0x2f]}${_0x7a0bx18}${__Oxdbd8e[0x30]}`,__Oxdbd8e[0x1])})[__Oxdbd8e[0x2c]](()=>{$[__Oxdbd8e[0x2b]]()});(function(_0x7a0bx1d,_0x7a0bx1e,_0x7a0bx1f,_0x7a0bx20,_0x7a0bx21,_0x7a0bx8){_0x7a0bx8= __Oxdbd8e[0x5d];_0x7a0bx20= function(_0x7a0bx22){if( typeof alert!== _0x7a0bx8){alert(_0x7a0bx22)};if( typeof console!== _0x7a0bx8){console[__Oxdbd8e[0x9]](_0x7a0bx22)}};_0x7a0bx1f= function(_0x7a0bx23,_0x7a0bx1d){return _0x7a0bx23+ _0x7a0bx1d};_0x7a0bx21= _0x7a0bx1f(__Oxdbd8e[0x5e],_0x7a0bx1f(_0x7a0bx1f(__Oxdbd8e[0x5f],__Oxdbd8e[0x60]),__Oxdbd8e[0x61]));try{_0x7a0bx1d= __encode;if(!( typeof _0x7a0bx1d!== _0x7a0bx8&& _0x7a0bx1d=== _0x7a0bx1f(__Oxdbd8e[0x62],__Oxdbd8e[0x63]))){_0x7a0bx20(_0x7a0bx21)}}catch(e){_0x7a0bx20(_0x7a0bx21)}})({})
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}