## Item #: Unicode Title Neutralization

There is no Antimemetics Division.

## Object Class: Keter

请勿反向使用本脚本，以免进一步的模因污染扩散，及可能造成的MK级世界末日情景。

## Special Containment Procedures:

Unicode 有十万甚至九万种奇技淫巧。

正确的文字需要通过正确的使用，才能传播正确的概念。

## Description:

这是个本质上为周刊 MAD 排行榜服务的脚本，因为 Adobe 的文本图层认不得这么多 Unicode 字符串，而我又不想每次每个都要手动改。

为了不另外写一个生成图像取代文本图层的脚本，以及生成图像一样要面对 Unicode 魑魅魍魉们，诞生了本项目。

脚本通过简单粗暴的查表方式对文本中的字符，主要是英文及数字，替换为“一般/正常”的字符内容。除此以外，会尝试将替换后的内容，进行简单的大小写同一化处理。

~~在MK级世界末日情景发生前会有油猴脚本直接替换网页内容~~

由于人类强大的创造力，已经有大量的同字不同解（θ表作0零还是O欧）的使用场景，对此脚本需要有大量的特殊处理操作，目前没有开发的计划。

已知的问题包括但不限于：

1. 一字多解 （常见于字符180°旋转比如 n u , 以及 t f l 花体字符混用）
2. 常被用作颜文字表形的字符表意 （比如 (ღ˘⌣˘ღ) 和 𝔂ღ𝓾 ）
3. 俄文内容被部分替换为英文字符 （需要进行字符同一语言判断）
4. 不能拆解组合字符 （特指 ㎞ (U+339E) 此类字符，需要额外指定字典匹配）
5. Emoji 以及其他特殊字符不在本脚本的处理目标之内

## Example: 

| Original                                                     | Neutralized                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| нαρρу ♡ᵕ                                                     | happy ♡ᵕ                                                     |
| 【混剪/治愈/AMV】ᴵ ˡⁱᵏᵉ ᵐʸˢᵉˡᶠ ᵇᵘᵗ ᴵ ᵖʳᵉᶠᵉʳ ˡⁱᵏᵉ ʸᵒᵘ         | 【混剪/治愈/AMV】i like myself but i prefer like you         |
| 【𝑀𝑒𝓇𝓇𝓎 𝒞𝒽𝓇𝒾𝓈𝓉𝓂𝒶𝓈 𝑀𝓇. 𝐿𝒶𝓌𝓇𝑒𝓃𝒸𝑒】献给14岁的真嗣与明日香       | 【Merry Christmas Mr. Lawrence】献给14岁的真嗣与明日香       |
| “ 𝓢𝓪𝓼𝓪𝓴𝓲 𝓗𝓪𝓲𝓼𝓮 ”                                             | “ Sasaki Haise ”                                             |
| Ⓑⓔⓣ ⓞⓝ ⓜⓔ                                                    | bet on me                                                    |
| ＡＵＢＲＥＹ                                                 | AUBREY                                                       |
| 夏 日 霓 虹 甜 心 / 𝑺𝒕𝒂𝒓𝒍𝒊𝒈𝒉𝒕 𝑨𝒏𝒈𝒆𝒍                          | 夏 日 霓 虹 甜 心 / Starlight Angel                          |
| 2021.8.7🌹𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚🌹钉崎野蔷薇                           | 2021.8.7🌹Happy Birthday🌹钉崎野蔷薇                           |
| 𝙎𝙝𝙖𝙙𝙤𝙬 𝙊𝙛 𝙏𝙝𝙚 𝙎𝙪𝙣/「黄昏/约尔」我需要你，仅仅是你！          | Shadow Of The Sun/「黄昏/约尔」我需要你，仅仅是你！          |
| 【𝑷𝒉𝒐𝒔𝒑𝒉𝒐𝒑𝒉𝒚𝒍𝒍𝒊𝒕𝒆＆𝑨𝒏𝒕𝒂𝒓𝒄𝒕𝒊𝒄𝒊𝒕𝒆】磷叶与南极                  | 【Phosphophyllite＆Antarcticite】磷叶与南极                  |
| ᴵ ˡⁱᵏᵉ ʸᵒᵘ ᵇᵉᵗᵗᵉʳ ᵗʰᵃⁿ ʸᵉˢᵗᵉʳᵈᵃʸ  ᵃ ˡⁱᵗᵗˡᵉ ˡᵉˢˢ ᴹⁱⁿᵍ ᴰʸⁿᵃˢᵗʸ | i like you better than yesterday  a little less ming dynasty |
| [𝘽𝙚𝙨𝙩 𝙬𝙞𝙨𝙝𝙚𝙨 𝙩𝙤 𝙫𝙞𝙤𝙡𝙚𝙩 𝙚𝙫𝙚𝙧𝙜𝙖𝙧𝙙𝙚𝙣]                           | [best wishes to violet evergarden]                           |
| █𝕮𝖔𝖒𝖊 𝖇𝖊 ล 𝖕𝖔𝖗𝖓𝖔𝖌𝖗ล𝖕𝖍𝖊𝖗█                                     | █come be a pornographer█                                     |
| “𝒱𝒾𝑜𝓁𝑒𝓉𝐸𝓋𝑒𝓇𝑔𝒶𝓇𝒹𝑒𝓃”                                           | “Violetevergarden”                                           |
| 𝑭𝒂𝒍𝒍𝒊𝒏𝒈 𝑨𝒈𝒂𝒊                                                 | Falling Agai                                                 |
| 【𝐀𝐌𝐕/𝟔𝟎𝐅𝐏𝐒】𝒀𝒐𝒖'𝒓𝒆 𝒏𝒐𝒕 𝒂𝒍𝒐𝒏𝒆                                | 【amv/60fps】you're not alone                                |
| 【黑子的篮球】【全员欢乐向】DROPPED （ＫｎＢ）               | 【黑子的篮球】【全员欢乐向】DROPPED （KNB）                  |
| 【三堇】【 ＡＭＶ 】ENCHANTED  四月是你的谎言                | 【三堇】【 AMV 】ENCHANTED  四月是你的谎言                   |
| 【国家队/02/复古/蒸汽波】❤ᶠʳᵉqᵘᵉⁿᵗ ᵍʳᵉᵉᵗⁱⁿᵍˢ ᵃʳᵉ ᵃˡˢᵒ ˡᵒᵛᵉ❤  | 【国家队/02/复古/蒸汽波】❤frequent greetings are also love❤  |
| “𝕲𝖔 𝖎𝖓 𝖞𝖔𝖚𝖗 𝖍𝖊𝖆𝖗𝖙 𝖇𝖚𝖙 𝕴 𝖘𝖊𝖊 𝖒𝖞𝖘𝖊𝖑𝖋.”                         | “go in your heart but i see myself.”                         |
| ❤𝑵𝒐𝒓𝒎𝒂𝒍 𝑵𝒐 𝑴𝒐𝒓𝒆❤                                             | ❤Normal No More❤                                             |
| 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓣𝓸 𝓜𝔂 𝓓𝓪𝓻𝓴 𝓢𝓲𝓭𝓮                                      | Welcome To My Dark Side                                      |
| ［駿&おねがい］ˢᵉᵃᵖᵉᶜᵘˡⁱᵃʳ                                   | ［駿&おねがい］seapeculiar                                   |
| 「4K60fps」𝓝𝓸 𝓸𝓷𝓮 𝓵𝓲𝓴𝓮 𝔂𝓸𝓾                                   | 「4K60fps」no one like you                                   |
| 【奇蛋物语◆青沼宁瑠】𝕿𝖍𝖊𝖗𝖊𝖋𝖔𝖗𝖊  𝕴  𝕬𝖒                        | 【奇蛋物语◆青沼宁瑠】Therefore  I  Am                        |
| 【燃/庆生向】ℋ𝒶𝓅𝓅𝓎 𝒷𝒾𝓇𝓉𝒽𝒹𝒶𝓎!                                 | 【燃/庆生向】happy birthday!                                 |
| 𝒮𝑜 𝒻𝒶𝓇 𝒶𝓌𝒶𝓎 𝒻𝓇𝑜𝓂 𝓉𝒽𝑒 𝓈𝓉𝒶𝓇𝓉 𝓉𝑜 𝓉𝒽𝑒 𝑒𝓃𝒹                        | so far away from the start to the end                        |
| 【咒術迴戰】𝓮𝓷𝓭𝓵𝓮𝓼𝓼 𝓳𝓸𝓾𝓻𝓷𝓮𝔂 七海建人\|\|个人向\|燃向\|踩点   | 【咒術迴戰】endless journey 七海建人\|\|个人向\|燃向\|踩点   |
| ꜱᴄʜᴏᴏʟ ʀᴏᴏꜰᴛᴏᴘ                                               | SCHOOL ROOFTOP                                               |
| 高燃神曲【⚡฿ⱤɆ₳₭ł₦₲ ₦Ø₩⚡ 】，把你们都燃起来 ！               | 高燃神曲【⚡BREAKLNG NOW⚡ 】，把你们都燃起来 ！               |