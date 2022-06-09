# Notes:
Script installation recommendable only for development environments.
The big picture: it is possible to have many containers under the same operating system. Isolating area of OS with resource
manifest file has information about the relationshipt between layers

# Some commands
- sudo usermod -aG docker username : agrega el usuario username al grupo de usuario 'docker'
- sudo docker history redis
- docker image rm redis

# How works / Main concepts
1. Kernel Internals: has namespaces] | controls groups | virtual machinnes 

# Architecure:
Docker uses a client-server architecture

# Working with images
1. get manifest file
2. pull layers



