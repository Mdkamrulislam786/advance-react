import React from "react";
let example = `render(
  <App>
    <Profiler id="Panel" onRender={callback}>
      <Panel {...props}>
        <Profiler id="Content" onRender={callback}>
          <Content {...props} />
        </Profiler>
        <Profiler id="PreviewPane" onRender={callback}>
          <PreviewPane {...props} />
        </Profiler>
      </Panel>
    </Profiler>
  </App>
);`;

const Profiler = () => {
  return (
    <div style={{ height: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Profiler overview</h2>
      <p>
        The Profiler measures how often a React application renders and what the
        “cost” of rendering is. Its purpose is to help identify parts of an
        application that are slow and may benefit from optimizations such as
        memoization. <br />
        Example: Using profiler component in code
      </p>

      <textarea name="" id="" cols="50" rows="20">
        {String(example)}
      </textarea>
      <h4>Follow these steps to use profiler</h4>
      <ul>
        <li>Intall react devtools</li>
        <li>Go to the devtools from your browser console, and open Profiler</li>
        <li>Press start,then do any task in the ui, press stop</li>
        <li>
          You'll see that it will log all the components that you clicked, and
          it will show all the info like <br />
          <b>id</b> , // the "id" prop of the Profiler tree that has just
          committed
          <br />
          phase, // either "mount" (if the tree just mounted) or "update" (if it
          re-rendered)
          <br />
          actualDuration, // time spent rendering the committed update
          <br />
          baseDuration, // estimated time to render the entire subtree without
          memoization <br />
          startTime, // when React began rendering this update
          <br /> commitTime, // when React committed this update
          <br /> interactions // the Set of interactions belonging to this
          update
        </li>
        <li>
          You can see the logs and decide, where you need to improve your code
          to make the app run faster
        </li>
        <li>
          Normally, you'll have to use <b>React.memo(Component)</b> or useMemo
          Hook to improve your app from re-rendering and do some other stuff
        </li>
      </ul>
    </div>
  );
};

export default Profiler;
