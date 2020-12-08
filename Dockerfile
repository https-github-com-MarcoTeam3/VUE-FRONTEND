FROM node:latest
WORKDIR /VUE-FRONTEND
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]
# 'build cmd'= docker build . -t vuefront