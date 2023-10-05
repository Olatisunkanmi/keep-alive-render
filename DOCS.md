# Ping - Node.js Module for URL Monitoring

The `Ping` class is a Node.js module designed for monitoring the health of a specified URL by periodically sending HTTP requests to it. This module can be used to track the availability of a web service and log the results.

## Installation

You can install this module using npm:

```bash
npm install @your-package-name/ping
```
## Configuration

Specify your Live URL in the APP_LIVE_URL in your ENV

```bash
APP_LIVE_URL='htts://www.example.com'
```

Within your express app, declare a heartbeat route

```javascript
//Declare health check route
app.get('/', (req, res) => res.send('Welcome to Heartbeat route'));
```

## Usage



### Example

```javascript
const Ping = require("@your-package-name/ping");

const options = {
  url: "https://example.com",
  timeout: 5,
  interval: 60,
  log: console.log,
  errorLog: console.error,
};

const ping = new Ping(options);
```

### Options

#### url

```javascript
Type: `string`\
Default: `www.example.com`
```
The URL to be monitored.

#### Interval
```javascript
Type: `number`\
Default: `60`
```

The number of seconds between each HTTP request.

### Logging

```javascript
Type: `function`\
Default: `console.log`
```

A function that is called when the availability of the URL changes. It is passed a single parameter that is an object with the following properties:

- `message`: A short description of the current status of the URL. Either `up` or `down`.
- `tries`: The number of consecutive times the URL has been down.
- `url`: The URL that is being monitored.
- `data`: The response data from the HTTP request.


```javascript
{
  message: 'success',
  tries: 80,
  url: "https://example.com",
  data: { message: 'Welcome to Heartbeat route' }
}

```

