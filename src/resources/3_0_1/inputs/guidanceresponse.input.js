const IdScalar = require('../scalars/id.scalar');
const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let GuidanceResponseResourceInputType = new GraphQLEnumType({
	name: 'GuidanceResponseResourceInputType',
	values: {
		GuidanceResponse: { value: 'GuidanceResponse' }
	}
});

/**
 * @name exports
 * @summary GuidanceResponse Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'GuidanceResponse_Input',
	description: 'Base StructureDefinition for GuidanceResponse Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(GuidanceResponseResourceInputType),
			description: 'Type of this resource.'
		},
		requestId: {
			type: IdScalar,
			description: 'The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.'
		},
		_requestId: {
			type: require('./element.input'),
			description: 'The id of the request associated with this response. If an id was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Allows a service to provide a unique, business identifier for the response.'
		},
		module: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'A reference to the knowledge module that was invoked.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/guidance-response-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the response. If the evaluation is completed successfully, the status will indicate success. However, in order to complete the evaluation, the engine may require more information. In this case, the status will be data-required, and the response will contain a description of the additional required information. If the evaluation completed successfully, but the engine determines that a potentially more accurate response could be provided if more data was available, the status will be data-requested, and the response will contain a description of the additional requested information.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The patient for which the request was processed.'
		},
		context: {
			type: require('./reference.input'),
			description: 'Allows the context of the guidance response to be provided if available. In a service context, this would likely be unavailable.'
		},
		occurrenceDateTime: {
			type: DateTimeScalar,
			description: 'Indicates when the guidance response was processed.'
		},
		_occurrenceDateTime: {
			type: require('./element.input'),
			description: 'Indicates when the guidance response was processed.'
		},
		performer: {
			type: require('./reference.input'),
			description: 'Provides a reference to the device that performed the guidance.'
		},
		reasonCodeableConcept: {
			type: require('./codeableconcept.input'),
			description: 'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.'
		},
		reasonReference: {
			type: require('./reference.input'),
			description: 'Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.'
		},
		note: {
			type: new GraphQLList(require('./annotation.input')),
			description: 'Provides a mechanism to communicate additional information about the response.'
		},
		evaluationMessage: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.'
		},
		outputParameters: {
			type: require('./reference.input'),
			description: 'The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.'
		},
		result: {
			type: require('./reference.input'),
			description: 'The actions, if any, produced by the evaluation of the artifact.'
		},
		dataRequirement: {
			type: new GraphQLList(require('./datarequirement.input')),
			description: 'If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.'
		}
	})
});
