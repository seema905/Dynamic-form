import React from "react";
export default function FormRender(props) {
  return (
    <div>
      <form>
      {props.data?.properties &&
        Object.keys(props.data.properties).map((element, id) => {
          return (
            <div key={id} style={{padding:'1em'}}>
              <label style={{paddingRight:'0.5em'}}>{element}</label>
              {props.data.properties[element].type === "string" && <input type="string" />}
              {props.data.properties[element].type === "number" && (
                <input type="number" />
              )}
              {props.data.properties[element].type === "integer" && (
                <input type="integer" />
              )}
              {props.data.properties[element].type === "object" && ( 
                <FormRender data={props.data.properties[element]} />
              )}
            </div>
          );
        })}
        </form>
    </div>
  );
}