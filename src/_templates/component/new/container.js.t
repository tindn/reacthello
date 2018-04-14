---
to: components/<% if(locals.path) { %><%=h.inflection.capitalize(path) + '/' %><% } %><%= Name %>/<%= Name %>Container.js
unless_exists: true
---
import { connect } from 'react-redux';
import <%= Name %> from './<%= Name %>';

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
};

export default connect(mapStateToProps, mapDispatchToProps)(<%= Name %>);
