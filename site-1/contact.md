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

Same effect as for [Contact 2](/contact2)

<!-- Delete next line to stop offering to show source code -->
{% include 'forms/source' %}


---
{%
  include 'forms/contact'
  title:"SEND MESSAGE"
  required:"name email message"
  target:"contactResponse"
%}
<div id="contactResponse"></div>
<!--
the title default is "SEND EMAIL", if not specified
the required default is "name email message agreed"
the name default is "Your Name"
default target div is an internal div with id #internalresponse, can also use "internal" for internal default
Same target div can be shared. If internal default is used then same element with same div id is repeated
-->

---
{%
  include 'forms/contact'
  title:"SUBSCRIBE TO NEWSLETTER"
  required:"name email"
  name:"Your Name(s)"
  target:"subnewsResponse"
%}
<div id="subnewsResponse"></div>
<!--
Overriding default for name from "Your Name" to "Your Name(s)"
-->

---
{%
  include 'forms/contact'
  title:"UNSUBSCRIBE FROM NEWSLETTER"
  required:"email"
%}
<!--
Note no target and div at end for response
Since a target has been previously defined uses this target and its div
If no previous target then uses default internal target for response
-->
