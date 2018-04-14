---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= Name %>/<%= Name %>.js
unless_exists: true
---
import React from 'react';
import './<%= Name %>.css';

export default (props) => (
 <div/>
)
