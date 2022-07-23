// ==UserScript==
// @name         让我康康你的标题正不正常啊
// @namespace    https://naizi.moe
// @version      1.0.2
// @description  一个反Unicode标题污染脚本，替换各种奇妙的英文字符，暴力模式下会移除标题中99.99%的emoji。
// @author       Neutralized
// @license      GPL-3.0
// @match        https://www.bilibili.com/video/*
// @homepage     https://github.com/Neutralization/Antimemetics-Division
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

function c(g) {
    let typ = 0;
    if (g.length == 1) {
        typ = 0;
    } else if (g.length == 2 && g.charAt(0) === g.charAt(0).toLowerCase()) {
        typ = -1;
    } else if (g.length == 2 && g.charAt(0) === g.charAt(0).toUpperCase()&& g.charAt(1) === g.charAt(1).toLowerCase()) {
        typ = 0;
    } else if (g.length == 2 && g.charAt(0) === g.charAt(0).toUpperCase()&& g.charAt(1) === g.charAt(1).toUpperCase()) {
        typ = 1;
    } else if ([...g.matchAll(/[A-Z]/g)].length == 0) {
        typ = -1;
    } else if ([...g.matchAll(/[A-Z]/g)].length < [...g.matchAll(/[a-z]/g)].length) {
        typ = 0;
    } else if ([...g.matchAll(/[A-Z]/g)].length >= [...g.matchAll(/[a-z]/g)].length) {
        typ = 1;
    } else {
        typ = 0;
    }
    return typ;
}

function r(group) {
    const count = {'0': 0, '1': 0, '-1': 0};
    const reg = [];
    for (let i = 0; i < group.length; i++) {
        count[c(group[i])] += 1;
    }
    for (let i = 0; i < group.length; i++) {
        const g = group[i];
        if (count[-1] >= group.length / 2) {
            reg.push(g.toLowerCase());
        } else if (count[1] >= group.length / 2) {
            reg.push(g.toUpperCase());
        } else {
            reg.push(g.charAt(0).toUpperCase() + g.slice(1).toLowerCase());
        }
    }
    return reg;
}

function n() {
    /* eslint-disable */
    const fiftyfive = {'0': ['ʘ', 'Ѳ', '⁰', '₀', '⓪', '⓿', '０', '𝟎', '𝟘', '𝟢', '𝟬', '𝟶', '🄀', '🄁', '🄌', '🯰'], '1': ['¹', '₁', '⅟', '①', '⑴', '⒈', '⓵', '❶', '➀', '➊', '１', '𝟏', '𝟙', '𝟣', '𝟭', '𝟷', '🄂', '🯱'], '2': ['²', 'ƻ', '₂', '②', '⑵', '⒉', '⓶', '❷', '➁', '➋', '２', '𝟐', '𝟚', '𝟤', '𝟮', '𝟸', '🄃', '🯲'], '3': ['³', '₃', '③', '⑶', '⒊', '⓷', '❸', '➂', '➌', '３', '𝟑', '𝟛', '𝟥', '𝟯', '𝟹', '🄄', '🯳'], '4': ['౺', '⁴', '₄', '④', '⑷', '⒋', '⓸', '❹', '➃', '➍', '４', '𝟒', '𝟜', '𝟦', '𝟰', '𝟺', '🄅', '🯴'], '5': ['⁵', '₅', '⑤', '⑸', '⒌', '⓹', '❺', '➄', '➎', '５', '𝟓', '𝟝', '𝟧', '𝟱', '𝟻', '🄆', '🯵'], '6': ['⁶', '₆', '⑥', '⑹', '⒍', '⓺', '❻', '➅', '➏', '６', '𝟔', '𝟞', '𝟨', '𝟲', '𝟼', '🄇', '🯶'], '7': ['⁷', '₇', '⑦', '⑺', '⒎', '⓻', '❼', '➆', '➐', '７', '𝟕', '𝟟', '𝟩', '𝟳', '𝟽', '🄈', '🯷'], '8': ['⁸', '₈', '⑧', '⑻', '⒏', '⓼', '❽', '➇', '➑', '８', '𝟖', '𝟠', '𝟪', '𝟴', '𝟾', '🄉', '🯸'], '9': ['⁹', '₉', '⑨', '⑼', '⒐', '⓽', '❾', '➈', '➒', 'Ⳋ', '９', '𝟗', '𝟡', '𝟫', '𝟵', '𝟿', '𝯿', '🄊', '🯹'], 'a': ['ª', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ā', 'ă', 'ą', 'ǎ', 'ǟ', 'ǻ', 'ȁ', 'ȃ', 'ȧ', 'ɐ', 'ɑ', 'Δ', 'ά', 'α', 'а', '੨', 'ค', 'ᗩ', 'ᥲ', 'ᵃ', 'ᵄ', 'ᵅ', 'ᶺ', 'ḁ', 'ẚ', 'ạ', 'ả', 'ấ', 'ầ', 'ẫ', 'ậ', 'ắ', 'ằ', 'ẳ', 'ặ', 'ᾱ', 'ₐ', '⒜', 'ⓐ', 'ⲁ', 'ａ', '𝐚', '𝑎', '𝒂', '𝒶', '𝓪', '𝔞', '𝕒', '𝖆', '𝖺', '𝗮', '𝘢', '𝙖', '𝚊', '𝛂', '𝛼', '𝜕', '𝜶', '𝝏', '𝝰', '𝞉', '𝞪', '𝟃', 'ล'], 'b': ['Ƅ', 'ɮ', 'β', 'в', '๒', 'ᗷ', 'ᵇ', 'ᵦ', 'ḃ', 'ḅ', 'ḇ', '⒝', 'ⓑ', '♭', 'ⲃ', 'ｂ', '𝐛', '𝑏', '𝒃', '𝒷', '𝓫', '𝔟', '𝕓', '𝖇', '𝖻', '𝗯', '𝘣', '𝙗', '𝚋'], 'c': ['¢', 'ç', 'ć', 'ĉ', 'ċ', 'č', 'ƈ', 'ɔ', 'ς', 'Ͼ', 'ᑕ', 'ᒼ', 'ᴄ', 'ᶜ', '℃', 'ⅽ', '⒞', 'ⓒ', 'ⲥ', 'ｃ', '𝐜', '𝑐', '𝒄', '𝒸', '𝓬', '𝔠', '𝕔', '𝖈', '𝖼', '𝗰', '𝘤', '𝙘', '𝚌'], 'd': ['ð', 'ď', 'đ', 'ɖ', 'ɗ', 'ժ', '๔', '໓', 'ᗪ', 'ᵈ', 'ᵭ', 'ḋ', 'ḍ', 'ḏ', 'ḑ', 'ḓ', '₫', 'ⅆ', 'ⅾ', '∂', '⒟', 'ⓓ', 'ⲇ', 'ｄ', '𝐝', '𝑑', '𝒅', '𝒹', '𝓭', '𝔡', '𝕕', '𝖉', '𝖽', '𝗱', '𝘥', '𝙙', '𝚍', '𝛛'], 'e': ['è', 'é', 'ê', 'ë', 'ē', 'ĕ', 'ė', 'ę', 'ě', 'Ɛ', 'ǝ', 'ȅ', 'ȇ', 'ȩ', 'ɘ', 'ə', 'ɛ', 'ɜ', 'ɞ', 'ʚ', 'έ', 'ε', '϶', 'є', 'ҽ', 'ᗴ', 'ᥱ', 'ᵉ', 'ᵋ', 'ḙ', 'ḛ', 'ẹ', 'ẻ', 'ẽ', 'ế', 'ề', 'ể', 'ệ', 'ₑ', 'ℇ', '℮', 'ℯ', 'ⅇ', '∉', '∌', '⒠', 'ⓔ', 'ⲉ', 'ｅ', '𝐞', '𝑒', '𝒆', '𝒺', '𝓮', '𝔢', '𝕖', '𝖊', '𝖾', '𝗲', '𝘦', '𝙚', '𝚎', '𝟈'], 'f': ['ƒ', 'ɟ', 'ʃ', 'ʄ', 'ϝ', 'ᖴ', 'ᶂ', 'ᶠ', 'ᶡ', 'ᶴ', 'ḟ', 'ẜ', 'ẝ', '⒡', 'ⓕ', 'ｆ', '𝐟', '𝑓', '𝒇', '𝒻', '𝓯', '𝔣', '𝕗', '𝖋', '𝖿', '𝗳', '𝘧', '𝙛', '𝚏', '🝡'], 'g': ['ĝ', 'ğ', 'ġ', 'ģ', 'ƃ', 'Ǥ', 'ǥ', 'ǧ', 'ǵ', 'ɓ', 'ɠ', 'ɡ', 'Ց', 'ق', 'გ', 'Ꮆ', 'ᵍ', 'ᶢ', 'ḡ', 'ℊ', '⒢', 'ⓖ', 'ﻮ', 'ｇ', '𝐠', '𝑔', '𝒈', '𝒼', '𝓰', '𝔤', '𝕘', '𝖌', '𝗀', '𝗴', '𝘨', '𝙜', '𝚐'], 'h': ['ĥ', 'ħ', 'ȟ', 'ɥ', 'ɦ', 'ɧ', 'ʰ', 'ʱ', 'н', 'ђ', 'ᕼ', 'ḣ', 'ḥ', 'ḧ', 'ḩ', 'ḫ', 'ẖ', 'ₕ', 'ℎ', 'ℏ', '⒣', 'ⓗ', 'ⲏ', 'ꜧ', 'ｈ', '𝐡', '𝑕', '𝒉', '𝒽', '𝓱', '𝔥', '𝕙', '𝖍', '𝗁', '𝗵', '𝘩', '𝙝', '𝚑'], 'i': ['ì', 'í', 'î', 'ï', 'ĩ', 'ī', 'ĭ', 'į', 'ı', 'Ɨ', 'ǐ', 'ȉ', 'ȋ', 'ɨ', 'ΐ', 'ί', 'ι', 'і', 'เ', 'Ꭵ', 'ᴉ', 'ᵎ', 'ᵢ', 'ᶤ', 'ḭ', 'ḯ', 'ỉ', 'ị', 'ὶ', 'ⁱ', 'ℹ', 'ⅈ', 'ⅰ', '⒤', 'ⓘ', 'ⲓ', '丨', 'ｉ', '𝐢', '𝑖', '𝒊', '𝒾', '𝓲', '𝔦', '𝕚', '𝖎', '𝗂', '𝗶', '𝘪', '𝙞', '𝚒'], 'j': ['ĵ', 'ǰ', 'ʲ', 'ј', 'ן', 'נ', 'ڶ', 'ᒎ', 'ⅉ', '⒥', 'ⓙ', 'ⱼ', 'ｊ', '𝐣', '𝑗', '𝒋', '𝒿', '𝓳', '𝔧', '𝕛', '𝖏', '𝗃', '𝗷', '𝘫', '𝙟', '𝚓'], 'k': ['ķ', 'ĸ', 'ƙ', 'ǩ', 'ʞ', 'κ', 'Ϗ', 'Ќ', 'к', 'қ', 'Ҝ', 'ᛕ', 'ᵏ', 'ḱ', 'ḳ', 'ḵ', 'ₖ', '⒦', 'ⓚ', 'ｋ', '𝐤', '𝑘', '𝒌', '𝓀', '𝓴', '𝔨', '𝕜', '𝖐', '𝗄', '𝗸', '𝘬', '𝙠', '𝚔', '𝞳'], 'l': ['ĺ', 'ļ', 'ľ', 'ŀ', 'Ł', 'ł', 'Ɩ', 'ɩ', 'ɭ', 'ʅ', 'ˡ', 'ᒪ', 'ᶅ', 'ᶥ', 'ᶩ', 'ḷ', 'ḻ', 'ḽ', 'ₗ', 'ℓ', 'ⅼ', '⒧', 'ⓛ', 'ㄥ', 'ｌ', '𝐥', '𝑙', '𝒍', '𝓁', '𝓵', '𝔩', '𝕝', '𝖑', '𝗅', '𝗹', '𝘭', '𝙡', '𝚕', '𝝞'], 'm': ['ɯ', 'ɱ', 'Μ', 'ϻ', 'м', 'ෆ', '๓', 'ო', 'ᗰ', 'ᵐ', 'ᵯ', 'ᶬ', 'ḿ', 'ṁ', 'ṃ', 'ₘ', 'ⅿ', '⒨', 'ⓜ', 'ⲙ', '㎥', 'ｍ', '𝐦', '𝑚', '𝒎', '𝓂', '𝓶', '𝔪', '𝕞', '𝖒', '𝗆', '𝗺', '𝘮', '𝙢', '𝚖'], 'n': ['ñ', 'ń', 'ņ', 'ň', 'ŉ', 'ŋ', 'ƞ', 'ǹ', 'Ƞ', 'ɲ', 'ɳ', 'ή', 'η', 'ռ', 'ח', 'ภ', 'ი', 'ᑎ', 'ᵑ', 'ᵰ', 'ᶮ', 'ᶯ', 'ṅ', 'ṇ', 'ṉ', 'ṋ', 'ὴ', 'ⁿ', 'ₙ', '⒩', 'ⓝ', 'ⲛ', '', 'ｎ', '𝐧', '𝑛', '𝒏', '𝓃', '𝓷', '𝔫', '𝕟', '𝖓', '𝗇', '𝗻', '𝘯', '𝙣', '𝚗', '𝜼', '𝝶', '𝞰', '𝟆'], 'o': ['º', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ō', 'ŏ', 'ő', 'ơ', 'ǒ', 'ǫ', 'ȍ', 'ȏ', 'ȯ', 'ɵ', 'Θ', 'Ο', 'ο', 'σ', 'φ', 'ό', '௦', '๏', '໐', 'ᗝ', 'ᵒ', 'ọ', 'ỏ', 'ố', 'ồ', 'Ỗ', 'ộ', 'ớ', 'ờ', 'ở', 'ₒ', 'ℴ', '∅', '⒪', 'ⓞ', '☼', 'ⲟ', 'ㄖ', 'ｏ', '𝐨', '𝑜', '𝒐', '𝓄', '𝓸', '𝔬', '𝕠', '𝖔', '𝗈', '𝗼', '𝘰', '𝙤', '𝚘', '𝛉', '𝛐', '𝛔', '𝛰', '𝜊', '𝜎', '𝜭', '𝜽', '𝝄', '𝝾', '𝞂', '𝞸'], 'p': ['Þ', 'þ', 'Ƥ', 'ρ', 'ק', 'ᑭ', 'ᵖ', 'ṕ', 'ṗ', 'ₚ', '⒫', 'ⓟ', 'ⲣ', 'ꝑ', 'ｐ', '𝐩', '𝑝', '𝒑', '𝓅', '𝓹', '𝔭', '𝕡', '𝖕', '𝗉', '𝗽', '𝘱', '𝙥', '𝚙', '𝞺'], 'q': ['Ǫ', 'Ɋ', 'Ω', 'ϙ', 'ᵠ', 'ợ', '⒬', 'ⓠ', 'ｑ', '𝐪', '𝑞', '𝒒', '𝓆', '𝓺', '𝔮', '𝕢', '𝖖', '𝗊', '𝗾', '𝘲', '𝙦', '𝚚'], 'r': ['ŕ', 'ŗ', 'ř', 'ȑ', 'ȓ', 'ɍ', 'ɹ', 'ɾ', 'ʳ', 'Γ', 'г', 'ᖇ', 'ᵣ', 'ṙ', 'ṛ', 'ṟ', 'ℽ', '⒭', 'ⓡ', 'ⲅ', 'Ꞅ', 'ꞅ', 'ｒ', '𝐫', '𝑟', '𝒓', '𝓇', '𝓻', '𝔯', '𝕣', '𝖗', '𝗋', '𝗿', '𝘳', '𝙧', '𝚛', '𝚪'], 's': ['ś', 'ŝ', 'ş', 'š', 'ſ', 'ș', 'ʂ', 'ˢ', 'ѕ', 'ร', 'ᔆ', 'ᔕ', 'ᶳ', 'ṡ', 'ṣ', 'ṧ', 'ₛ', '⒮', 'ⓢ', 'ｓ', '𝐬', '𝑠', '𝒔', '𝓈', '𝓼', '𝔰', '𝕤', '𝖘', '𝗌', '𝘀', '𝘴', '𝙨', '𝚜'], 't': ['ţ', 'ť', 'ƚ', 'ƫ', 'ț', 'ȶ', 'ɬ', 'ʇ', 'τ', 'Շ', 'է', 'ᵗ', 'ᵵ', 'ṫ', 'ṭ', 'ṯ', 'ṱ', 'ẗ', 'ₜ', '⒯', 'ⓣ', 'ⱦ', 'ⲧ', 'ｔ', '𝐭', '𝑡', '𝒕', '𝓉', '𝓽', '𝔱', '𝕥', '𝖙', '𝗍', '𝘁', '𝘵', '𝙩', '𝚝'], 'u': ['µ', 'ù', 'ú', 'û', 'ü', 'ũ', 'ū', 'ŭ', 'ů', 'ű', 'ų', 'ư', 'ǔ', 'ȕ', 'ȗ', 'ʊ', 'ʯ', 'υ', 'ย', 'ᑌ', 'ᵘ', 'ᵤ', 'ᵾ', 'ṳ', 'ṵ', 'ṷ', 'ụ', 'ủ', 'Ữ', '⒰', 'ⓤ', 'ꭟ', 'ｕ', '𝐮', '𝑢', '𝒖', '𝓊', '𝓾', '𝔲', '𝕦', '𝖚', '𝗎', '𝘂', '𝘶', '𝙪', '𝚞', '𝝁', '𝝒', '𝞄', '𝞾'], 'v': ['ʋ', 'ʌ', 'ν', 'ύ', 'ѵ', 'Ѷ', 'ש', 'ᐯ', 'ᵛ', 'ᵥ', 'ṽ', 'ṿ', 'ⅴ', '⒱', 'ⓥ', 'ｖ', '𝐯', '𝑣', '𝒗', '𝓋', '𝓿', '𝔳', '𝕧', '𝖛', '𝗏', '𝘃', '𝘷', '𝙫', '𝚟', '𝝊', '𝝼', '𝞶'], 'w': ['ŵ', 'ʍ', 'ʷ', 'Ψ', 'ω', 'ώ', 'ധ', 'ฬ', 'ᗯ', 'ᵚ', 'ᶭ', 'ẁ', 'ẃ', 'ẅ', 'ẇ', 'ẉ', 'ẘ', '⒲', 'ⓦ', 'ⱳ', '꒳', 'ｗ', '𝐰', '𝑤', '𝒘', '𝓌', '𝔀', '𝔴', '𝕨', '𝖜', '𝗐', '𝘄', '𝘸', '𝙬', '𝚠', '𝛚', '𝜔', '𝝎'], 'x': ['ˣ', 'χ', 'Ж', 'א', 'ẋ', 'ẍ', 'ₓ', 'ⅹ', '⒳', 'ⓧ', 'ｘ', '𝐱', '𝑥', '𝒙', '𝓍', '𝔁', '𝔵', '𝕩', '𝖝', '𝗑', '𝘅', '𝘹', '𝙭', '𝚡'], 'y': ['¥', 'ý', 'ÿ', 'ŷ', 'ƴ', 'ȳ', 'ɏ', 'ʎ', 'ʸ', 'γ', 'λ', 'Ў', 'у', 'ч', 'ү', 'ץ', 'ყ', 'Ꮍ', 'ᵞ', 'ᵧ', 'ẏ', 'ẙ', 'ỳ', 'ỵ', 'ỷ', 'ỹ', 'Ỿ', 'ỿ', '⒴', 'ⓨ', 'ⲩ', 'ｙ', '𝐲', '𝑦', '𝒚', '𝓎', '𝔂', '𝔶', '𝕪', '𝖞', '𝗒', '𝘆', '𝘺', '𝙮', '𝚢', '𝛄', '𝞬'], 'z': ['ź', 'ż', 'ž', 'Ƶ', 'ᶻ', 'ẑ', 'ẓ', 'ẕ', '⒵', 'ⓩ', 'ｚ', '𝐳', '𝑧', '𝒛', '𝓏', '𝔃', '𝔷', '𝕫', '𝖟', '𝗓', '𝘇', '𝘻', '𝙯', '𝚣'], 'A': ['À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ā', 'Ă', 'Ą', 'ƛ', 'Ǎ', 'Ȁ', 'Ȃ', 'Ȧ', 'Ⱥ', 'Ʌ', 'Α', 'Λ', 'А', 'Ꭺ', 'Ꭿ', 'Ꮧ', 'ᴀ', 'ᴁ', 'ᴬ', 'Ḁ', 'Ạ', 'Ả', 'Ấ', 'Ẫ', '₳', '∀', '∆', 'Ⓐ', 'Ɐ', 'Ⲁ', 'Ａ', '𝐀', '𝐴', '𝑨', '𝒜', '𝓐', '𝔄', '𝔸', '𝕬', '𝖠', '𝗔', '𝘈', '𝘼', '𝙰', '𝚨', '𝚲', '𝛢', '𝜜', '𝝖', '𝞐', '𝞓', '🄐', '🄰', '🅐', '🅰', '🇦'], 'B': ['ß', 'ʙ', 'Β', '฿', 'ᴮ', 'Ḃ', 'Ḅ', 'Ḇ', 'ℬ', 'Ⓑ', 'Ⲃ', 'Ｂ', '𝐁', '𝐵', '𝑩', '𝒝', '𝓑', '𝔅', '𝔹', '𝕭', '𝖡', '𝗕', '𝘉', '𝘽', '𝙱', '𝚩', '𝜝', '𝝗', '𝞑', '🄑', '🄱', '🅑', '🅱', '🇧'], 'C': ['Ç', 'Ć', 'Ĉ', 'Ċ', 'Č', 'Ꮯ', '₵', 'ℂ', 'ℭ', 'Ⅽ', 'Ⓒ', 'Ｃ', '𝐂', '𝐶', '𝑪', '𝒞', '𝓒', '𝕮', '𝖢', '𝗖', '𝘊', '𝘾', '𝙲', '🄒', '🄫', '🄲', '🅒', '🅲', '🇨'], 'D': ['Ð', 'Ď', 'Đ', 'Ɗ', 'ᴅ', 'ᴰ', 'Ḋ', 'Ḍ', 'Ḏ', 'Ḑ', 'Ḓ', 'ⅅ', 'Ⅾ', 'Ⓓ', 'Ⲇ', 'Ｄ', '𝐃', '𝐷', '𝑫', '𝒟', '𝓓', '𝔇', '𝔻', '𝕯', '𝖣', '𝗗', '𝘋', '𝘿', '𝙳', '🄓', '🄭', '🄳', '🅓', '🅳', '🇩'], 'E': ['È', 'É', 'Ê', 'Ë', 'Ē', 'Ĕ', 'Ė', 'Ę', 'Ě', 'Ǝ', 'Ȅ', 'Ȇ', 'Ȩ', 'Ɇ', 'ɇ', 'Ε', 'Ξ', 'Σ', 'ϵ', 'Ё', 'Ꮛ', 'ᴇ', 'ᴱ', 'ᴲ', 'Ḙ', 'Ḛ', 'Ẹ', 'Ẻ', 'Ẽ', 'Ễ', '€', 'ℰ', '∃', '∈', 'Ⓔ', 'Ⲉ', 'Ｅ', '𝐄', '𝐸', '𝑬', '𝒠', '𝓔', '𝔈', '𝔼', '𝕰', '𝖤', '𝗘', '𝘌', '𝙀', '𝙴', '𝚬', '𝚵', '𝛦', '𝜠', '𝜩', '𝝐', '𝞔', '𝞝', '🄔', '🄴', '🅔', '🅴', '🇪'], 'F': ['Ƒ', 'ғ', 'Ḟ', '℉', 'ℱ', 'Ⅎ', 'ⅎ', 'Ⓕ', 'ꜰ', 'Ｆ', '𝐅', '𝐹', '𝑭', '𝒡', '𝓕', '𝔉', '𝔽', '𝕱', '𝖥', '𝗙', '𝘍', '𝙁', '𝙵', '𝟊', '🄕', '🄵', '🅕', '🅵', '🇫'], 'G': ['Ĝ', 'Ğ', 'Ġ', 'Ģ', 'Ɠ', 'Ǧ', 'Ǵ', 'ɢ', 'ᴳ', 'Ḡ', '₲', '⅁', 'Ⓖ', 'Ｇ', '𝐆', '𝐺', '𝑮', '𝒢', '𝓖', '𝔊', '𝔾', '𝕲', '𝖦', '𝗚', '𝘎', '𝙂', '𝙶', '🄖', '🄶', '🅖', '🅶', '🇬'], 'H': ['Ĥ', 'Ħ', 'Ȟ', 'ʜ', 'Η', 'ᴴ', 'Ḣ', 'Ḥ', 'Ḧ', 'Ḩ', 'Ḫ', 'Ἠ', 'ℋ', 'ℌ', 'ℍ', 'Ⓗ', 'Ⱨ', '㏋', 'Ｈ', '𝐇', '𝐻', '𝑯', '𝒣', '𝓗', '𝕳', '𝖧', '𝗛', '𝘏', '𝙃', '𝙷', '𝚮', '𝛨', '𝞖', '𝞗', '🄗', '🄷', '🅗', '🅷', '🇭'], 'I': ['Ì', 'Í', 'Î', 'Ï', 'Ĩ', 'Ī', 'Ĭ', 'Į', 'İ', 'Ĳ', 'Ǐ', 'Ȉ', 'Ȋ', 'ɪ', 'Ί', 'Ι', 'ᴵ', 'ᶦ', 'Ḭ', 'Ỉ', 'Ị', 'ℐ', 'ℑ', 'Ⅰ', 'Ⓘ', 'Ⲓ', 'ꞁ', 'ꟾ', 'Ｉ', '𝐈', '𝐼', '𝑰', '𝒤', '𝓘', '𝕀', '𝕴', '𝖨', '𝗜', '𝘐', '𝙄', '𝙸', '𝚰', '𝜤', '𝞘', '🄘', '🄸', '🅘', '🅸', '🇮'], 'J': ['Ĵ', 'ʆ', 'ᴊ', 'ᴶ', 'Ⓙ', 'Ｊ', '𝐉', '𝐽', '𝑱', '𝒥', '𝓙', '𝔍', '𝕁', '𝕵', '𝖩', '𝗝', '𝘑', '𝙅', '𝙹', '🄙', '🄹', '🅙', '🅹', '🇯'], 'K': ['Ķ', 'Ƙ', 'Ǩ', 'Κ', 'Ꮶ', 'ᴋ', 'ᴷ', 'Ḱ', 'Ḳ', 'Ḵ', '₭', 'K', 'Ⓚ', 'Ⲕ', 'Ꝅ', 'Ｋ', '𝐊', '𝐾', '𝑲', '𝒦', '𝓚', '𝔎', '𝕂', '𝕶', '𝖪', '𝗞', '𝘒', '𝙆', '𝙺', '𝚱', '𝛫', '𝜥', '𝞙', '🄚', '🄺', '🅚', '🅺', '🇰'], 'L': ['Ĺ', 'Ļ', 'Ľ', 'Ŀ', 'ʟ', 'Ꮦ', 'Ꮮ', 'ᴸ', 'ᶫ', 'Ḷ', 'Ḻ', 'Ḽ', 'ℒ', '⅃', 'Ⅼ', 'Ⓛ', 'Ⱡ', 'Ｌ', '𝐋', '𝐿', '𝑳', '𝒧', '𝓛', '𝔏', '𝕃', '𝕷', '𝖫', '𝗟', '𝘓', '𝙇', '𝙻', '🄛', '🄻', '🅛', '🅻', '🇱'], 'M': ['ന', 'ጢ', 'Ꮇ', 'ᴍ', 'ᴹ', 'Ḿ', 'Ṁ', 'Ṃ', '₥', 'ℳ', 'Ⅿ', 'Ⓜ', 'Ɱ', 'Ｍ', '𝐌', '𝑀', '𝑴', '𝒨', '𝓜', '𝔐', '𝕄', '𝕸', '𝖬', '𝗠', '𝘔', '𝙈', '𝙼', '𝚳', '𝛭', '𝜧', '𝝡', '𝞛', '🄜', '🄼', '🅜', '🅼', '🇲'], 'N': ['Ñ', 'Ń', 'Ņ', 'Ň', 'Ɲ', 'Ǹ', 'ɴ', 'Ν', 'Π', 'п', 'ᴺ', 'ᶰ', 'Ṅ', 'Ṇ', 'Ṉ', 'Ṋ', '₦', 'ℕ', 'Ⓝ', 'Ⲛ', 'Ｎ', '𝐍', '𝑁', '𝑵', '𝒩', '𝓝', '𝔑', '𝕹', '𝖭', '𝗡', '𝘕', '𝙉', '𝙽', '𝚴', '𝜨', '𝝢', '𝝥', '𝞜', '🄝', '🄽', '🅝', '🅽', '🇳'], 'O': ['Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ō', 'Ŏ', 'Ő', 'Ơ', 'Ǒ', 'Ȍ', 'Ȏ', 'Ȯ', 'ට', 'Ꮎ', 'ᴏ', 'ᴑ', 'ᴼ', 'Ọ', 'Ỏ', 'Ồ', 'Ỡ', 'Ⓞ', 'Ⲟ', 'Ｏ', '𝐎', '𝑂', '𝑶', '𝒪', '𝓞', '𝔒', '𝕆', '𝕺', '𝖮', '𝗢', '𝘖', '𝙊', '𝙾', '𝜪', '𝝤', '𝞞', '𝞡', '🄞', '🄾', '🅞', '🅾', '🇴'], 'P': ['Ρ', 'ᴘ', 'ᴩ', 'ᴾ', 'Ṕ', 'Ṗ', '₱', 'ℙ', 'Ⓟ', 'Ｐ', '𝐏', '𝑃', '𝑷', '𝒫', '𝓟', '𝔓', '𝕻', '𝖯', '𝗣', '𝘗', '𝙋', '𝙿', '🄟', '🄿', '🅟', '🅿', '🆊', '🇵'], 'Q': ['ℚ', 'Ⓠ', 'Ｑ', '𝐐', '𝑄', '𝑸', '𝒬', '𝓠', '𝔔', '𝕼', '𝖰', '𝗤', '𝘘', '𝙌', '𝚀', '🄠', '🅀', '🅠', '🆀', '🇶'], 'R': ['Ŕ', 'Ŗ', 'Ř', 'Ȑ', 'Ȓ', 'Ɍ', 'ʀ', 'ʶ', 'я', 'Ꮢ', 'ᴚ', 'ᴿ', 'Ṙ', 'Ṛ', 'Ṟ', 'ℛ', 'ℜ', 'ℝ', '℞', '℟', 'Ⓡ', 'Ɽ', 'ꓤ', 'Ｒ', '𝐑', '𝑅', '𝑹', '𝒭', '𝓡', '𝕽', '𝖱', '𝗥', '𝘙', '𝙍', '𝚁', '𝜞', '🄡', '🄬', '🅁', '🅡', '🆁', '🇷'], 'S': ['$', 'Ś', 'Ŝ', 'Ş', 'Š', 'Ƨ', 'Ș', 'Ϛ', 'Ꮥ', 'Ṡ', 'Ṣ', 'Ⓢ', 'ꗟ', 'ꜱ', '＄', 'Ｓ', '𝐒', '𝑆', '𝑺', '𝒮', '𝓢', '𝔖', '𝕊', '𝕾', '𝖲', '𝗦', '𝘚', '𝙎', '𝚂', '𝜮', '🄢', '🄪', '🅂', '🅢', '🆂', '🇸'], 'T': ['Ţ', 'Ť', 'Ŧ', 'Ƭ', 'Ʈ', 'Ț', 'Ͳ', 'Τ', 'т', 'ᴛ', 'ᵀ', 'Ṫ', 'Ṭ', 'Ṯ', 'Ṱ', '₮', 'Ⓣ', 'Ⲧ', 'Ｔ', '𝐓', '𝑇', '𝑻', '𝒯', '𝓣', '𝔗', '𝕋', '𝕿', '𝖳', '𝗧', '𝘛', '𝙏', '𝚃', '𝚻', '𝜯', '𝞣', '🄣', '🅃', '🅣', '🆃', '🇹'], 'U': ['Ù', 'Ú', 'Û', 'Ü', 'Ũ', 'Ū', 'Ŭ', 'Ů', 'Ű', 'Ų', 'Ư', 'Ǔ', 'Ǘ', 'Ȕ', 'Ȗ', 'Ʉ', 'Ꮼ', 'ᴜ', 'ᵁ', 'ᶸ', 'Ṳ', 'Ṵ', 'Ṷ', 'Ụ', 'Ủ', '∪', 'Ⓤ', 'Ｕ', '𝐔', '𝑈', '𝑼', '𝒰', '𝓤', '𝔘', '𝕌', '𝖀', '𝖴', '𝗨', '𝘜', '𝙐', '𝚄', '𝞨', '🄤', '🅄', '🅤', '🆄', '🇺'], 'V': ['ᴠ', 'Ṽ', 'Ṿ', 'Ⅴ', '⋁', 'Ⓥ', 'ⱽ', 'Ｖ', '𝐕', '𝑉', '𝑽', '𝒱', '𝓥', '𝔙', '𝕍', '𝖁', '𝖵', '𝗩', '𝘝', '𝙑', '𝚅', '🄥', '🅅', '🅥', '🆅', '🇻', '🜄'], 'W': ['Ŵ', 'Ɯ', 'ш', 'Ꮃ', 'ᴡ', 'ᵂ', 'Ẁ', 'Ẃ', 'Ẅ', 'Ẇ', 'Ẉ', '₩', 'Ⓦ', 'Ⲱ', 'Ｗ', '𝐖', '𝑊', '𝑾', '𝒲', '𝓦', '𝔚', '𝕎', '𝖂', '𝖶', '𝗪', '𝘞', '𝙒', '𝚆', '𝜲', '𝞦', '🄦', '🅆', '🅦', '🆆', '🇼'], 'X': ['᙭', 'Ẋ', 'Ẍ', 'Ⅹ', 'Ⓧ', 'Ｘ', '𝐗', '𝑋', '𝑿', '𝒳', '𝓧', '𝔛', '𝕏', '𝖃', '𝖷', '𝗫', '𝘟', '𝙓', '𝚇', '🄧', '🅇', '🅧', '🆇', '🇽'], 'Y': ['Ý', 'Ŷ', 'Ÿ', 'Ƴ', 'Ȳ', 'Ɏ', 'ʏ', 'Υ', 'Ẏ', 'Ỳ', 'Ỵ', 'Ỷ', 'Ỹ', 'Ⓨ', 'Ⲩ', 'Ｙ', '𝐘', '𝑌', '𝒀', '𝒴', '𝓨', '𝔜', '𝕐', '𝖄', '𝖸', '𝗬', '𝘠', '𝙔', '𝚈', '𝚼', '𝝪', '𝞤', '🄨', '🅈', '🅨', '🆈', '🇾'], 'Z': ['Ź', 'Ż', 'Ž', 'ƶ', 'Ζ', 'ᙆ', 'ᴢ', 'Ẑ', 'Ẓ', 'Ẕ', '₴', 'ℤ', 'ℨ', 'Ⓩ', 'Ɀ', 'Ｚ', '𝐙', '𝑍', '𝒁', '𝒵', '𝓩', '𝖅', '𝖹', '𝗭', '𝘡', '𝙕', '𝚉', '𝞕', '🄩', '🅉', '🅩', '🆉', '🇿']};
    const classz = /[\u0000-\u001E\u007F-\u009F\u00AD\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0600-\u0605\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DD\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\u070F\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7-\u09C8\u09CB-\u09CD\u09D7\u09E2-\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47-\u0A48\u0A4B-\u0A4D\u0A51\u0A70-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47-\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62-\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55-\u0C56\u0C62-\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5-\u0CD6\u0CE2-\u0CE3\u0D00-\u0D03\u0D3B-\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62-\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2-\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18-\u0F19\u0F35\u0F37\u0F39\u0F3E-\u0F3F\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17B4-\u17D3\u17DD\u180B-\u180E\u1885-\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\u20D0-\u20F0\u231A-\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA-\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614-\u2615\u2618\u261D\u2620\u2622-\u2623\u2626\u262A\u262E-\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F-\u2660\u2663\u2665-\u2666\u2668\u267B\u267E-\u267F\u2692-\u2697\u2699\u269B-\u269C\u26A0-\u26A1\u26A7\u26AA-\u26AB\u26B0-\u26B1\u26BD-\u26BE\u26C4-\u26C5\u26C8\u26CE-\u26CF\u26D1\u26D3-\u26D4\u26E9-\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733-\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934-\u2935\u2B05-\u2B07\u2B1B-\u2B1C\u2B50\u2B55\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u3030\u303D\u3099-\u309A\u3297\u3299\uA66F-\uA672\uA674-\uA67D\uA69E-\uA69F\uA6F0-\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880-\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C-\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7-\uAAB8\uAABE-\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5-\uAAF6\uABE3-\uABEA\uABEC-\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFEFF\uFFF9-\uFFFB\u{101FD}\u{102E0}\u{10376}-\u{1037A}\u{10A01}-\u{10A03}\u{10A05}-\u{10A06}\u{10A0C}-\u{10A0F}\u{10A38}-\u{10A3A}\u{10A3F}\u{10AE5}-\u{10AE6}\u{10D24}-\u{10D27}\u{10EAB}-\u{10EAC}\u{10F46}-\u{10F50}\u{11000}-\u{11002}\u{11038}-\u{11046}\u{1107F}-\u{11082}\u{110B0}-\u{110BA}\u{110BD}\u{110CD}\u{11100}-\u{11102}\u{11127}-\u{11134}\u{11145}-\u{11146}\u{11173}\u{11180}-\u{11182}\u{111B3}-\u{111C0}\u{111C9}-\u{111CC}\u{111CE}-\u{111CF}\u{1122C}-\u{11237}\u{1123E}\u{112DF}-\u{112EA}\u{11300}-\u{11303}\u{1133B}-\u{1133C}\u{1133E}-\u{11344}\u{11347}-\u{11348}\u{1134B}-\u{1134D}\u{11357}\u{11362}-\u{11363}\u{11366}-\u{1136C}\u{11370}-\u{11374}\u{11435}-\u{11446}\u{1145E}\u{114B0}-\u{114C3}\u{115AF}-\u{115B5}\u{115B8}-\u{115C0}\u{115DC}-\u{115DD}\u{11630}-\u{11640}\u{116AB}-\u{116B7}\u{1171D}-\u{1172B}\u{1182C}-\u{1183A}\u{11930}-\u{11935}\u{11937}-\u{11938}\u{1193B}-\u{1193E}\u{11940}\u{11942}-\u{11943}\u{119D1}-\u{119D7}\u{119DA}-\u{119E0}\u{119E4}\u{11A01}-\u{11A0A}\u{11A33}-\u{11A39}\u{11A3B}-\u{11A3E}\u{11A47}\u{11A51}-\u{11A5B}\u{11A8A}-\u{11A99}\u{11C2F}-\u{11C36}\u{11C38}-\u{11C3F}\u{11C92}-\u{11CA7}\u{11CA9}-\u{11CB6}\u{11D31}-\u{11D36}\u{11D3A}\u{11D3C}-\u{11D3D}\u{11D3F}-\u{11D45}\u{11D47}\u{11D8A}-\u{11D8E}\u{11D90}-\u{11D91}\u{11D93}-\u{11D97}\u{11EF3}-\u{11EF6}\u{13430}-\u{13438}\u{16AF0}-\u{16AF4}\u{16B30}-\u{16B36}\u{16F4F}\u{16F51}-\u{16F87}\u{16F8F}-\u{16F92}\u{16FE4}\u{16FF0}-\u{16FF1}\u{1BC9D}-\u{1BC9E}\u{1BCA0}-\u{1BCA3}\u{1D165}-\u{1D169}\u{1D16D}-\u{1D182}\u{1D185}-\u{1D18B}\u{1D1AA}-\u{1D1AD}\u{1D242}-\u{1D244}\u{1DA00}-\u{1DA36}\u{1DA3B}-\u{1DA6C}\u{1DA75}\u{1DA84}\u{1DA9B}-\u{1DA9F}\u{1DAA1}-\u{1DAAF}\u{1E000}-\u{1E006}\u{1E008}-\u{1E018}\u{1E01B}-\u{1E021}\u{1E023}-\u{1E024}\u{1E026}-\u{1E02A}\u{1E130}-\u{1E136}\u{1E2EC}-\u{1E2EF}\u{1E8D0}-\u{1E8D6}\u{1E944}-\u{1E94A}\u{1F000}-\u{1F0FF}\u{1F14A}-\u{1F14F}\u{1F16A}-\u{1F16C}\u{1F18B}-\u{1F1A4}\u{1F1A6}-\u{1F1AC}\u{1F200}-\u{1F251}\u{1F300}-\u{1F77F}\u{1F7E0}-\u{1F7EB}\u{1F7F0}\u{1F800}-\u{1F9FF}\u{1FA70}-\u{1FAFF}\u{E0001}\u{E0020}-\u{E007F}\u{E0100}-\u{E01EF}]+/gu
    /* eslint-enable */
    const title = document.getElementsByClassName('video-title')[0];
    const entity = title.textContent.normalize('NFC').replace(/\uFE0F/g, '');
    console.log(entity);
    let nentity = entity;
    // const rentity = entity.split('');
    const m = new Map();
    for (const k in fiftyfive) {
        for (const c of fiftyfive[k]) {
            m.set(c, k);
        }
    }
    Array.from(m).forEach(([k, v]) => {
        nentity = nentity.replaceAll(k, v);
    });
    const group = [];
    const match = [...nentity.matchAll(/[a-zA-Z]+/g)];
    for (let i = 0; i < match.length; i++) {
        const text = match[i][0];
        if (entity.indexOf(text) != -1) {
            continue;
        } else {
            group.push(text);
        }
    }
    const reg = r(group);
    for (let i = 0; i < group.length; i++) {
        console.log(group[i], reg[i]);
        nentity = nentity.replace(group[i], reg[i]);
    }
    const force = true; // 如需保留emoji，请改成false
    if (force) {
        nentity = nentity.replace(classz, ' ');
        nentity = nentity.replace(/ +/g, ' ');
        nentity = nentity.trim();
    }
    console.log(nentity);
    title.textContent = nentity;
}

const debounce = (callback) => {
    let timer = null;
    return () => {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(() => {
            callback();
        }, 100);
    };
};

const observer = new MutationObserver(debounce(n));

const target = document.getElementById('viewbox_report');
target &&
  observer.observe(target, {attributes: true, childList: true, subtree: true});
