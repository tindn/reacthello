---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= name %>/<%= name %>Container.js
unless_exists: true
---
import { connect } from 'react-redux';
import <%= name %> from './<%= name %>';

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
