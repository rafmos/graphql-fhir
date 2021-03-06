const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ValueSet.compose.include Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ValueSetComposeInclude_Input',
	description: 'Include one or more codes from a code system.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		system: {
			type: new GraphQLNonNull(UriScalar),
			description: 'An absolute URI which is the code system from which the selected codes come from.'
		},
		_system: {
			type: require('./element.input'),
			description: 'An absolute URI which is the code system from which the selected codes come from.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the code system that the codes are selected from.'
		},
		_version: {
			type: require('./element.input'),
			description: 'The version of the code system that the codes are selected from.'
		},
		concept: {
			type: new GraphQLList(require('./valuesetcomposeincludeconcept.input')),
			description: 'Specifies a concept to be included or excluded.'
		},
		filter: {
			type: new GraphQLList(require('./valuesetcomposeincludefilter.input')),
			description: 'Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.'
		}
	})
});
