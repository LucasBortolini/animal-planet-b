---
layout: default
title: Receitas do Dia
permalink: /home
sections:
  - banner.html
  - cards.md
  - blog.html
  - fourth.html
  - faq.html
  - sixth.html
---

{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}