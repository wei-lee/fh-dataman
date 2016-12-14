//conf-docker.json is generated from this in the Dockerfile
var placeholders = {
  "port": 8080,
  "logger.streams[0].level": "{{env.FH_LOG_LEVEL}}",
  "logger.streams[1].level": "{{env.FH_LOG_LEVEL}}"
};

module.exports = placeholders;