var moment = require('moment');
// const { Op } = require('sequelize');
var _ = require('lodash');

module.exports = (sequelize, DataTypes) => {
	const tbl_kpi_matrix = sequelize.define('tbl_kpi_matrix', {
		id: {
			primaryKey: true,
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1
		},
		tittle: {
			type: DataTypes.STRING(50),
			required: true,
			allowNull: false,
		},
		tooltip: {
			type: DataTypes.TEXT,
			required: true,
			allowNull: false,
		},
		weightage: {
			type: DataTypes.STRING,
		},
		parent_matrix_kpi: {
			type: DataTypes.UUID,
		},
		kpi_id: {
			type: DataTypes.UUID,
		}
	}, { timestamps: true });
	return tbl_kpi_matrix;
}