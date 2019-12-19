docker build -f UIDockerfile . -t biranio/pathfinder-ui:dockerv1

docker build -f ServerDockerfile . -t biranio/pathfinder-server:dockerv1

cd mongo

docker build -t biranio/mongo:dockerv1 -f dockerfile .


docker push biranio/pathfinder-ui:dockerv1
docker push biranio/pathfinder-server:dockerv1
docker push biranio/mongo:dockerv1