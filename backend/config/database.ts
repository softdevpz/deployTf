export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 's166.cyber-folks.pl'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'koszalki_tanzfaktur'),
      user: env('DATABASE_USERNAME', 'koszalki_tanzfaktur'),
      password: env('DATABASE_PASSWORD', 'Tanzfaktur123!@#'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
