const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Bundle.link Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'BundleLink_Input',
	description: 'A series of links that provide context to this bundle.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		relation: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].'
		},
		_relation: {
			type: require('./element.input'),
			description: 'A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].'
		},
		url: {
			type: new GraphQLNonNull(UriScalar),
			description: 'The reference details for the link.'
		},
		_url: {
			type: require('./element.input'),
			description: 'The reference details for the link.'
		}
	})
});
