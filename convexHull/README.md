# How to run the application

In your terminal navigate into the convexHull directory and execute the following commands:

```bash
docker build -t convex-hull .
```

```bash
 docker run --rm --name convex-hull -p 8080:80 convex-hull
```

Open up "localhost:8080" in your browser to view the application
