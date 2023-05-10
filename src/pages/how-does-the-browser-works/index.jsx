import React from "react";

const HowDoesTheBrowserWorks = () => {
  return (
    <div>
      <h1>How Does The Browser Works</h1>
      <p>
        Browser has some layers
        <ol>
          <li>User Interface</li>
          <li>
            Browser engine - Data Persistence: cookies , localstorage indexdb
            file systems etc
          </li>
          <li>Render Engine</li>
          <ul>
            <li>Networking</li>
            <li>JS interpreter</li>
            <li>UI Backend</li>
          </ul>
        </ol>
      </p>
      <br />
      <br />
      <h4>User Interface</h4>
      <p>
        Whatever you see on the browser is in the user interface layer. For
        example, whenever you searched in google and you see the search results
        page. This page comes in the user interface layer.
      </p>
      <br />
      <br />
      <h4>Browser engine</h4>
      <p>
        The data that has arrived from the server as response gets tranformed as
        DOM. Takes command and executes like reload
      </p>
      <h4>Render engine</h4>
      <p>
        <b>UI backend : Widgets </b>
        <b>JS interpreter : handles javascript </b>
        <b>Networking : </b> handles https requests and makes sure all the
        resources are available UI Manipulation update
      </p>
      <b>Parsing :</b>
      Gather resources html css js etc
      <p>
        There are 2 types of parser conventional and unconventional.
        conventional parser is used for parsing js and css. Unconventional
        parser is used for html
      </p>
    </div>
  );
};

export default HowDoesTheBrowserWorks;
