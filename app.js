let heading1=React.createElement("h1",{id:"title",style:{"color":'blue'}},"Hello World")

let heading2=React.createElement("h2",{id:'title1',style:{"color":"red"}},"Hey World")

let container=React.createElement("div",{id:"container"},[heading1,heading2])



let root=ReactDOM.createRoot(document.getElementById("root"))

root.render(container);