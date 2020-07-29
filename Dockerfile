FROM centos:7
CMD yum install -y nodejs.x86_64
CMD npm install
CMD npm run serve
