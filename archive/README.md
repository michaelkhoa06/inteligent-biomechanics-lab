# Local legacy data

`legacy-data/app.db` preserves the former root `data/app.db`, which contains existing user records. It is not used or deployed by the static website. The database is ignored by Git; retain this local archive if those records are needed. No database content is included in the website build.

The separate `backend/data/app.db` contained no user, visitor or chat records and was removed with the abandoned backend scaffolding.
