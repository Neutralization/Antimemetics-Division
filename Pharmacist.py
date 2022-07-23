# -*- coding: utf-8 -*-

import re
from functools import reduce
from unicodedata import category, combining

SymbolsAndEmoticons = [
    "\\U0001F000-\\U0001F02F",  # Mahjong Tiles
    "\\U0001F030-\\U0001F09F",  # Domino Tiles
    "\\U0001F0A0-\\U0001F0FF",  # Playing Cards
    "\\U0001F300-\\U0001F5FF",  # Miscellaneous Symbols and Pictographs
    "\\U0001F600-\\U0001F64F",  # Emoticons
    "\\U0001F650-\\U0001F67F",  # Ornamental Dingbats
    "\\U0001F680-\\U0001F6FF",  # Transport and Map Symbols
    "\\U0001F700-\\U0001F77F",  # Alchemical Symbols
    "\\U0001F800-\\U0001F8FF",  # Supplemental Arrows-C
    "\\U0001F900-\\U0001F9FF",  # Supplemental Symbols and Pictographs
    "\\U0001FA70-\\U0001FAFF",  # Symbols and Pictographs Extended-A
    "\\U0001F14A-\\U0001F14F",  # Enclosed Alphanumeric Supplement
    "\\U0001F16A-\\U0001F16C",  # Enclosed Alphanumeric Supplement
    "\\U0001F18B-\\U0001F1A4",  # Enclosed Alphanumeric Supplement
    "\\U0001F1A6-\\U0001F1AC",  # Enclosed Alphanumeric Supplement
    "\\U0001F200-\\U0001F251",  # Enclosed Ideographic Supplement
    "\\U0001F7E0-\\U0001F7EB",  # Geometric Shapes Extended
    "\\U0001F7F0",  # Geometric Shapes Extended
]

# https://www.unicode.org/Public/14.0.0/ucd/emoji/emoji-data.txt
Emoji = [
    "\\u20E3",
    "\\u231A-\\u231B",
    "\\u2328",
    "\\u23CF",
    "\\u23E9-\\u23F3",
    "\\u23F8-\\u23FA",
    "\\u24C2",
    "\\u25AA-\\u25AB",
    "\\u25B6",
    "\\u25C0",
    "\\u25FB-\\u25FE",
    "\\u2600-\\u2604",
    "\\u260E",
    "\\u2611",
    "\\u2614-\\u2615",
    "\\u2618",
    "\\u261D",
    "\\u2620",
    "\\u2622-\\u2623",
    "\\u2626",
    "\\u262A",
    "\\u262E-\\u262F",
    "\\u2638-\\u263A",
    "\\u2640",
    "\\u2642",
    "\\u2648-\\u2653",
    "\\u265F-\\u2660",
    "\\u2663",
    "\\u2665-\\u2666",
    "\\u2668",
    "\\u267B",
    "\\u267E-\\u267F",
    "\\u2692-\\u2697",
    "\\u2699",
    "\\u269B-\\u269C",
    "\\u26A0-\\u26A1",
    "\\u26A7",
    "\\u26AA-\\u26AB",
    "\\u26B0-\\u26B1",
    "\\u26BD-\\u26BE",
    "\\u26C4-\\u26C5",
    "\\u26C8",
    "\\u26CE-\\u26CF",
    "\\u26D1",
    "\\u26D3-\\u26D4",
    "\\u26E9-\\u26EA",
    "\\u26F0-\\u26F5",
    "\\u26F7-\\u26FA",
    "\\u26FD",
    "\\u2702",
    "\\u2705",
    "\\u2708-\\u270D",
    "\\u270F",
    "\\u2712",
    "\\u2714",
    "\\u2716",
    "\\u271D",
    "\\u2721",
    "\\u2728",
    "\\u2733-\\u2734",
    "\\u2744",
    "\\u2747",
    "\\u274C",
    "\\u274E",
    "\\u2753-\\u2755",
    "\\u2757",
    "\\u2763-\\u2764",
    "\\u2795-\\u2797",
    "\\u27A1",
    "\\u27B0",
    "\\u27BF",
    "\\u2934-\\u2935",
    "\\u2B05-\\u2B07",
    "\\u2B1B-\\u2B1C",
    "\\u2B50",
    "\\u2B55",
    "\\u3030",
    "\\u303D",
    "\\u3297",
    "\\u3299",
    "\\uFE0F",
]

Extra = reduce(str.__add__, SymbolsAndEmoticons + Emoji)

Capsule = [
    x
    for x in range(int("0xF0000", 16))
    if (
        re.match(f"[{Extra}]", chr(x))
        or category(chr(x)) in ("Cc", "Cf", "Mc", "Me", "Mn")
        or combining(chr(x)) != 0
    )
]


def Medicine(unicode_list):
    todict = {}
    s = 0
    for i in range(1, len(unicode_list)):
        if unicode_list[i] - unicode_list[s] == i - s:
            todict[unicode_list[s]] = (
                todict.get(unicode_list[s]) + 1
                if todict.get(unicode_list[s]) is not None
                else 1
            )
        else:
            s = i
            todict[unicode_list[s]] = 1
    toregexp = []
    for k, v in todict.items():
        prefix = "\\u" if len(hex(k)[2:]) < 5 else "\\U000"
        if v == 1:
            toregexp.append(f"{prefix}{hex(k)[2:].upper():0>4}\n")
        else:
            toregexp.append(
                f"{prefix}{hex(k)[2:].upper():0>4}-{prefix}{hex(k+v-1)[2:].upper():0>4}\n"
            )
    return toregexp


with open("Class-Z.txt", "w", encoding="utf-8-sig") as f:
    f.writelines(Medicine(Capsule))
