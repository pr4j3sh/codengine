# codengine

Compile and execute code written in multiple programming languages on a single platform. It uses [codengine-core](https://hub.docker.com/r/pr4j3sh/codengine-core) container.

## Supported Languages

- Javascript
- Typescript
- Python
- Java
- Perl
- Ruby
- Rust
- Lua
- CPP
- C

### Pre-requisites

- [Docker](https://www.docker.com/get-started/)

## Usage

- Run using `docker`

```bash
docker run -p 5000:5000 pr4j3sh/codengine
```

- Use `curl` to make requests

```bash
curl -X POST http://127.0.0.1:5000/api/output/js \
-H "Content-Type: application/json" \
-d '{"code": "console.log(\"hello\")"}'
```

## API Endpoints

```bash
POST /api/output/java
POST /api/output/cpp
POST /api/output/lua
POST /api/output/js
POST /api/output/ts
POST /api/output/py
POST /api/output/pl
POST /api/output/rb
POST /api/output/rs
POST /api/output/c
```

> each endpoint requires raw form of code as `JSON` payload

```json
{
  "code": ""
}
```

## References

- [ExpressJs Documentation](https://expressjs.com/en/starter/hello-world.html)
- [Docker Documentation](https://docs.docker.com/)
- [@pr4j3sh/frames](https://github.com/pr4j3sh/frames)
