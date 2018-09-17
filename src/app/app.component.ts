import { Component, ViewChild, ElementRef } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedModelTitle = 'Cluster';

  model = new go.GraphLinksModel([
    {
      "key": 1,
      "icon": "\uf233", 
      "color": "green",
      "strokeWidth": 4,
      "geo": "host",
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
      "imageCount":52
    },
    {
      "key": 2,
      "icon": "\uf233", 
      "color": "orange",
      "strokeWidth": 4,
      "geo": "home",
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
      "strokeWidth": 4,
      "geo": "home",
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

  model_2 = new go.GraphLinksModel(
    [
      { key: 1, text: "A", color: "green", scale: 40, strokeWidth: 4 },
      { key: 2, text: "B", color: "yellow", scale: 45, strokeWidth: 2 },
      { key: 3, text: "C", color: "orange", scale: 22, strokeWidth: 5 }
    ],
    [
      { from: 1, to: 2, text: "A" },
      { from: 1, to: 3, text: "B" },
      { from: 3, to: 1, text: "C" }
    ]);

  model_3 = new go.GraphLinksModel(
    [
      { key: 1, text: "1", color: "red", scale: 30, strokeWidth: 4 },
      { key: 2, text: "2", color: "green", scale: 35, strokeWidth: 2 },
      { key: 3, text: "3", color: "green", scale: 40, strokeWidth: 5 },
      { key: 4, text: "4", color: "green", scale: 42, strokeWidth: 3 },
      { key: 5, text: "5", color: "red", scale: 22, strokeWidth: 4 },
      { key: 6, text: "6", color: "green", scale: 32, strokeWidth: 2 },
      { key: 7, text: "7", color: "green", scale: 40, strokeWidth: 5 },
      { key: 8, text: "8", color: "green", scale: 30, strokeWidth: 3 },
      { key: 9, text: "9", color: "red", scale: 42, strokeWidth: 4 },
      { key: 10, text: "10", color: "green", scale: 35, strokeWidth: 2 },
      { key: 11, text: "11", color: "green", scale: 35, strokeWidth: 5 },
      { key: 12, text: "12", color: "green", scale: 25, strokeWidth: 3 }
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

  model_4 = new go.GraphLinksModel(
    [
      { key: 1, text: "Pod A", color: "green", scale: 40, strokeWidth: 4 },
      { key: 2, text: "Pod B", color: "yellow", scale: 45, strokeWidth: 2 },
      { key: 3, text: "Pod C", color: "orange", scale: 22, strokeWidth: 5 }
    ],
    [
      { from: 1, to: 2, text: "A" },
      { from: 1, to: 3, text: "B" },
      { from: 3, to: 1, text: "C" }
    ]);

  model_5 = new go.GraphLinksModel(
    [
      { key: 1, text: "MS A", color: "green", scale: 40, strokeWidth: 4 },
      { key: 2, text: "MS B", color: "yellow", scale: 45, strokeWidth: 2 },
      { key: 3, text: "MS C", color: "orange", scale: 22, strokeWidth: 5 }
    ],
    [
      { from: 1, to: 2, text: "A" },
      { from: 1, to: 3, text: "B" },
      { from: 3, to: 1, text: "C" }
    ]);

  selectedModel = this.model;

  models = ["Cluster", "Name Space", "Deployments", "Pods", "Microservices"]

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
    
    if(modelSelection === 'Cluster'){
      this.selectedModel = this.model;
    } else if(modelSelection === 'Name Space'){
      this.selectedModel = this.model_2;
    } else if(modelSelection === 'Deployments'){
      this.selectedModel = this.model_3;
    } else if(modelSelection === 'Pods'){
      this.selectedModel = this.model_4;
    } else if(modelSelection === 'Microservices'){
      this.selectedModel = this.model_5;
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
