const {
	CommunicationQuery,
	CommunicationListQuery,
	CommunicationInstanceQuery
} = require('./query');

const {
	CommunicationCreateMutation,
	CommunicationUpdateMutation,
	CommunicationDeleteMutation
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	* Define Query Schema's here
	* Each profile will need to define the two queries it supports
	* and these keys must be unique across the entire application, like routes
	*/
	query: {
		Communication: CommunicationQuery,
		CommunicationList: CommunicationListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		CommunicationCreate: CommunicationCreateMutation,
		CommunicationUpdate: CommunicationUpdateMutation,
		CommunicationDelete: CommunicationDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Communication',
		path: '/3_0_1/Communication/:id',
		query: CommunicationInstanceQuery
	}
};
