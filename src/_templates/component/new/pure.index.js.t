---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= name %>/index.js
unless_exists: true
---

import <%= name %> from './<%= name %><% if(subaction !== 'pure') { %><%= 'Container' %><%}%>';

export default <%= name %>;
