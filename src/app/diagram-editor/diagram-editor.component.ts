import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-diagram-editor',
  templateUrl: './diagram-editor.component.html',
  styleUrls: ['./diagram-editor.component.css']
})
export class DiagramEditorComponent implements OnInit {
  private diagram: go.Diagram = new go.Diagram();

  getSize(size){
    if(size < 30) {
      return 30;
    } else if (size > 100) {
      return 100;
    } else {
      return size
    }
  }

  autoMargin(size) {
    let autoMargin:number = 0;
    if(size < 30) {
      autoMargin = 30;
    } else if (size > 100) {
      autoMargin = 100;
    } else {
      autoMargin = size
    }
    return new go.Margin(autoMargin / 4, 0, 0 ,0);
  }

  textSize(size){
    let halfsize:number = 0;
    if(size < 30) {
      halfsize = 30;
    } else if (size > 100) {
      halfsize = 100;
    } else {
      halfsize = size
    }
    return halfsize / 2 + 'px FontAwesome'
  }

  minSize(size){
    let minSize:number = 0;
    if(size < 30) {
      minSize = 30;
    } else if (size > 100) {
      minSize = 100;
    } else {
      minSize = size
    }
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
            { fill: "#202940", portId: "", cursor: "pointer",
              // allow many kinds of links
              fromLinkable: true, toLinkable: true,
              fromLinkableSelfNode: true, toLinkableSelfNode: true,
              fromLinkableDuplicates: true, toLinkableDuplicates: true,
            },
            new go.Binding("stroke", "color"),
            new go.Binding("width", "size", this.getSize),
            new go.Binding("height", "size", this.getSize)),
            $(go.TextBlock, 
              { 
                stroke: '#8b92a9',
                textAlign: 'center',
                margin: 0,
                font: '30px FontAwesome',
                editable: false,
                isMultiline: false,
              },
              new go.Binding("margin", "size", this.autoMargin),
              new go.Binding("font", "size", this.textSize),
              new go.Binding("text", "icon"),
              new go.Binding("minSize", "size", this.minSize),
            ),
        ),
        { toolTip:
            $(go.Adornment, "Auto",
                $(go.Shape, { fill: "#202940", stroke: '#8b92a9', strokeWidth: 2 }),
                $(go.TextBlock, { margin: 8, stroke: '#8b92a9', font: "bold 11px sans-serif" },
                new go.Binding("text", "name")))
        },
        $(go.TextBlock, { 
          textAlign: 'center', 
          stroke: '#8b92a9',
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
        $(go.Shape, { strokeWidth: 2, stroke: '#32383e' }),
        $(go.Shape, { toArrow: "standard", stroke: '#32383e' }),
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

    // define the group template
    this.diagram.groupTemplate =
      $(go.Group, "Auto",
        { // define the group's internal layout
          layout: $(go.TreeLayout,
                    { angle: 90, arrangement: go.TreeLayout.ArrangementHorizontal, isRealtime: true }),
          // the group begins unexpanded;
          // upon expansion, a Diagram Listener will generate contents for the group
          isSubGraphExpanded: true,
        },
        $(go.Shape, "Rectangle",
          { fill: null, stroke: "#ddd", strokeWidth: 1 },
          new go.Binding("stroke", "color"))
        ),
        $(go.Panel, "Vertical",
          { defaultAlignment: go.Spot.Left, margin: 1 },
          $(go.Panel, "Horizontal",
            { defaultAlignment: go.Spot.Top },
            // the SubGraphExpanderButton is a panel that functions as a button to expand or collapse the subGraph
            $("SubGraphExpanderButton"),
            $(go.TextBlock,
              { font: "Bold 18px Sans-Serif", margin: 1 },
              new go.Binding("text", "key")
          ),
          // create a placeholder to represent the area where the contents of the group are
          $(go.Placeholder,
            { padding: new go.Margin(0, 10) })
        )  // end Vertical Panel
      );  // end Group


  }

  ngOnInit() {
    this.diagram.div = this.diagramRef.nativeElement;
  }
}
