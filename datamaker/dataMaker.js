const fs = require('fs');
const faker = require('faker');

// Utility functions

const lowerCase = char => char.toLowerCase();
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomAlphaNumeric = () =>  {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return possible.charAt(getRandomInt(0, possible.length));
};

const getWeightedAlphaNumeric = () =>  {
  var possible = "abcdefghijklmnopqrstuvwxyz01234567890123456789";
  return possible.charAt(getRandomInt(0, possible.length));
};

const getRandomAlphaNumericOfLength = someLength => {
  return Array.apply(null, {length: someLength})
    .map(getWeightedAlphaNumeric)
    .join('')
};

const getIdForContainer = () => {
  return getRandomAlphaNumericOfLength(8) + '-' +
    getRandomAlphaNumericOfLength(4) + '-' +
    getRandomAlphaNumericOfLength(4) + '-' +
    getRandomAlphaNumericOfLength(4) + '-' +
    getRandomAlphaNumericOfLength(12);
};

const getContainerId = () => getRandomAlphaNumericOfLength(64);

const getShortContainerId = containerId => containerId.substr(0, 12);

const getState = () => {
  const STATES = ['running', 'paused', 'stoppped'];
  return STATES[getRandomInt(0, (STATES.length - 1))];
}

// "ipv4Gateway":"172.17.112.1",
const getIp = () => getRandomInt(0, 255) + '.' + getRandomInt(0, 255) + '.' + getRandomInt(0, 255) + '.' + getRandomInt(0, 255);

// "macAddress":"00:15:5d:c4:67:80"
const getMacAddress = () => {
  const getMacGrouping = () => getWeightedAlphaNumeric() + getRandomInt(0, 9);
  return getMacGrouping() + ':' + getMacGrouping() + ':'
    + getMacGrouping() + ':' + getMacGrouping() + ':'
    + getMacGrouping() + ':' + getMacGrouping();
}

// build container node
const getContainerNode = () => {
  const containerId = getContainerId();

  return {
    "id": getIdForContainer(),
    "containerId": containerId,
    "shortContainerId": getShortContainerId(containerId),
    "image": faker.hacker.noun(),
    "imageId": 'sha256:' + getRandomAlphaNumericOfLength(64),
    "command": faker.fake("{{hacker.verb}} ./{{system.commonFileName}}"),
    "names":[faker.hacker.verb()],
    "state": getState(),
    "status":"Up 56 seconds",
    "totalSize":0,
    "changeSize":0,
    "labels":{},
    "networkSettings":{
      "nat":{
        "networkId": getRandomAlphaNumericOfLength(64),
        "endpointId": getRandomAlphaNumericOfLength(64),
        "ipv4Address": getIp(),
        "ipv4Gateway": getIp(),
        "ipv4PrefixLength": 16,
        "ipv6Address": "",
        "ipv6Gateway": "",
        "ipv6PrefixLength": 0,
        "macAddress": getMacAddress()
      }
    },
    "ports":[],
    "mounts":[
      {
        "type":"volume",
        "source":"",
        "destination": faker.fake("c:\\collector\\{{system.commonFileName}}"),
        "name": getRandomAlphaNumericOfLength(64),
        "readOnly":true
      }
    ],
    "created":"2018-09-15T00:19:03Z"
  }
};


const getHostNode = () => {
  // host OS info

  // host container info
  const containerCount = getRandomInt(0, 200);
  const startedCount = getRandomInt(0, containerCount);
  const pausedCount = getRandomInt(0, containerCount - startedCount);
  const stoppedCount = containerCount - startedCount - pausedCount;


  return {
    "id":"c179e882-4367-da0d-3cb6-fe8fa80ee2bf",
    "hostId":"DUFA:W3GX:W4XM:5ZJ3:U5CL:UOVJ:YBKA:MOSV:K64T:7DIQ:YOVQ:E2KK",
    "name": "Alienware",
    "osType": "windows",
    "os": "Windows 10 Pro Version 1803 (OS Build 17134.285)",
    "architecture": "x86_64",
    "kernelVersion": "10.0 17134 (17134.1.amd64fre.rs4_release.180410-1804)",
    "serverVersion": "18.06.1-ce",
    "rootDirectory": "C:\\ProgramData\\Docker",
    "experimental": faker.random.boolean(),
    "httpProxy": "",
    "httpsProxy": "",
    "noProxy": "",
    "labels": [],
    "cpuCount": getRandomInt(0, 64),
    "memoryTotal": 17077833728,
    "containerCount": containerCount,
    "runningContainerCount": startedCount,
    "pausedContainerCount": pausedCount,
    "stoppedContainerCount": stoppedCount,
    "imageCount": containerCount + getRandomInt(0, 50)
  }
};


module.exports = {
  getContainerNode,
  getHostNode
};


