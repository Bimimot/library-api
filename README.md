## BOOKS
GET /books?id={id}
GET /books?from={id}&amount={amount}

## ADMIN
### BOOKS
POST /book
body {title, description, tags, age, image, author}

PATCH /book/{id}
body {title, description, tags, age, image, author}

DEL /book/{id}

### ADMIN
GET /admins
POST /admin/add
DEL /admin/{id}
PATCH /me {login, password}

Restore pass?


