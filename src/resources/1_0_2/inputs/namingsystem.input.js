const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let NamingSystemResourceInputType = new GraphQLEnumType({
	name: 'NamingSystemResourceInputType',
	values: {
		NamingSystem: { value: 'NamingSystem' }
	}
});

/**
 * @name exports
 * @summary NamingSystem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'NamingSystem_Input',
	description: 'Base StructureDefinition for NamingSystem Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(NamingSystemResourceInputType),
			description: 'Type of this resource.'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The descriptive name of this particular identifier type or code system.'
		},
		_name: {
			type: require('./element.input'),
			description: 'The descriptive name of this particular identifier type or code system.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/conformance-resource-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates whether the naming system is \'ready for use\' or not.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates whether the naming system is \'ready for use\' or not.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/namingsystem-type
		kind: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the purpose for the naming system - what kinds of things does it make unique?.'
		},
		_kind: {
			type: require('./element.input'),
			description: 'Indicates the purpose for the naming system - what kinds of things does it make unique?.'
		},
		publisher: {
			type: GraphQLString,
			description: 'The name of the individual or organization that published the naming system.'
		},
		_publisher: {
			type: require('./element.input'),
			description: 'The name of the individual or organization that published the naming system.'
		},
		contact: {
			type: new GraphQLList(require('./namingsystemcontact.input')),
			description: 'Contacts to assist a user in finding and communicating with the publisher.'
		},
		responsible: {
			type: GraphQLString,
			description: 'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.'
		},
		_responsible: {
			type: require('./element.input'),
			description: 'The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision.'
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date  (and optionally time) when the system was registered or published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the registration changes.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/identifier-type
		type: {
			type: require('./codeableconcept.input'),
			description: 'Categorizes a naming system for easier search by grouping related naming systems.'
		},
		description: {
			type: GraphQLString,
			description: 'Details about what the namespace identifies including scope, granularity, version labeling, etc.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Details about what the namespace identifies including scope, granularity, version labeling, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/use-context
		useContext: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of naming systems.'
		},
		usage: {
			type: GraphQLString,
			description: 'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.'
		},
		_usage: {
			type: require('./element.input'),
			description: 'Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.'
		},
		uniqueId: {
			type: new GraphQLList(new GraphQLNonNull(require('./namingsystemuniqueid.input'))),
			description: 'Indicates how the system may be identified when referenced in electronic exchange.'
		},
		replacedBy: {
			type: require('./reference.input'),
			description: 'For naming systems that are retired, indicates the naming system that should be used in their place (if any).'
		}
	})
});
