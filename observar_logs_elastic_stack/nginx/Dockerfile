FROM nginx:latest

RUN rm -f /var/log/nginx/access.log && rm -f /var/log/nginx/error.log

RUN curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-9.0.1-arm64.deb && \
    dpkg -i filebeat-9.0.1-arm64.deb

COPY filebeat.yml /etc/filebeat/filebeat.yml
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]