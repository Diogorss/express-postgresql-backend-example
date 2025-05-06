

export default (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
        },
        password: {
        type: Sequelize.STRING,
        allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: true
    });
    
    return User;
}      



  

