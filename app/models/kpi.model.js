var moment = require('moment');
// const { Op } = require('sequelize');
var _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
	const tbl_kpi = sequelize.define('tbl_kpi', {
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
		description: {
			type: DataTypes.STRING(50),
			required: true,
			allowNull: false,
		},
		department_id: {
			type: DataTypes.UUID,
		},
		has_self_Review: {
			type: DataTypes.BOOLEAN,
		}
	}, { timestamps: true });
	return tbl_kpi;
}