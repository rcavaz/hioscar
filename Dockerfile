FROM mcr.microsoft.com/playwright:v1.25.0-focal AS baseline
WORKDIR /app
COPY . .
RUN yarn install

FROM baseline AS builder
WORKDIR /app
ENV CI=true E2E=true INTEGRATION=false
ENTRYPOINT ["yarn", "test"]
