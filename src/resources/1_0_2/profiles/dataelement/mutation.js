// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const DataElementSchema = require('../../schemas/dataelement.schema');

// Inputs
const DataElementInput = require('../../inputs/dataelement.input');

// Resolvers
const {
	dataelementCreateResolver,
	dataelementUpdateResolver,
	dataelementDeleteResolver
} = require('./resolver');

// GraphQL
const { GraphQLNonNull } = require('graphql');

// Scope Utilities
const {
	scopeInvariant
} = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'DataElement',
	action: 'write',
	version: '1_0_2'
};

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a DataElement record.'
	},
	resource: {
		type: new GraphQLNonNull(DataElementInput),
		description: 'DataElement Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: new GraphQLNonNull(IdScalar),
		description: 'Unique identifier for selecting a DataElement record for deletion.'
	}
};

/**
 * @name exports.DataElementCreateMutation
 * @summary DataElementCreate Mutation.
 */
module.exports.DataElementCreateMutation = {
	args: WriteArgs,
	description: 'Create a DataElement',
	resolve: scopeInvariant(scopeOptions, dataelementCreateResolver),
	type: DataElementSchema
};

/**
 * @name exports.DataElementUpdateMutation
 * @summary DataElementUpdate Mutation.
 */
module.exports.DataElementUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple DataElements',
	resolve: scopeInvariant(scopeOptions, dataelementUpdateResolver),
	type: DataElementSchema
};

/**
 * @name exports.DataElementDeleteMutation
 * @summary DataElementDelete Mutation.
 */
module.exports.DataElementDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single DataElement',
	resolve: scopeInvariant(scopeOptions, dataelementDeleteResolver),
	type: DataElementSchema
};
