# Project Name

Brief description of your project.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/naumanshabbir2811/venturenox_backend_assesment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Run Docker Compose to start the PostgreSQL database and Adminer:

    ```bash
    docker-compose up -d
    ```

4. **Important Note:** An initial SQL script is included in the Docker setup, which will automatically create the necessary table schema for you.

5. Install Node.js dependencies:

    ```bash
    npm install
    ```

6. Run Sequelize migrations to set up the database If the schema does not craeted using the intial script:

    ```bash
    npx sequelize-cli db:migrate
    ```



### Running the Application

6. Start the Express.js server:

    ```bash
    npm start
    ```

   The server should now be running at `http://localhost:your-port`.

## Usage

Describe how to use your application, including any specific endpoints, APIs, or features.

curl http://localhost:your-port/api/tenants/

curl http://localhost:your-port/api/tenants/1


curl -X PATCH -H "Content-Type: application/json" -d '{"name":"Updated Tenant"}' http://localhost:your-port/api/tenants/1

curl -X DELETE http://localhost:your-port/api/tenants/1

curl -X POST -H "Content-Type: application/json" -d '{"first_name":"John","last_name":"Doe","employee_id":123,"tenant_id":1}' 
http://localhost:your-port/api/users/

curl http://localhost:your-port/api/users/

curl http://localhost:your-port/api/users/1

curl -X PATCH -H "Content-Type: application/json" -d '{"first_name":"Updated","last_name":"User"}' http://localhost:your-port/api/users/1

curl -X DELETE http://localhost:your-port/api/users/1



## Kafka Integration

If your project involves Kafka, provide instructions for setting up and running Kafka. Include any configurations or steps needed to use Kafka with your project.

## Contributing

Explain how others can contribute to your project. Include guidelines for pull requests and any specific coding conventions.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Any credits or acknowledgments you want to give.

## Credentials

POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE_LIST=social
SOCIAL_DB=social
SOCIAL_PORT=4000
MASTER_PORT=5000
DATABASE_HOST=postgres
