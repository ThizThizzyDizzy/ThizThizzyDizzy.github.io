#!/bin/bash
rsync -avP --delete \
       --exclude '.git/' \
       --exclude '.gitignore*' \
       --exclude '.gitattributes' \
       --exclude 'deploy.sh' \
       --exclude 'CNAME' \
       --exclude 'nbproject/' \
       ./ thiz@terminator.thizthizzydizzy.com:/var/www/
