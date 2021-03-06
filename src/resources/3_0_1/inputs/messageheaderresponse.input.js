const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary MessageHeader.response Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'MessageHeaderResponse_Input',
	description: 'Information about the message that this message is a response to.  Only present if this message is a response.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		identifier: {
			type: new GraphQLNonNull(IdScalar),
			description: 'The MessageHeader.id of the message to which this message is a response.'
		},
		_identifier: {
			type: require('./element.input'),
			description: 'The MessageHeader.id of the message to which this message is a response.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/response-code
		code: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		_code: {
			type: require('./element.input'),
			description: 'Code that identifies the type of response to the message - whether it was successful or not, and whether it should be resent or not.'
		},
		details: {
			type: require('./reference.input'),
			description: 'Full details of any issues found in the message.'
		}
	})
});
