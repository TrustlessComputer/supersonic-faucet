- require python3.10
  
```
python3 -m venv venv
source venv/bin/activate

```
- install pip packages: `web3 pydantic fastapi `
- start redis:

```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest

REPOSITORY                 TAG             IMAGE ID       CREATED        SIZE
redis/redis-stack-server   latest          3135b315b47c   2 weeks ago    455MB
```
- run backend:
  
```
uvicorn faucet_service:app --reload
```
