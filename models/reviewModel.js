module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    rating: {
      types: DataTypes.INTEGER
    },
    description: {
      types: DataTypes.TEXT
    }
  });

  return Review;
}