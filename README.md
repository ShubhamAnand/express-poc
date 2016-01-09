Just to test express.js

Features-

1. HTTP methods for creating rest api
2. Routing facility to write the similar kinds of routes in separate JS file.
3. Integrating the "ejs" template engine for HTML view


APIs-

1. Register a new poop
    POST /social/api/poops
    Body={
      name: String,
      source: String,
      imgUrl: String,
      date: Date,
      description: String
    }

2. Get all poops
    GET /social/api/poops

3. Get all poops with limits
    GET /social/api/poops?start=X&end=Y

4. Get poop by ID
    GET /social/api/poops/:id

5. Get poop by name
    GET /social/api/poops/?name=X

6. Get poops by date range
    GET /social/api/poops?startDt=X&endDate

7. Get poops by source
    GET /social/api/poops?source=X

8. Update a poop using ID
    PUT /social/api/poops/:ID
    Body={
      name: String,
      source: String,
      imgUrl: String,
      date: Date,
      description: String
    }

9. Increase likes on a poop (URL hit will increase)
    PUT /social/api/poops/:id/likes

10. Post a comment on a poop using ID
    POST /social/api/poops/:id/comments
    body={
      userName: String,
      content: String,
      date: Date
    }

11. Increase likes on a poop comment (URL hit will increase)
    PUT /social/api/poops/:poopId/comments/:commentId/likes

12. Delete a comment on a poop
    DELETE /social/api/poops/:poopId/comments/:commentId

13. Delete a poop
    DELETE /social/api/poops/:poopId
