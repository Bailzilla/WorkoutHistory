const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'users.db'
});

class User extends Sequelize.Model {}
User.init({
  name: Sequelize.STRING,
}, { sequelize });

(async () => {

    await sequelize.sync({ force: true });

    try {
        const user = await User.create({
            name: 'Keith Bailey',
          });
        console.log(user.toJSON());

    } catch (error) {
        console.error('Error connecting to database', error);
    }
}) ();


