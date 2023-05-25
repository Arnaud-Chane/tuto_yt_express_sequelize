module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
    },
    description: {
      types: DataTypes.TEXT
    },
    published: {
      types: DataTypes.BOOLEAN
    }
  });

  return Product;
}