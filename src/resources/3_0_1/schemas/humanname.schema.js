const {
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLString,
	GraphQLList
} = require('graphql');

// Utils
const { resolve } = require('../../../utils/resolve.utils');
const { extendSchema } = require(resolve('utils/schema.utils'));

let HumanNameUseType = new GraphQLEnumType({
	name: 'HumanNameUseType',
	values: {
		usual: { value: 'usual' },
		official: { value: 'official' },
		temp: { value: 'temp' },
		nickname: { value: 'nickname' },
		anonymous: { value: 'anonymous' },
		old: { value: 'old' },
		maiden: { value: 'maiden' }
	}
});

/**
 * @name exports
 * @summary HumanName Fields
 */
let HumanName = new GraphQLObjectType({
	name: 'HumanName',
	description: 'A human\'s name with the ability to identify parts and usage.',
	fields: () => extendSchema(require('./element.schema'), {
		use: {
			type: HumanNameUseType,
			description: 'Identifies the purpose for this name.'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Extensions for use'
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the name.'
		},
		_text: {
			type: require('./element.schema'),
			description: 'Extensions for text'
		},
		family: {
			type: GraphQLString,
			description: 'The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.'
		},
		_family: {
			type: require('./element.schema'),
			description: 'Extensions for family'
		},
		given: {
			type: new GraphQLList(GraphQLString),
			description: 'Given name.'
		},
		_given: {
			type: require('./element.schema'),
			description: 'Extensions for given'
		},
		prefix: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.'
		},
		_prefix: {
			type: require('./element.schema'),
			description: 'Extensions for prefix'
		},
		suffix: {
			type: new GraphQLList(GraphQLString),
			description: 'Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.'
		},
		_suffix: {
			type: require('./element.schema'),
			description: 'Extensions for suffix'
		},

		period: {
			type: require('./period.schema'),
			description: 'Indicates the period of time when this name was valid for the named person.'
		}
	})
});

module.exports = HumanName;
