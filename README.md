
# Description

At Prestamisa, we offer personalized lending solutions tailored to your needs. Our seamless online platform makes managing a loan quick and easy. With transparent terms, dedicated support, and a focus on community impact, Prestamisa is here to help you achieve your financial goals. Join us today and experience the difference!


# Considerations ( Windows ) 

1. You should have docker desktop installed


# Prestamista Backend 

1. Clone the project
2. Create a copy of .env.template and rename it to .env
3. Configure your environment variables in the .env file
4. Run ```npm install```

# Execute the database with docker

1. After set your environment variables, run ```docker-compose up -d```
2. Then run ``` npx prisma migrate dev --name init ```