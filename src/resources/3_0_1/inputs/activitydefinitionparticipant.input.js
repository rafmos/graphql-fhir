const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ActivityDefinition.participant Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ActivityDefinitionParticipant_Input',
	description: 'Indicates who should participate in performing the action described.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-participant-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of participant in the action.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The type of participant in the action.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/action-participant-role
		role: {
			type: require('./codeableconcept.input'),
			description: 'The role the participant should play in performing the described action.'
		}
	})
});
