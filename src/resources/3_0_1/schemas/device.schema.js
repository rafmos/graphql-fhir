const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let DeviceResourceType = new GraphQLEnumType({
	name: 'DeviceResourceType',
	values: {
		Device: { value: 'Device' }
	}
});

/**
 * @name exports
 * @summary Device Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Device',
	description: 'Base StructureDefinition for Device Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DeviceResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Unique instance identifiers assigned to a device by manufacturers other organizations or owners.'
		},
		udi: {
			type: require('./deviceudi.schema'),
			description: '[Unique device identifier (UDI)](device.html#5.11.3.2.2) assigned to device label or package.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/device-status
		status: {
			type: CodeScalar,
			description: 'Status of the Device availability.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Status of the Device availability.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/device-kind
		type: {
			type: require('./codeableconcept.schema'),
			description: 'Code or identifier to identify a kind of device.'
		},
		lotNumber: {
			type: GraphQLString,
			description: 'Lot number assigned by the manufacturer.'
		},
		_lotNumber: {
			type: require('./element.schema'),
			description: 'Lot number assigned by the manufacturer.'
		},
		manufacturer: {
			type: GraphQLString,
			description: 'A name of the manufacturer.'
		},
		_manufacturer: {
			type: require('./element.schema'),
			description: 'A name of the manufacturer.'
		},
		manufactureDate: {
			type: DateTimeScalar,
			description: 'The date and time when the device was manufactured.'
		},
		_manufactureDate: {
			type: require('./element.schema'),
			description: 'The date and time when the device was manufactured.'
		},
		expirationDate: {
			type: DateTimeScalar,
			description: 'The date and time beyond which this device is no longer valid or should not be used (if applicable).'
		},
		_expirationDate: {
			type: require('./element.schema'),
			description: 'The date and time beyond which this device is no longer valid or should not be used (if applicable).'
		},
		model: {
			type: GraphQLString,
			description: 'The \'model\' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.'
		},
		_model: {
			type: require('./element.schema'),
			description: 'The \'model\' is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.'
		},
		version: {
			type: GraphQLString,
			description: 'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.'
		},
		_version: {
			type: require('./element.schema'),
			description: 'The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Patient information, If the device is affixed to a person.'
		},
		owner: {
			type: require('./reference.schema'),
			description: 'An organization that is responsible for the provision and ongoing maintenance of the device.'
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.schema')),
			description: 'Contact details for an organization or a particular human that is responsible for the device.'
		},
		location: {
			type: require('./reference.schema'),
			description: 'The place where the device can be found.'
		},
		url: {
			type: UriScalar,
			description: 'A network address on which the device may be contacted directly.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'A network address on which the device may be contacted directly.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Descriptive information, usage information or implantation information that is not captured in an existing element.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/device-safety
		safety: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Provides additional safety characteristics about a medical device.  For example devices containing latex.'
		}
	})
});