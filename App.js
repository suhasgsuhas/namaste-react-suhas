/* 
<div>
<div>
    <h1></h1>
    <h2></h2>
</div>

</div>
*/

const parent= React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1", {id:"heading",}, "Bangalore"),React.createElement("h2", {id:"heading",}, "Mysore",)]
)
);

console.log("parent",parent);
const heading = React.createElement("h1", {id:"heading",}, "HELLO SUHAS G...............Mysore");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

