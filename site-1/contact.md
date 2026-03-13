---
title: Contact
navorder: 2

eleventyComputed:
  eleventyNavigation:
    key: "{{ title | downcase | remove: ' ' }}"
    title: "{{ title | slice: 0, 16}}"
    order: "{{ navorder }}"

---

# {{ title }}


---
{%
  include 'forms/contact'
  title:"SEND MESSAGE"
  required:"name email message"
  target:"contactResponse"
%}
<div id="contactResponse"></div>

---
{%
  include 'forms/contact'
  title:"SUBSCRIBE TO NEWSLETTER"
  required:"name email"
  name:"Your Name(s)"
  target:"subnewsResponse"
%}
<div id="subnewsResponse"></div>

---
{%
  include 'forms/contact'
  title:"UNSUBSCRIBE FROM NEWSLETTER"
  required:"email"
%}
