# URL_shortener
- git clone this repo
- install docker
- create a service account key : (https://console.cloud.google.com/apis/credentials/serviceaccountkey) and rename it as " key.json "
- create docker image : (sudo docker build -t urlshort . )
- run the docker image :( sudo docker run --env GOOGLE_APPLICATION_CREDENTIALS="key.json" -p 80:3333 -d urlshort )

TO TEST :
- copy your external ip in the adreess bar of your browser 
- input an URL 
- copy the output and paste it after the ip + backslash 
