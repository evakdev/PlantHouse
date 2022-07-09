FROM alpine:latest
COPY . .
RUN /bin/sh
RUN sleep 60
