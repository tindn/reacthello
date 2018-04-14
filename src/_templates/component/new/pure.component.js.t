---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= name %>/<%= name %>.js
unless_exists: true
---
import React from 'react';
import PropTypes from 'prop-types'
import './<%= name %>.css';

const <%= name %> = (props) => (
 <div/>
)

<%= name %>.propTypes = {};

export default <%= name %>;