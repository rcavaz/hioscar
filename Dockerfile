FROM mcr.microsoft.com/playwright:v1.25.0-focal AS baseline
WORKDIR /app
COPY LOG.txt .
