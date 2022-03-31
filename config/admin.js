module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07a0ee3ab9c60696f9ae7c96d6b942aa'),
  },
});
