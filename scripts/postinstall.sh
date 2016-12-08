#!/bin/sh
# PostInstall Script for fh-dataman

# Service Management (root only)
if [ "$(id -u)" = "0" ]; then
 OSNAME=`uname -s`
 case $OSNAME in
  Linux)
   echo "Installing Service Control Scripts"
   cp ./scripts/fh-dataman /etc/init.d
   cp ./scripts/fh-dataman-launcher.sh /usr/local/bin
   echo Initialising - update-rc.d fh-dataman defaults 80
   update-rc.d fh-dataman defaults 80
  ;;
  *)
   # Reserved for future use
  ;;
 esac
fi
