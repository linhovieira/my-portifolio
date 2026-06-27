docker build --no-cache -t portfolio:1.0.1 -t portfolio:latest .

docker tag portfolio:1.0.1 paulinho2018/portfolio:1.0.1
docker tag portfolio:latest paulinho2018/portfolio:latest

docker push paulinho2018/portfolio:1.0.1
docker push paulinho2018/portfolio:latest