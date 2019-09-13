---
layout: page
title: Contato
permalink: /contact/

description: Oi, meu nome é João Gabriel mas pode me chamar de Gabu

image: /assets/img/logo.jpg
---

{%- assign social = site.social_links -%}

<br>
<br>
<br>
<div class="contact-div">  
  <a href="https://github.com/{{ social.github }}" title="{{ social.github }}" target="_blank">
    <svg class="svg-icon grey">
    <use xlink:href="{{ '/assets/minima-social-icons.svg#github' | relative_url }}"></use></svg></a>
  &nbsp; <a href="https://twitter.com/{{ social.twitter}}" title="{{ social.twitter}}" target="_blank">
    <svg class="svg-icon grey">
    <use xlink:href="{{ '/assets/minima-social-icons.svg#twitter' | relative_url }}"></use></svg></a>
  &nbsp; <a href="https://www.linkedin.com/in/{{ social.linkedin}}" title="{{ social.linkedin}}" target="_blank">
    <svg class="svg-icon grey">
    <use xlink:href="{{ '/assets/minima-social-icons.svg#linkedin' | relative_url }}"></use></svg></a>
  <br><a href="mailto:{{site.email}}">{{site.email}}</a>
</div>
<br>
<br>
<br>
