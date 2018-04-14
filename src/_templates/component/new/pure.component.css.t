---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= name %>/<%= name %>.css
unless_exists: true
---