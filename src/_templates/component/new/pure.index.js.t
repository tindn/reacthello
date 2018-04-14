---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= Name %>/index.js
unless_exists: true
---

import <%= Name %> from './<%= Name %><% if(subaction !== 'pure') { %><%= 'Container' %><%}%>';

export default <%= Name %>;
