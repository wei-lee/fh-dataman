#!/bin/bash
#
# Special helper script to be used in conjunction with /etc/init.d/fh-dataman
# to ensure log output (sent to stdout,stderr) from a daemonized script is accessible.
#
umask 002
exec /usr/local/bin/fh-dataman $* > /var/log/feedhenry/fh-dataman/fh-dataman-console.log 2>&1
