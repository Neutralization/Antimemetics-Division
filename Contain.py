# -*- coding: utf-8 -*-
# There is no Antimemetics Division.

import json
import re
from typing import Counter


class Site(object):
    def __init__(self, entity):
        self.entity = entity
        self.r_entity = list(self.entity)
        self.FiftyFive = json.load(open("FiftyFive.json", "r", encoding="utf-8-sig"))

    def classify(self, text):
        if len(text) == 1:
            typ = 0
        elif len(text) == 2 and text[0].islower():
            typ = -1
        elif len(text) == 2 and text[0].isupper() and text[1].islower():
            typ = 0
        elif len(text) == 2 and text[0].isupper() and text[1].isupper():
            typ = 1
        elif len(re.findall(r"[A-Z]", text)) == 0:
            typ = -1
        elif len(re.findall(r"[a-z]", text)) > len(re.findall(r"[A-Z]", text)):
            typ = 0
        elif len(re.findall(r"[A-Z]", text)) >= len(re.findall(r"[a-z]", text)):
            typ = 1
        return typ

    def neutralize(self, pretty=True):
        for n, t in enumerate(self.entity):
            for k, v in self.FiftyFive.items():
                if t in v:
                    self.r_entity[n] = k
        self.r_entity = "".join(self.r_entity)

        if pretty:
            group = [
                g
                for g in re.findall(r"[a-zA-Z]+", self.r_entity)
                if g not in self.entity
            ]
            if Counter([self.classify(g) for g in group])[-1] >= len(group) / 2:
                reg = [g.lower() for g in group]
            elif Counter([self.classify(g) for g in group])[1] >= len(group) / 2:
                reg = [g.upper() for g in group]
            else:
                reg = [g.capitalize() if self.classify(g) != -1 else g for g in group]
            print(reg)
            for g, r in zip(group, reg):
                self.r_entity = self.r_entity.replace(g, r)

        print(f"{self.entity}\n{self.r_entity}")
        return self.r_entity


Site(entity="“ᴰᵒ ʸᵒᵘ ᴸⁱᵏᵉ ᴿᵃⁱⁿ” “ᴵ ᴾʳᵉᶠᵉʳ ʸᵒᵘ”").neutralize()
