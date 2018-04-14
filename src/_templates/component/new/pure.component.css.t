---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= Name %>/<%= Name %>.css
unless_exists: true
---