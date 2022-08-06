---
layout: default
title: Receitas do Dia
permalink: /home
sections:
  - banner.html
  - cards.md
  - blog.html
  - indicate.html
  - faq.html
  - you-know.html
---

{% for section in page.sections %}
  {% include {{ section }} %}
{% endfor %}