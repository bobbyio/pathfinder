oc new-project pathfinder

oc login -u system:admin

kubectl create clusterrolebinding permissive-binding \
  --clusterrole=cluster-admin \
  --user=admin \
  --user=kubelet \
  --group=system:serviceaccounts

oc login with developer 

oc process -f pathfinder-os.yml |oc create -f-

http://pathfinder-ui-pathfinder.148.253.158.44.nip.io/