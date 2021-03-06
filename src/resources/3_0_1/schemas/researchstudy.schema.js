const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ResearchStudyResourceType = new GraphQLEnumType({
	name: 'ResearchStudyResourceType',
	values: {
		ResearchStudy: { value: 'ResearchStudy' }
	}
});

/**
 * @name exports
 * @summary ResearchStudy Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ResearchStudy',
	description: 'Base StructureDefinition for ResearchStudy Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ResearchStudyResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this research study by the sponsor or other systems.'
		},
		title: {
			type: GraphQLString,
			description: 'A short, descriptive user-friendly label for the study.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'A short, descriptive user-friendly label for the study.'
		},
		protocol: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The set of steps expected to be performed as part of the execution of the study.'
		},
		partOf: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'A larger research study of which this particular study is a component or step.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/research-study-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The current state of the study.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The current state of the study.'
		},
		category: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.'
		},
		focus: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.'
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.schema')),
			description: 'Contact details to assist a user in learning more about or engaging with the study.'
		},
		relatedArtifact: {
			type: new GraphQLList(require('./relatedartifact.schema')),
			description: 'Citations, references and other related documents.'
		},
		keyword: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Key terms to aid in searching for or filtering the study.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/jurisdiction
		jurisdiction: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates a country, state or other region where the study is taking place.'
		},
		description: {
			type: GraphQLString,
			description: 'A full description of how the study is being conducted.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'A full description of how the study is being conducted.'
		},
		enrollment: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. \' 200 female Europeans between the ages of 20 and 45 with early onset diabetes\'.'
		},
		period: {
			type: require('./period.schema'),
			description: 'Identifies the start date and the expected (or actual, depending on status) end date for the study.'
		},
		sponsor: {
			type: require('./reference.schema'),
			description: 'The organization responsible for the execution of the study.'
		},
		principalInvestigator: {
			type: require('./reference.schema'),
			description: 'Indicates the individual who has primary oversite of the execution of the study.'
		},
		site: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Clinic, hospital or other healthcare location that is participating in the study.'
		},
		reasonStopped: {
			type: require('./codeableconcept.schema'),
			description: 'A description and/or code explaining the premature termination of the study.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Comments made about the event by the performer, subject or other participants.'
		},
		arm: {
			type: new GraphQLList(require('./researchstudyarm.schema')),
			description: 'Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.'
		}
	})
});
