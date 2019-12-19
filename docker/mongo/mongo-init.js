db.auth('root', 'root')

db = db.getSiblingDB('pathfinder')

db.createUser({
  user: 'user',
  pwd: 'password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});