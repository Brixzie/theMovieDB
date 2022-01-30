#No specific version selected
FROM node 
#Because we defined this we can refer to it with "."
WORKDIR /app
#Instea of "." could also be /app
#Not necessarily necessary but for optimization
#The result of COPY package.json is cached by Docker. And since package.json
#Doesnt change, npm install doesn't change anything. We do however need to copy the source code
# thus COPY . . Question: So if we change dependencies we have to remove this?
COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_NAME=myName

EXPOSE 3000

CMD ["npm", "start"]