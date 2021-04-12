


module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        }
    ,
    {
        tableName: "Comentarios",
        timestamps: false
    });
    return Comentario
}