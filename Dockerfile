FROM node:12

ARG EN_VIVO_BACKEND_API_URL
ENV EN_VIVO_BACKEND_API_URL $EN_VIVO_BACKEND_API_URL

ADD ./en-vivo-frontend /en-vivo-frontend
WORKDIR /en-vivo-frontend

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]