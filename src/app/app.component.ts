import { Component, ViewChild, ElementRef } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedModelTitle = 'Hosts';

  model = new go.GraphLinksModel([
    { key: "Good", isGroup: true, color: "green" },
    { key: "Bad", isGroup: true, color: "red" },
    { key: "Warning", isGroup: true, color: "orange" },
    {
      "key": 1,
      "icon": "\uf233", 
      "color": "green",
      "group": "Good",
      "type": "host",
      "size": 55,
      "id":"c179e882-4367-da0d-3cb6-fe8fa80ee2bf",
      "hostId":"DUFA:W3GX:W4XM:5ZJ3:U5CL:UOVJ:YBKA:MOSV:K64T:7DIQ:YOVQ:E2KK",
      "name":"Alienware 1",
      "osType":"windows",
      "os":"Windows 10 Pro Version 1803 (OS Build 17134.285)",
      "architecture":"x86_64",
      "kernelVersion":"10.0 17134 (17134.1.amd64fre.rs4_release.180410-1804)",
      "serverVersion":"18.06.1-ce",
      "rootDirectory":"C:\\ProgramData\\Docker",
      "experimental":false,
      "httpProxy":"",
      "httpsProxy":"",
      "noProxy":"",
      "labels":[],
      "cpuCount":8,
      "memoryTotal":17077833728,
      "containerCount":1,
      "runningContainerCount":1,
      "pausedContainerCount":0,
      "stoppedContainerCount":0,
      "imageCount":55
    },
    {
      "key": 2,
      "icon": "\uf233", 
      "color": "orange",
      "group": "Good",
      "type": "host",
      "size": 12,
      "id":"c179e882-4367-da0d-3cb6-fe8fa80ee2bf",
      "hostId":"DUFA:W3GX:W4XM:5ZJ3:U5CL:UOVJ:YBKA:MOSV:K64T:7DIQ:YOVQ:E2KK",
      "name":"Host 2",
      "osType":"windows",
      "os":"Windows 10 Pro Version 1803 (OS Build 17134.285)",
      "architecture":"x86_64",
      "kernelVersion":"10.0 17134 (17134.1.amd64fre.rs4_release.180410-1804)",
      "serverVersion":"18.06.1-ce",
      "rootDirectory":"C:\\ProgramData\\Docker",
      "experimental":false,
      "httpProxy":"",
      "httpsProxy":"",
      "noProxy":"",
      "labels":[],
      "cpuCount":8,
      "memoryTotal":17077833728,
      "containerCount":1,
      "runningContainerCount":1,
      "pausedContainerCount":0,
      "stoppedContainerCount":0,
      "imageCount":12
    },
    {
      "key": 3,
      "icon": "\uf233", 
      "color": "orange",
      "group": "Good",
      "type": "host",
      "size": 120,
      "id":"c179e882-4367-da0d-3cb6-fe8fa80ee2bf",
      "hostId":"DUFA:W3GX:W4XM:5ZJ3:U5CL:UOVJ:YBKA:MOSV:K64T:7DIQ:YOVQ:E2KK",
      "name":"Host 3",
      "osType":"windows",
      "os":"Windows 10 Pro Version 1803 (OS Build 17134.285)",
      "architecture":"x86_64",
      "kernelVersion":"10.0 17134 (17134.1.amd64fre.rs4_release.180410-1804)",
      "serverVersion":"18.06.1-ce",
      "rootDirectory":"C:\\ProgramData\\Docker",
      "experimental":false,
      "httpProxy":"",
      "httpsProxy":"",
      "noProxy":"",
      "labels":[],
      "cpuCount":8,
      "memoryTotal":17077833728,
      "containerCount":1,
      "runningContainerCount":1,
      "pausedContainerCount":0,
      "stoppedContainerCount":0,
      "imageCount":120
    }
  ]);

  model_2 = new go.GraphLinksModel([
    {
      "key": 1,
      "color": "green",
      "icon": "\uf0ae",
      "type": "container",
      "size": 50,
      "id":"ed077498-cde3-823d-327c-d3d01675ec62",
      "containerId":"89f9cd387c544fbd4701960d01c5d965423997f50992b0fff09240ae8788ac9b",
      "shortContainerId":"89f9cd387c54",
      "image":"fxcollector",
      "imageId":"sha256:78031eff88e724b82c53f796e286de3a966bf023446dc8426575a9a932eb29eb",
      "command":"dotnet out/FxCollector.dll",
      "names":["/FxCollector"],
      "name":"FxCollector",
      "state":"running",
      "status":"Up 56 seconds",
      "totalSize":0,
      "changeSize":0,
      "labels":{},
      "networkSettings":{
        "nat":{
          "networkId":"bbf4b68a523b013b9a3ba8355af779de9f1dd15251c74e60e339440201d9ecf2",
          "endpointId":"80a21fa2764e37a66f92e791fa9c08229b781a935c15e060c600743e39bcdb5a",
          "ipv4Address":"172.17.113.46",
          "ipv4Gateway":"172.17.112.1",
          "ipv4PrefixLength":16,
          "ipv6Address":"",
          "ipv6Gateway":"",
          "ipv6PrefixLength":0,
          "macAddress":"00:15:5d:c4:67:80"
        }
      },
      "ports":[],
      "mounts":[
        {
          "type":"volume",
          "source":"",
          "destination":"c:\\fx\\collector\\logs",
          "name":"66231947614c46205656a79c41ebb9aede456575f9d4096f508e739883641944",
          "readOnly":true
        }
      ],
      "created":"2018-09-15T00:19:03Z"
    },
    {
      "key": 2,
      "color": "red",
      "icon": "\uf0ae",
      "type": "container",
      "size": 50,
      "id":"ed077498-cde3-823d-327c-d3d01675ec62",
      "containerId":"89f9cd387c544fbd4701960d01c5d965423997f50992b0fff09240ae8788ac9b",
      "shortContainerId":"89f9cd387c54",
      "image":"fxcollector",
      "imageId":"sha256:78031eff88e724b82c53f796e286de3a966bf023446dc8426575a9a932eb29eb",
      "command":"dotnet out/FxCollector.dll",
      "names":["/FxCollector", "Daddy", "Mommy", "Son"],
      "name":"FxCollector 2",
      "state":"running",
      "status":"Up 56 seconds",
      "totalSize":0,
      "changeSize":0,
      "labels":{},
      "networkSettings":{
        "nat":{
          "networkId":"bbf4b68a523b013b9a3ba8355af779de9f1dd15251c74e60e339440201d9ecf2",
          "endpointId":"80a21fa2764e37a66f92e791fa9c08229b781a935c15e060c600743e39bcdb5a",
          "ipv4Address":"172.17.113.46",
          "ipv4Gateway":"172.17.112.1",
          "ipv4PrefixLength":16,
          "ipv6Address":"",
          "ipv6Gateway":"",
          "ipv6PrefixLength":0,
          "macAddress":"00:15:5d:c4:67:80"
        }
      },
      "ports":[],
      "mounts":[
        {
          "type":"volume",
          "source":"",
          "destination":"c:\\fx\\collector\\logs",
          "name":"66231947614c46205656a79c41ebb9aede456575f9d4096f508e739883641944",
          "readOnly":true
        }
      ],
      "created":"2018-09-15T00:19:03Z"
    },
    {
      "key": 3,
      "color": "yellow",
      "icon": "\uf0ae",
      "type": "container",
      "size": 50,
      "id":"ed077498-cde3-823d-327c-d3d01675ec62",
      "containerId":"89f9cd387c544fbd4701960d01c5d965423997f50992b0fff09240ae8788ac9b",
      "shortContainerId":"89f9cd387c54",
      "image":"fxcollector",
      "imageId":"sha256:78031eff88e724b82c53f796e286de3a966bf023446dc8426575a9a932eb29eb",
      "command":"dotnet out/FxCollector.dll",
      "names":["/FxCollector"],
      "name":"FxCollector 3",
      "state":"running",
      "status":"Up 56 seconds",
      "totalSize":0,
      "changeSize":0,
      "labels":{},
      "networkSettings":{
        "nat":{
          "networkId":"bbf4b68a523b013b9a3ba8355af779de9f1dd15251c74e60e339440201d9ecf2",
          "endpointId":"80a21fa2764e37a66f92e791fa9c08229b781a935c15e060c600743e39bcdb5a",
          "ipv4Address":"172.17.113.46",
          "ipv4Gateway":"172.17.112.1",
          "ipv4PrefixLength":16,
          "ipv6Address":"",
          "ipv6Gateway":"",
          "ipv6PrefixLength":0,
          "macAddress":"00:15:5d:c4:67:80"
        }
      },
      "ports":[],
      "mounts":[
        {
          "type":"volume",
          "source":"",
          "destination":"c:\\fx\\collector\\logs",
          "name":"66231947614c46205656a79c41ebb9aede456575f9d4096f508e739883641944",
          "readOnly":true
        }
      ],
      "created":"2018-09-15T00:19:03Z"
    },
    {
      "key": 4,
      "color": "green",
      "icon": "\uf0ae",
      "type": "container",
      "size": 50,
      "id":"ed077498-cde3-823d-327c-d3d01675ec62",
      "containerId":"89f9cd387c544fbd4701960d01c5d965423997f50992b0fff09240ae8788ac9b",
      "shortContainerId":"89f9cd387c54",
      "image":"fxcollector",
      "imageId":"sha256:78031eff88e724b82c53f796e286de3a966bf023446dc8426575a9a932eb29eb",
      "command":"dotnet out/FxCollector.dll",
      "names":["/FxCollector"],
      "name":"FxCollector 4",
      "state":"running",
      "status":"Up 56 seconds",
      "totalSize":0,
      "changeSize":0,
      "labels":{},
      "networkSettings":{
        "nat":{
          "networkId":"bbf4b68a523b013b9a3ba8355af779de9f1dd15251c74e60e339440201d9ecf2",
          "endpointId":"80a21fa2764e37a66f92e791fa9c08229b781a935c15e060c600743e39bcdb5a",
          "ipv4Address":"172.17.113.46",
          "ipv4Gateway":"172.17.112.1",
          "ipv4PrefixLength":16,
          "ipv6Address":"",
          "ipv6Gateway":"",
          "ipv6PrefixLength":0,
          "macAddress":"00:15:5d:c4:67:80"
        }
      },
      "ports":[],
      "mounts":[
        {
          "type":"volume",
          "source":"",
          "destination":"c:\\fx\\collector\\logs",
          "name":"66231947614c46205656a79c41ebb9aede456575f9d4096f508e739883641944",
          "readOnly":true
        }
      ],
      "created":"2018-09-15T00:19:03Z"
    },
    {
      "key": 5,
      "color": "green",
      "icon": "\uf0ae",
      "type": "container",
      "size": 50,
      "id":"ed077498-cde3-823d-327c-d3d01675ec62",
      "containerId":"89f9cd387c544fbd4701960d01c5d965423997f50992b0fff09240ae8788ac9b",
      "shortContainerId":"89f9cd387c54",
      "image":"fxcollector",
      "imageId":"sha256:78031eff88e724b82c53f796e286de3a966bf023446dc8426575a9a932eb29eb",
      "command":"dotnet out/FxCollector.dll",
      "names":["/FxCollector"],
      "name":"FxCollector 5",
      "state":"running",
      "status":"Up 56 seconds",
      "totalSize":0,
      "changeSize":0,
      "labels":{},
      "networkSettings":{
        "nat":{
          "networkId":"bbf4b68a523b013b9a3ba8355af779de9f1dd15251c74e60e339440201d9ecf2",
          "endpointId":"80a21fa2764e37a66f92e791fa9c08229b781a935c15e060c600743e39bcdb5a",
          "ipv4Address":"172.17.113.46",
          "ipv4Gateway":"172.17.112.1",
          "ipv4PrefixLength":16,
          "ipv6Address":"",
          "ipv6Gateway":"",
          "ipv6PrefixLength":0,
          "macAddress":"00:15:5d:c4:67:80"
        }
      },
      "ports":[],
      "mounts":[
        {
          "type":"volume",
          "source":"",
          "destination":"c:\\fx\\collector\\logs",
          "name":"66231947614c46205656a79c41ebb9aede456575f9d4096f508e739883641944",
          "readOnly":true
        }
      ],
      "created":"2018-09-15T00:19:03Z"
    }
  ],
  [
    { from: 1, to: 4, text: "A" },
    { from: 1, to: 5, text: "B" },
    { from: 3, to: 2, text: "C" },
    { from: 4, to: 5, text: "D" },
    { from: 2, to: 5, text: "E" }
  ]);

  model_3 = new go.GraphLinksModel(
    [
      { key: 1, name: "1", color: "red", size: 30, icon: "\uf000" },
      { key: 2, name: "2", color: "green", size: 35, icon: "\uf000" },
      { key: 3, name: "3", color: "green", size: 40, icon: "\uf000" },
      { key: 4, name: "4", color: "green", size: 42, icon: "\uf000" },
      { key: 5, name: "5", color: "red", size: 22, icon: "\uf000" },
      { key: 6, name: "6", color: "green", size: 32, icon: "\uf000" },
      { key: 7, name: "7", color: "green", size: 40, icon: "\uf000" },
      { key: 8, name: "8", color: "green", size: 30, icon: "\uf000" },
      { key: 9, name: "9", color: "red", size: 42, icon: "\uf000" },
      { key: 10, name: "10", color: "green", size: 35, icon: "\uf000" },
      { key: 11, name: "11", color: "green", size: 35, icon: "\uf000" },
      { key: 12, name: "12", color: "green", size: 25, icon: "\uf000" }
    ],
    [
      { from: 1, to: 2, text: "A" },
      { from: 1, to: 3, text: "B" },
      { from: 3, to: 4, text: "C" },
      { from: 4, to: 1, text: "D" },
      { from: 5, to: 2, text: "E" },
      { from: 6, to: 3, text: "F" },
      { from: 7, to: 4, text: "G" },
      { from: 8, to: 1, text: "H" },
      { from: 9, to: 2, text: "I" },
      { from: 10, to: 3, text: "J" },
      { from: 11, to: 4, text: "K" },
      { from: 12, to: 1, text: "L" }
    ]);

  selectedModel = this.model;

  models = ["Hosts", "Containers", "Services"]

  @ViewChild('text')
  private textField: ElementRef;

  data: any;
  node: go.Node;

  showDetails(node: go.Node | null) {
    this.node = node;
    if (node) {
      // copy the editable properties into a separate Object
      this.data = {
        text: node.data.text,
        color: node.data.color,
        scale: node.data.scale
      };
    } else {
      this.data = null;
    }
  }

  onChangeModel(modelSelection){

    this.selectedModelTitle = modelSelection;
    
    if(modelSelection === 'Hosts'){
      this.selectedModel = this.model;
    } else if(modelSelection === 'Containers'){
      this.selectedModel = this.model_2;
    } else if(modelSelection === 'Services'){
      this.selectedModel = this.model_3;
    } else {
      this.selectedModel = this.model;
    }
  }

  onCommitDetails() {
    if (this.node) {
      const model = this.node.diagram.model;
      // copy the edited properties back into the node's model data,
      // all within a transaction
      model.startTransaction();
      model.setDataProperty(this.node.data, "text", this.data.text);
      model.setDataProperty(this.node.data, "color", this.data.color);
      model.setDataProperty(this.node.scale, "scale", this.data.scale);
      model.commitTransaction("modified properties");

      const model_2 = this.node.diagram.model;
      // copy the edited properties back into the node's model data,
      // all within a transaction
      model_2.startTransaction();
      model_2.setDataProperty(this.node.data, "text", this.data.text);
      model_2.setDataProperty(this.node.data, "color", this.data.color);
      model_2.setDataProperty(this.node.scale, "scale", this.data.scale);
      model_2.commitTransaction("modified properties");

      const model_3 = this.node.diagram.model;
      // copy the edited properties back into the node's model data,
      // all within a transaction
      model_3.startTransaction();
      model_3.setDataProperty(this.node.data, "text", this.data.text);
      model_3.setDataProperty(this.node.data, "color", this.data.color);
      model_3.setDataProperty(this.node.scale, "scale", this.data.scale);
      model_3.commitTransaction("modified properties");

    }
  }

  onCancelChanges() {
    // wipe out anything the user may have entered
    this.showDetails(this.node);
  }

  onModelChanged(c: go.ChangedEvent) {
    // who knows what might have changed in the selected node and data?
    this.showDetails(this.node);
  }
}
