
docker : #0 building with "default" instance using docker driver
At line:1 char:1
+ docker build --no-cache -t my-app -f Dockerfile . 2>&1 | tee build.lo ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (#0 building wit...g docker driver:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

#1 [internal] load .dockerignore
#1 transferring context: 2B done
#1 DONE 0.0s

#2 [internal] load build definition from Dockerfile
#2 transferring dockerfile: 170B done
#2 DONE 0.0s

#3 [internal] load metadata for docker.io/library/node:latest
#3 ...

#4 [auth] library/node:pull token for registry-1.docker.io
#4 DONE 0.0s

#3 [internal] load metadata for docker.io/library/node:latest
#3 DONE 9.8s

#5 [1/5] FROM docker.io/library/node:latest@sha256:0ded28778059262bd3c066b609186e5b6c89550a9362dce4309ad67c95af0d77
#5 DONE 0.0s

#6 [2/5] WORKDIR /app
#6 CACHED

#7 [internal] load build context
#7 transferring context: 1.67kB done
#7 DONE 0.0s

#8 [3/5] COPY package*.json ./
#8 DONE 0.0s

#9 [4/5] RUN npm install
#9 0.733 npm ERR! code ENOENT
#9 0.733 npm ERR! syscall open
#9 0.736 npm ERR! path /app/package.json
#9 0.737 npm ERR! errno -2
#9 0.739 npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
#9 0.739 npm ERR! enoent This is related to npm not being able to find a file.
#9 0.740 npm ERR! enoent 
#9 0.741 
#9 0.741 npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-01-28T14_01_35_081Z-debug-0.log
#9 ERROR: process "/bin/sh -c npm install" did not complete successfully: exit code: 254
------
 > [4/5] RUN npm install:
 ERR! code ENOENT
0.733 npm ERR! syscall open
0.736 npm ERR! path /app/package.json
0.737 npm ERR! errno -2
0.739 npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
0.739 npm ERR! enoent This is related to npm not being able to find a file.
0.740 npm ERR! enoent 
0.741 
0.741 npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-01-28T14_01_35_081Z-debug-0.log
------
Dockerfile:7
--------------------
   5 |     COPY package*.json ./
   6 |     
   7 | >>> RUN npm install
   8 |     
   9 |     COPY . .
--------------------
ERROR: failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 254

View build details: docker-desktop://dashboard/build/default/default/3bb8s4y96tg0m5bj9mdz991ic
