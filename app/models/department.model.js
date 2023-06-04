var moment = require('moment');
// const { Op } = require('sequelize');
var _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
	const tbl_department = sequelize.define('tbl_department', {
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
	}, { timestamps: true });
	return tbl_department;
}