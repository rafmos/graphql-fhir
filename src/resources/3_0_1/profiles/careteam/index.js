const {
	CareTeamQuery,
	CareTeamListQuery,
	CareTeamInstanceQuery
} = require('./query');

const {
	CareTeamCreateMutation,
	CareTeamUpdateMutation,
	CareTeamDeleteMutation
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
		CareTeam: CareTeamQuery,
		CareTeamList: CareTeamListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		CareTeamCreate: CareTeamCreateMutation,
		CareTeamUpdate: CareTeamUpdateMutation,
		CareTeamDelete: CareTeamDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'CareTeam',
		path: '/3_0_1/CareTeam/:id',
		query: CareTeamInstanceQuery
	}
};
