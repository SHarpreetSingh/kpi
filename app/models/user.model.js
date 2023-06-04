var moment = require('moment');
// const { Op } = require('sequelize');
var _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
	const tb_facilities = sequelize.define('tb_facilities', {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1
		},
		name: {
			type: DataTypes.STRING(50),
			required: true,
			allowNull: false,
		},
		createOn: {
			type: DataTypes.BIGINT,
			required: true,
			allowNull: false,
		},
		updateOn: {
			type: DataTypes.BIGINT,
			required: true,
			allowNull: false,
		},
	}, { timestamps: false });
	return tb_facilities;
}