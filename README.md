# README

## Task API

This is a simple REST API for managing tasks.

### Endpoints

*   `GET /api/tasks`: Returns all tasks.
    *   Query parameters:
        *   `completed`:  Filter tasks by completion status (`true` or `false`).
*   `POST /api/tasks`: Adds a new task.
    *   Body:
        *   `description`:  The description of the task (required).
*   `PUT /api/tasks/:id`: Marks a task as completed.
*   `DELETE /api/tasks/:id`: Deletes a task.

### Validations

*   `POST /api/tasks`:
    *   The `description` field is required and must not be empty.

### Instructions

1.  Install dependencies:

    ```bash
    npm install express
    ```
2.  Run the server:

    ```bash
    node server.js
    ```
