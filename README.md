# codengine

Compile and execute code written in multiple programming languages on a single platform.

## Supported Languages

- cpp
- c
- py
- js

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
/api/output/js
/api/output/py
/api/output/cpp
/api/output/c
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
