---
title: Contact 2
navorder: 3

# do not use contact or mailvar_ for top level variable names

eleventyComputed:
  eleventyNavigation:
    key: "{{ title | downcase | remove: ' ' }}"
    title: "{{ title | slice: 0, 16}}"
    order: "{{ navorder }}"

  formurl:
    prod: "{{ site.prod }}"
    corsprod: "{{ site.corsprod }}"
    corsurl: "{{ site.corsurl }}"
    formpath: "{{ site.formpath }}"

contact_email:
  title: "SEND MESSAGE"
  required: "name email message"
  target: contactResponse

contact_subnews:
  title: "SUBSCRIBE TO NEWSLETTER"
  required: "name email"
  name: "Your Name(s)"
  target: subnewsResponse

contact_unsubnews_internaltarget:
  title: "UNSUBSCRIBE FROM NEWSLETTER"
  required: "email"
# note there is no target, internal div generated that can be repeated but first one used
# this is different for first Contact page where an internal target div will not be 
# generated if a target div has already been ge
---

# {{ title }}

Same effect as for [Contact](/contact)

<!-- Delete next line to stop offering to show source code -->
{% include 'forms/source' %}

---
{% include 'forms/render-contact' contact:contact_email %}
<div id="{{contact_email.target}}"></div>

---

{% include 'forms/render-contact' contact:contact_subnews %}
<div id="{{contact_subnews.target}}"></div>

---

{% include 'forms/render-contact' contact:contact_unsubnews_internaltarget %}
