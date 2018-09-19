import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-diagram-editor',
  templateUrl: './diagram-editor.component.html',
  styleUrls: ['./diagram-editor.component.css']
})
export class DiagramEditorComponent implements OnInit {
  private diagram: go.Diagram = new go.Diagram();

  getScale(scale){
    if(scale < 30) {
      return 30;
    } else if (scale > 100) {
      return 100;
    } else {
      return scale
    }
  }

  autoMargin(scale) {
    let autoMargin:number = 0;
    if(scale < 30) {
      autoMargin = 30;
    } else if (scale > 100) {
      autoMargin = 100;
    } else {
      autoMargin = scale
    }
    return new go.Margin(autoMargin / 4, 0, 0 ,0);
  }

  textSize(scale){
    let halfScale:number = 0;
    if(scale < 30) {
      halfScale = 30;
    } else if (scale > 100) {
      halfScale = 100;
    } else {
      halfScale = scale
    }
    return halfScale / 2 + 'px FontAwesome'
  }

  minSize(scale){
    let minSize:number = 0;
    if(scale < 30) {
      minSize = 30;
    } else if (scale > 100) {
      minSize = 100;
    } else {
      minSize = scale
    }
    console.log(scale, minSize);
    return new go.Size(minSize, minSize)
  }

  

  @ViewChild('diagramDiv')
  private diagramRef: ElementRef;

  @Input()
  get model(): go.Model { return this.diagram.model; }
  set model(val: go.Model) { this.diagram.model = val; }

  @Output()
  nodeSelected = new EventEmitter<go.Node|null>();

  @Output()
  modelChanged = new EventEmitter<go.ChangedEvent>();

  constructor() {

    //console.log(this.diagram.model);
    const $ = go.GraphObject.make;
    this.diagram = new go.Diagram();
    this.diagram.initialAutoScale = go.Diagram.UniformToFill,
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.allowDrop = false;  // necessary for dragging from Palette
    this.diagram.undoManager.isEnabled = true;
    this.diagram.layout = $(go.ForceDirectedLayout, { defaultSpringLength: 0 });
    this.diagram.addDiagramListener("ChangedSelection",
        e => {
          const node = e.diagram.selection.first();
          this.nodeSelected.emit(node instanceof go.Node ? node : null);
        });
    this.diagram.addModelChangedListener(e => e.isTransactionFinished && this.modelChanged.emit(e));

    this.diagram.nodeTemplate =
      $(go.Node, "Vertical",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Panel,
          $(go.Shape, "Circle",
            { fill: "white", portId: "", cursor: "pointer",
              // allow many kinds of links
              fromLinkable: true, toLinkable: true,
              fromLinkableSelfNode: true, toLinkableSelfNode: true,
              fromLinkableDuplicates: true, toLinkableDuplicates: true,
            },
            new go.Binding("stroke", "color")
            new go.Binding("width", "imageCount", this.getScale),
            new go.Binding("height", "imageCount", this.getScale)),
            $(go.TextBlock, 
              { 
                stroke: '#000',
                textAlign: 'center',
                margin: 0,
                font: '30px FontAwesome',
                editable: false,
                isMultiline: false,
              },
              new go.Binding("margin", "imageCount", this.autoMargin),
              new go.Binding("font", "imageCount", this.textSize),
              new go.Binding("text", "icon"),
              new go.Binding("minSize", "imageCount", this.minSize),
            ),
        ),
        { toolTip:
            $(go.Adornment, "Auto",
                $(go.Shape, { fill: "white", stroke: '#888', strokeWidth: 2 }),
                $(go.TextBlock, { margin: 8, stroke: '#888', font: "bold 11px sans-serif" },
                new go.Binding("text", "name")))
        },
        $(go.TextBlock, { 
          textAlign: 'center', 
          stroke: '#fff',
          maxSize: new go.Size(80, NaN) 
        },
        new go.Binding("text", "name"))
      );
      

    this.diagram.linkTemplate =
      $(go.Link,
        // allow relinking
        {
          curve: go.Link.Bezier, adjusting: go.Link.Stretch,
          reshapable: true, relinkableFrom: false, relinkableTo: false,
          toShortLength: 3
        },
        $(go.Shape, { strokeWidth: 1.5 }),
        $(go.Shape, { toArrow: "standard", stroke: null }),
        $(go.Panel, "Auto",
          $(go.TextBlock, "",  // the label text
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: 'white',
              margin: 4,
              editable: true  // enable in-place editing
            },
            // editing the text automatically updates the model data
            new go.Binding("text").makeTwoWay()))
      );
  }

  ngOnInit() {
    this.diagram.div = this.diagramRef.nativeElement;
  }
}
